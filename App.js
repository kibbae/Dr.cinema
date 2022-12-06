import React from "react";
import AppContainer from "./Src/routes"
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <AppContainer/>
    </NativeBaseProvider>
  );
}