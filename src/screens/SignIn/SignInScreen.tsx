/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from 'react-native';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

import { useAuthentication } from '@providers/AuthenticationProvider';

const SignInScreen = () => {
    const { user, signInWithGoogle, signOut } = useAuthentication();

    return (
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <GoogleSigninButton
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={signInWithGoogle}
                />
                <Button title='SIGN-OUT' onPress={signOut} />
                <View>
                    <Text>Welcome {user?.email}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default SignInScreen;
