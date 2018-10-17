import React, { Component } from 'react';
import Header from '../components/header/Header'
import Body from '../components/body/Body'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app"> 
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
