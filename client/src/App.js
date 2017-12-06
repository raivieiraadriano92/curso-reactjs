import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextCounter from './TextCounter.js'

class App extends Component {
  render() {
    var title = 'TreinaWeb'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TextCounter title={title} />
      </div>
    );
  }
}

export default App;
