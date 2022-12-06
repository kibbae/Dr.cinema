import React from "react";
import AppContainer from "./Src/routes"
import { NativeBaseProvider } from 'native-base';
import { Provider } from "react-redux";
import store from "./Src/DataSystem/ReduxStates/store";

export default function App() {
  console.log(store.getState());
  return (
    <Provider store={store}>
    <NativeBaseProvider>
      <AppContainer/>
    </NativeBaseProvider>
    </Provider>
  );
}