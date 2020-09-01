import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Global/style.css";
import Dashboard from "./Pages/Dashboard/DashboardScreen";
import DrawerLeft from "./Components/Drawer";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", maxHeight: "100%", flexWrap: "wrap" }}>
        <DrawerLeft />
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
