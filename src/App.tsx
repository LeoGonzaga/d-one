import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/DashboardScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
