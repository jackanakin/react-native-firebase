/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import RootProvider from '@providers/_RootProvider';
import SignInScreen from '@screens/SignIn/SignInScreen';
import React from 'react';

const App = () => {

  return (
    <RootProvider>
      <SignInScreen />
    </RootProvider>
  );
};


export default App;
