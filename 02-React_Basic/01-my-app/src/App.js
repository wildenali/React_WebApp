import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Caffee Wilden Ali</h1>
          <h2>Menu Makanan</h2>
          <div style={{ border: "1px solid black", width: 300, margin: 'auto'}}>
            <p>Nama Menu: Indomie Origina</p>
            <p>Harga: Rp. 35.000</p>
          </div>
          
          <h2>Menu Minumam</h2>
          <div style={{ border: "1px solid black", width: 300, margin: 'auto'}}>
            <p>Nama Menu: Kopi Late</p>
            <p>Harga: Rp. 25.000</p>
          </div>
      </div>
    );
  }
}

export default App;