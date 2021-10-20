import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Users from './Users';
import Home from './Home';


const App = () => {
  return (

    <div className="page">
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/users">Users</Link>
          </li>
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/users" component={Users} />
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
};

export default App;
