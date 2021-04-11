import React from 'react';
import { Redirect, Switch } from 'react-router';
import { Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/Routes/PrivateRoute';
import routes from './routes/routes';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={routes.login} component={Login} />
        <PrivateRoute path={routes.home.base} component={Dashboard} />
        <Redirect path={'/'} to={routes.home.base} />
      </Switch>
    </div>
  );
}

export default App;
