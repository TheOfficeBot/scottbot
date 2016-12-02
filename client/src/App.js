import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import scott from './assets/scott_isolated.png'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>HELLO THERE</h1>
          <img src={scott} alt=""/>
      </div>
    );
  }
}

export default App;
