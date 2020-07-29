import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Hay</h1>
          <button className="btn btn-primary">OK</button>
        </div>
      </Router>
    );
  }
}

export default App;
