import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import main  from '../styles/main.css';
import Sidebar  from "./Sidebar";
import Header from './Header';
import Activity from './Activity';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>

      <main className="App">
            <Header/>
            <Sidebar/>
            <Activity/>
      </main>
      </MuiThemeProvider>
    );
  }
}

export default App;
