import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Navigate from './components/layout/Navigate';
import Dashboard from './components/dashboard/Dashboard';
import RecipeDetails from './components/recipes/RecipeDetails';
import SignIn from './components/auth/SignIn';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <Navigate/>
        <Switch>
          <Route exact path='/' component ={ Dashboard }/>
          <Route path='/recipes/:id' component ={ RecipeDetails }/>
          <Route path='/signin' component ={ SignIn }/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
