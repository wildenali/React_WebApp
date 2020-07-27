import React, { Component } from 'react';

// nama class diawali huruf Kapital
class MenuMinuman extends Component {
  render() {
    return (
      <div style={{ border: "1px solid black", width: 300, margin: 'auto'}}>
        <p>Nama Menu: Kopi Late</p>
        <p>Harga: Rp. 25.000</p>
      </div>
    )
  }
}

export default MenuMinuman;