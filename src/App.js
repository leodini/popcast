import React from "react";
import { Provider } from "react-redux";

import { Header, Player, Title } from "./components";
import store from "./store";
import Routes from "./Routes";
import "./Global.css";

function App() {
  return (
    <Provider store={store}>
      <Title />
      <Routes />
      <Player />
    </Provider>
  );
}

export default App;
