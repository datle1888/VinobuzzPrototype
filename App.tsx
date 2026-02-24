import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/app/AppNavigator';
import GlobalChatHost from './src/components/chat/GlobalChatHost';
import { ChatProvider } from './src/context/ChatContext';

export default function App() {
  return (
    <ChatProvider>
      <NavigationContainer>
        <AppNavigator />
        <GlobalChatHost />
      </NavigationContainer>
    </ChatProvider>
  );
}
