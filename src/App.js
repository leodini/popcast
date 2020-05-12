import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import Routes from "./Routes";
import { Messages } from './components'
import "./Global.css";

function App() {
  return (
    <Provider store={store}>
      <Messages />
      <Routes />
    </Provider>
  );
}

export default App;
