import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" href="/">Negara Api Course</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/">Home</Link>
                <Link className="nav-item nav-link" to="/premium">Premium</Link>
                <Link className="nav-item nav-link" to="/fireschool">Fire School</Link>
              </div>
            </div>
          </nav>
          <Route path="/" exact component={() => <h4>Home</h4>}></Route>
          <Route path="/premium" component={() => <h4>Premium</h4>}></Route>
          <Route path="/fireschool" component={() => <h4>FireSchool</h4>}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
