import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/app/AppNavigator';
import GlobalChatHost from './src/components/chat/GlobalChatHost';
import { ChatProvider } from './src/context/ChatContext';
import { navigationRef } from './src/app/navigationRef';

export default function App() {
  return (
    <ChatProvider>
      <NavigationContainer ref={navigationRef}>
        <AppNavigator />
        <GlobalChatHost />
      </NavigationContainer>
    </ChatProvider>
  );
}
