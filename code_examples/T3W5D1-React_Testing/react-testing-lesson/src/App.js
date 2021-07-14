import React from "react";
import PriceLookUp from "./PriceLookUp";
import { Link, Switch, Route, useLocation } from "react-router-dom";
import {BrowserRouter as Router} from 'react-router-dom';

const NoMatch = () => <div>404 Page not found</div>;
const CatFacts = () => <div>Cat Fact</div>;

export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};

function App() {
  return (
    <Router>
    <div>
      <Link to="/">Home</Link>

      <Link to="/cat">Cat facts</Link>

      <Switch>
        <Route exact path="/">
          <PriceLookUp />
        </Route>

        <Route path="/cat">
          <CatFacts />
        </Route>

        <Route>
          <NoMatch />
        </Route>
      </Switch>

      <LocationDisplay />
    </div>
    </Router>
  );
}

export default App;