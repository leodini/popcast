import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import Routes from "./Routes";
import "./Global.css";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
