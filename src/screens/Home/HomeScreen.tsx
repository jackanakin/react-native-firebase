/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from 'react-native';

import { useAuthentication } from '@providers/AuthenticationProvider';

const HomeScreen = () => {
    const { user, signOut } = useAuthentication();

    return (
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <Button title='SIGN-OUT' onPress={signOut} />
                <View>
                    <Text>Welcome {user?.email}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default HomeScreen;
