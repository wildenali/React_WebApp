import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Premium from './pages/Premium';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
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
          <div style={{ paddingTop: 45 }}>
            <Route path="/" exact component={Home}></Route>
            <Route path="/premium" component={Premium}></Route>
            <Route path="/fireschool" component={() => <h4>FireSchool</h4>}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
