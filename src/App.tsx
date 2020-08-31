import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Global/style.css";
import Dashboard from "./Pages/Dashboard/DashboardScreen";
import DrawerLeft from "./Components/Drawer";

function App() {
  return (
    <Router>
      <DrawerLeft />
      <Switch>
        <Route path="/" exact>
          {/* <Dashboard /> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
