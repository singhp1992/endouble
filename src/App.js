import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/layout/styles.css'
import TopBar from './components/layout/TopBar'
//import './components/layout/topbar.html'

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
      </div>
    );
  }
}

export default App;
