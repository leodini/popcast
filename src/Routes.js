import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home, Podcast, PodcastSearch, SingleEpisode } from "./pages";
import { Messages, Title } from './components'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/podcast/:id" component={Podcast} />
        <Route path="/search" component={PodcastSearch} />
        <Route path="/episode/:id" component={SingleEpisode} />
      </Switch>
        <Title />
        <Messages />
    </BrowserRouter>
  );
}
