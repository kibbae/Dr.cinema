import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from 'native-base';
import { Provider } from "react-redux";
import store from "./Src/DataSystem/Redux/store";

import Taps from "./Src/routes";

const App = () => {
  return (
    <Provider store={store}>
    <NativeBaseProvider>
      <NavigationContainer>
        <Taps />
      </NavigationContainer>
    </NativeBaseProvider>
    </Provider>
  );
}

export default App;