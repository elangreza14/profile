import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppRoute } from "./AppRoute";

const MainRouter = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {AppRoute.map((route, index) => (
              <li key={index}>
                <Link to={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Switch>
          {AppRoute.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact}>
              <route.component />
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default MainRouter;
