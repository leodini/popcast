import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./Routes";
import { Messages, Player, Title } from "./components";
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
