import React, { Component } from 'react';
import './App.css';


import SignIn from './components/auth/SignIn';
class App extends Component {
  render() {
    return (
      <div className="container App">
        <header className="App-header">
          <SignIn></SignIn>
        </header>
      </div>
    );
  }
}

export default App;
