import React, {
    createContext,
    useState,
    useContext,
    useEffect,
} from "react";
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import {
    GoogleSignin
} from '@react-native-google-signin/google-signin';
import { firebase } from '@react-native-firebase/auth'

import googleServicesJSON from "../../android/app/google-services.json";
import { Alert } from "react-native";

interface AuthenticationContextData {
    user: FirebaseAuthTypes.User | null;
    signInWithGoogle(): Promise<void>;
    signOut(): Promise<void>;
}

const AuthenticationContext = createContext<AuthenticationContextData>({} as AuthenticationContextData);

const AuthenticationProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

    const signInWithGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const user = await GoogleSignin.signIn();
            const credential = firebase.auth.GoogleAuthProvider.credential(user.idToken);
            await firebase.auth().signInWithCredential(credential);
            //setUser(userFirebase.user);
        } catch (error) {
            console.log(error);
        }
    };

    const signOut = async () => {
        try {
            signOutWithGoogle();
            signOutWithFirebase();
        } catch (error) {
            console.log(error);
            Alert.alert(String(error));
        }
    };

    const signOutWithFirebase = async () => {
        try {
            await auth().signOut();
        } catch (error) {
            Alert.alert(String(error));
        }
    };

    const signOutWithGoogle = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
        } catch (error) {
            console.log(error)
        }
    };

    // Handle user state changes
    function onAuthStateChanged(newUser: FirebaseAuthTypes.User | null) {
        console.log("onAuthStateChanged=" + new Date());
        console.log(newUser);
        setUser(newUser);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

        return subscriber; // unsubscribe on unmount
    }, []);

    useEffect(() => {
        const webClientId = googleServicesJSON.client[0].oauth_client[0].client_id;
        GoogleSignin.configure({ webClientId });
    }, []);

    return (
        <AuthenticationContext.Provider value={{ user, signInWithGoogle, signOut }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

function useAuthentication(): AuthenticationContextData {
    const context = useContext(AuthenticationContext);

    if (!context) {
        throw new Error("useAuthentication must be used within an AuthenticationProvider");
    }

    return context;
}

export { AuthenticationProvider, useAuthentication };