/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';

import RootProvider from '@providers/_RootProvider';
import React from 'react';
import Routes from '@routes/routes';

const App = () => {

  return (
    <NavigationContainer>
      <RootProvider>
        <Routes />
      </RootProvider>
    </NavigationContainer>
  );
};


export default App;
