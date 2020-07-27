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
        <button onClick={this.handleGantiNama}>Ganti Nama Kafe</button>

        <h2 className="header-menu">Menu Makanan</h2>
        <MenuMakanan namaMenu={"Ayam Bakar"} hargaMenu={35000}/>
        <MenuMakanan namaMenu={"Indomie Rebus"} hargaMenu={15000}/>
        
        <h2 style={mainContentStyle}>Menu Minuman</h2>
        <MenuMinuman namaMenu={"Es Teh Manis"} hargaMenu={5000}/>
        <MenuMinuman namaMenu={"Jeruk Panas"} hargaMenu={10000}/>
      </div>
    );
  }
}

export default App;
