import React, { Component } from 'react'
import { connect } from 'react-redux'

class List extends Component {

  render (){
    return (
      <ul className="list-group">
        {this.props.todos.map(todo => (
          <li className="list-group-item">{todo}</li>
        ))}
      </ul>
    )    
  }

}

// Lakukan subscribe terhadap perubahan sate yang ada pada store
const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}
/*
mapStateToProps ini kita gunakan untuk memasukan state yang ada di store ke dalam props component List kita.
Jadi kita dapat mengakses nya dengan cara this.props.todos
*/

// / Hubungkan componen dengan store
// hapus export default lama
// export default List
// export default baru dengan connect
export default connect(mapStateToProps, null)(List)
/*
Method connect menerima dua parameter yaitu mapStateToProps dan mapDispatchToProps.
Kegunaan mapStateToProps sudah dijelaskan diatas, yaitu memasukan state store ke dalam props component,
sedangkan mapDispatchToProps digunakan agar component dapat melakukan dispatch suatu action.
Nama dari mapStateToProps dan mapDispatchToProps dapat diganti sesuai keinginan,
namun pada umumnya ditulis demikian.

Format penulisan connect
connect(mapStateToProps, mapDispatchToProps)(NamaComponent)
*/