/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { REACT_APP_WEB_CLIENT_ID, REACT_APP_IOS_CLIENT_ID } from '@env';
import Conversation from './src/views/conversation';
import { UtilityThemeProvider } from 'react-native-design-utility';
import { theme } from './src/utils/theme';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/views/login';
import RootNavigation from './src/navigation';

function App(): JSX.Element {
  
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        REACT_APP_WEB_CLIENT_ID,
      iosClientId:
        REACT_APP_IOS_CLIENT_ID,
      offlineAccess: false,
    });
    console.log(REACT_APP_WEB_CLIENT_ID)
  }, [])

  const onSignIn = async () => {
    const userInfo = await GoogleSignin.signIn();
    console.log(JSON.stringify(userInfo))
      
  };

  return (
    <UtilityThemeProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <RootNavigation />
      </SafeAreaView>
    </UtilityThemeProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
