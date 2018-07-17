import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/layout/styles.css'
import TopBar from './components/layout/TopBar'
import Apply from './components/ApplyForm'

class App extends Component {
  render() {
    return (
     
      <div>
        <TopBar />
        <Apply /> 
      </div>
    );
  }
}

export default App;
