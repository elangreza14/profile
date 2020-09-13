import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "../shared/components/organisms";
import { AppRoute } from "./AppRoute";

const MainRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <Switch>
        {AppRoute.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact}>
            <Suspense fallback={<div>Loading...</div>}>
              <route.component />
            </Suspense>
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export default MainRouter;
