import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home/home";
import Movie from "../pages/Movie/movie";
import Tv from "../pages/Tv/tv";

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/movie/:id">
        <Movie />
      </Route>
      <Route path="/tv/:id">
        <Tv />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default Routes;
