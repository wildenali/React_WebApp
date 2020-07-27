import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const namaDepan = "wilden";
    return (
      <div>
        <h1 className="main-title">Welcome to .................{ namaDepan } dan { 23 + 45 }</h1>
        <p>Hay semuanya</p>
      </div>
    );
  }
}

export default App;
