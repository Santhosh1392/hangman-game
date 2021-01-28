import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import GamePage from './pages/game';
import HomePage from "./pages/home";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/game" exact component={GamePage} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Router>
  );
}

export default AppRouter;