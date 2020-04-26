import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home, Podcast, PodcastSearch } from "./pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/podcast/:id" component={Podcast} />
        <Route path="/search" component={PodcastSearch} />
      </Switch>
    </BrowserRouter>
  );
}
