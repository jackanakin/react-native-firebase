import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { EAuthenticationRoutes } from "@routes/@enum/EAuthenticationRoutes";
import SignInScreen from "@screens/SignIn/SignInScreen";

const Stack = createNativeStackNavigator();

const AuthenticationRoutes: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName={EAuthenticationRoutes.SignIn}
            screenOptions={{
                headerShown: false
            }}>

            <Stack.Screen name={EAuthenticationRoutes.SignIn} component={SignInScreen} />
        </Stack.Navigator>
    )
};

export default AuthenticationRoutes;