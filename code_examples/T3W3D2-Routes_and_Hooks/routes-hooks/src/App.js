import "./App.css";
import Item from "./Item";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  const authenticated = true;
  return (
    <Router>
      <nav>
        <ul>
          <NavLink exact activeClassName="active" to="/">
            <li>Home</li>
          </NavLink>
          <NavLink activeClassName="active" to="/about">
            <li>About</li>
          </NavLink>
        </ul>
      </nav>
      <Switch>
        {/* <Route exact path="/" component={App} /> */}
        <Route exact path="/about" render={() => <h1>About</h1>} />
        <Route exact path="/items/:id" component={Item} />
        {authenticated ? <Route path='/' exact render={() => <h1>Authenticated</h1>} /> : <Redirect to="/about" /> }
        {/* <Route
          exact
          path="/props-through-component"
          component={() => <PropsPage title={`Props through component`} />}
        /> */}
        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
