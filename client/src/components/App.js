import React, { Component } from 'react';

import main  from '../styles/main.css';
import Sidebar  from "./Sidebar";
import Header from './Header';
import Activity from './Activity';


class App extends Component {
  render() {
    return (

      <main className="App">
            <Header/>
            <Sidebar/>
            <Activity/>
      </main>

    );
  }
}

export default App;
