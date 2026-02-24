import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/app/AppNavigator';
import { ChatProvider } from './src/context/ChatContext';
import GlobalChatHost from './src/components/chat/GlobalChatHost';
import { navigationRef } from './src/app/navigationRef';
import { ConnectivityProvider } from './src/context/ConnectivityContext';
import OfflineBanner from './src/components/common/OfflineBanner';
import { linking } from './src/app/linking';

export default function App() {
  return (
    <ConnectivityProvider>
      <ChatProvider>
        <NavigationContainer ref={navigationRef} linking={linking}>
          <AppNavigator />
          <OfflineBanner />
          <GlobalChatHost />
        </NavigationContainer>
      </ChatProvider>
    </ConnectivityProvider>
  );
}
