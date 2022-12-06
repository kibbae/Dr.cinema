import React from "react";
import AppContainer from "./Src/routes"
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <AppContainer/>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}