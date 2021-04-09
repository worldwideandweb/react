import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import NavigationContainer from './components/Navigation/NavigationContainer/NavigationContainer';

function App() {
  return (
    <div className="App">
      <NavigationContainer />
      <Switch>
        <Route path={'/login'} component={Login} />
      </Switch>
    </div>
  );
}

export default App;
