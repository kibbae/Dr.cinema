import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from 'native-base';

import Taps from "./Src/routes";

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Taps />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;