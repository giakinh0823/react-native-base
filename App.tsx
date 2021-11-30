import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/app/store";
import { App as AppRoot } from "./app/index";

export default function App() {
  return (
    <Provider store={store}>
      <AppRoot/>
    </Provider>
  );
}
