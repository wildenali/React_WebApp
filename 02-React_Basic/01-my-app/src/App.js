import React, { Component } from 'react';
import './App.css';

import MenuMakanan from './components/MenuMakanan/MenuMakanan';
import MenuMinuman from './components/MenuMinuman/MenuMinuman';

class App extends Component {

  constructor() {
    super()
    this.state = {
      namaCafe: 'Wilden Ali'
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Caffee { this.state.namaCafe }</h1>
          <h2>Menu Makanan</h2>
          <MenuMakanan namaMenu={"Ayam Bakar"} hargaMenu={35000}/>
          <MenuMakanan namaMenu={"Indomie Rebus"} hargaMenu={15000}/>
          
          <h2>Menu Minumam</h2>
          <MenuMinuman namaMenu={"Es Teh Manis"} hargaMenu={5000}/>
          <MenuMinuman namaMenu={"Jeruk Panas"} hargaMenu={10000}/>
      </div>
    );
  }
}

export default App;
