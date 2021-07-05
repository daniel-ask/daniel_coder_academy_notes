import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import AuthenticationProvider from '../contexts/AuthenticationProvider';

const App = () => (
  <AuthenticationProvider>
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
    </Router>
  </AuthenticationProvider>
);

export default App;
