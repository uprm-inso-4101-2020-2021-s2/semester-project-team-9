import React from "react";

import { Route, Switch } from "react-router-dom";
import Select from "../Select";
import Login from "../Login/top-navbar.jsx";
const MainMenu = () => {
  return (
    <Switch>
      <Route exact path="/select" render={() => <Select />} />

      <Route exact path="/" render={() => <Login />} />
    </Switch>
  );
};
export default MainMenu;
