import React, { useState, useMemo } from "react";

import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Login from "../Login/top-navbar.jsx";
import userContext from "../../context/userContext";

const MainMenu = () => {
  const [loggedUser, updateLoggedUser] = useState(null);
  const providerValue = useMemo(() => ({ loggedUser, updateLoggedUser }), [
    loggedUser,
    updateLoggedUser,
  ]);
  return (
    <Switch>
      <userContext.Provider value={providerValue}>
        <Route exact path="/Home" render={() => <Home />} />
        <Route exact path="/" render={() => <Login />} />
      </userContext.Provider>
    </Switch>
  );
};
export default MainMenu;
