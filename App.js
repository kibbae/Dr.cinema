import React from "react";
import AppContainer from "./Src/routes"
import { NativeBaseProvider } from 'native-base';
import { Provider } from "react-redux";
import store from "./Src/DataSystem/Redux/store";

export default function App() {
  return (
    <Provider store={store}>
    <NativeBaseProvider>
      <AppContainer/>
    </NativeBaseProvider>
    </Provider>
  );
}