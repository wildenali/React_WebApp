import React, { Component } from 'react';
import './App.css';

import MenuMakanan from './components/MenuMakanan/MenuMakanan';
import MenuMinuman from './components/MenuMinuman/MenuMinuman';

class App extends Component {

  constructor() {
    super()
    this.state = {
      namaCafe: 'Wilden Ali',
      menuMakanan: [
        { nama: 'Ayam Bakar', harga: 25000, stock: 10 },
        { nama: 'Nasi Bakar', harga: 21000, stock: 0 },
      ]
    }
  }

  handleGantiNama = () => {
    console.log('button di pencet');
    this.setState({ namaCafe: 'Robot' })
  }

  render() {
    
    const mainContentStyle = {
      color           : 'yellow',
      marginTop       : '10px',
      backgroundColor : 'red',
      border          : '1px solid black'
    }

    return (
      <div className="App">
        <h1>Caffee { this.state.namaCafe }</h1>
        <button className="btn btn-success" onClick={this.handleGantiNama}>Ganti Nama Kafe</button>

        <h2 className="header-menu">Menu Makanan</h2>
        <MenuMakanan 
          namaMenu={this.state.menuMakanan[0].nama}
          hargaMenu={this.state.menuMakanan[0].harga}
          stock={this.state.menuMakanan[0].stock}
        />
        <MenuMakanan 
          namaMenu={this.state.menuMakanan[1].nama}
          hargaMenu={this.state.menuMakanan[1].harga}
          stock={this.state.menuMakanan[1].stock}
        />
        
        <h2 style={mainContentStyle}>Menu Minuman</h2>
        <MenuMinuman namaMenu={"Es Teh Manis"} hargaMenu={5000}/>
        <MenuMinuman namaMenu={"Jeruk Panas"} hargaMenu={10000}/>
      </div>
    );
  }
}

export default App;
