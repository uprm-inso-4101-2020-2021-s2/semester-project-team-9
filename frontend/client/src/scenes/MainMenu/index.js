import React from "react";

import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Login from "../Login/top-navbar.jsx";
const MainMenu = () => {
  return (
    <Switch>
      <Route exact path="/Home" render={() => <Home />} />

      <Route exact path="/" render={() => <Login />} />
    </Switch>
  );
};
export default MainMenu;
