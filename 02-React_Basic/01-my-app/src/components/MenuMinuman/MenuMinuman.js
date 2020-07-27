import React, { Component } from 'react';

// nama class diawali huruf Kapital
class MenuMinuman extends Component {

  constructor() {
    super()
    this.state = {
      mataUang: 'Rp'
    }
  }
  
  handleGantiMataUang = (satuanUang) => {
    console.log('button minuman di pencet');
    this.setState({ mataUang: satuanUang })
  }

  render() {
    return (
      <div style={{ border: "1px solid black", width: 300, margin: 'auto'}}>
        <p>Nama Menu: {this.props.namaMenu}</p>
        <p>Harga: {this.state.mataUang} {this.props.hargaMenu}</p>
        <button onClick={() => this.handleGantiMataUang('$')}>Ganti Mata Uang</button>
      </div>
    )
  }
}

export default MenuMinuman;