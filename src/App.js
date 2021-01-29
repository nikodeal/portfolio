import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./routes/homepage/HomePage";

import MainNavigation from "./navigation/MainNavigation";
import ProjectPage from "./routes/projects/ProjectPage";

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/projects" exact>
            <ProjectPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
