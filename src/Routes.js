import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Podcast from "./pages/Podcast";
import Search from './pages/Search'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/podcast/:id" component={Podcast} />
        <Route path="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  );
}
