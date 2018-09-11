import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Card from '../components/Card/Card';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Card />
      </div>
    );
  }
}

export default App;
