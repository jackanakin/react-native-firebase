import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { EHomeRoutes } from "@routes/@enum/EHomeRoutes";
import HomeScreen from "@screens/Home/HomeScreen";

const Stack = createNativeStackNavigator();

const HomeRoutes: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName={EHomeRoutes.Home}
            screenOptions={{
                headerShown: false
            }}>

            <Stack.Screen name={EHomeRoutes.Home} component={HomeScreen} />
        </Stack.Navigator>
    )
};

export default HomeRoutes;