import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Payment from './Payment/Payment';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="row">
          <div className="col4">&nbsp;</div>
          <div className="col4">
            <Payment />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
