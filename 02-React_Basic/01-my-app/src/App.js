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
      ],
      menuMinuman: [
        { id: 1, nama: 'Es Teh Manis', harga: 25000 },
        { id: 2, nama: 'Jeruk Panas', harga: 31000 },
        { id: 3, nama: 'Jeruk Dingin', harga: 41000 },
        { id: 4, nama: 'Jus Tomat', harga: 51000 },
        { id: 5, nama: 'Kopi Pahit', harga: 11000 },
      ],
      namaPembeli: '',
      keterangan: '',
      jenisPembarayan: 'cash',
    }
  }

  handleGantiNama = () => {
    console.log('button di pencet');
    this.setState({ namaCafe: 'Robot' })
  }

  handleChangeNamaPembeli = (event) => {
    this.setState({ namaPembeli: event.target.value })
  }
  
  handleChangeKeterangan = (event) => {
    this.setState({ keterangan: event.target.value })
  }
  
  handleChangeJenisPembayaran = (event) => {
    this.setState({ jenisPembarayan: event.target.value })
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

        <div className="row" style={{ marginTop: '10px' }}>
          <div className="col-md-4 offset-md-4">
            <div className="form-group">
              <label>Nama Pembeli:</label>
              <input
                className="form-control"
                name="namaPembeli"
                onChange={this.handleChangeNamaPembeli}
                value={this.state.namaPembeli}
              />
              <small>Nama Pembeli: {this.state.namaPembeli}</small>
              <br/>

              <label>Keterangan:</label>
              <textarea
                className="form-control"
                name="keterangan"
                onChange={this.handleChangeKeterangan}
                value={this.state.keterangan}
              />
              <small>Keterangan: {this.state.keterangan}</small>
              <br/>

              <label>Jenis Pembayaran:</label>
              <select
                className="form-control"
                name="jenisPembayaran"
                value={this.state.value}
                onChange={this.handleChangeJenisPembayaran}
              >
                <option value="cash">Cash</option>
                <option value="kartuKredit">Kartu Kredit</option>
                <option value="gopay">Gopay</option>
              </select>
              <small>Jenis Pembayaran: {this.state.jenisPembarayan}</small>

            </div>
          </div>
        </div>

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
        { this.state.menuMinuman.map((menu, index) => 
          <MenuMinuman key={menu.id} namaMenu={menu.nama} hargaMenu={menu.harga}/>  
        )}
      </div>
    );
  }
}

export default App;
