import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./Routes";
import Messages from "./components/Messages";
import Player from "./components/Player";
import Title from './components/Title'
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Title />
      <Routes />
      <Messages />
      <Player />
    </Provider>
  );
}

export default App;
