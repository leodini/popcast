import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./Routes";
import Messages from "./components/Messages";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <Messages />
    </Provider>
  );
}

export default App;
