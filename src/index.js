import React from 'react';
import { Platform, KeyboardAvoidingView } from 'react-native';
import Routes from './commons/routes';

const AppContainer = () => {

  return (
      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex: 1}}>
          <Routes />
      </KeyboardAvoidingView>
    );
}

    export default AppContainer;