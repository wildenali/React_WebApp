import React, { Component } from 'react';
import './App.css';

import MenuMakanan from './components/MenuMakanan/MenuMakanan';
import MenuMinuman from './components/MenuMinuman/MenuMinuman';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Caffee Wilden Ali</h1>
          <h2>Menu Makanan</h2>
          <MenuMakanan />
          
          <h2>Menu Minumam</h2>
          <MenuMinuman />
      </div>
    );
  }
}

export default App;
