import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Gallery from "../pages/Gallery/Gallery";
import Dashboard from "../pages/Dashboard/Dashboard";
import Layout from "../components/Layout/Layout";
import Account from "../pages/Account/Account";
const NavRouter = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <Layout {...props}>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/account" component={Account} />
            </Switch>
          </Layout>
        )}
      />
    </BrowserRouter>
  );
};

export default NavRouter;
