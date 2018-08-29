import React, { Component } from 'react';
import Calculator from './Calculator'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Retro Calculator</h1>
        </header>
        <div className="app-intro">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
