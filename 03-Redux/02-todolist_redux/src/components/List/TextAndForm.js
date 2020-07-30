import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editToDo, deleteToDo } from '../../store/actions/todoActions'

class TextAndForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewMode: 'show',
      text: props.todo
    }
  }

  // fungsi untuk hadnle ketika user klik tombol edit
  editButtonHandler = () => {
    this.setState({ viewMode: 'edit' })
  }
  // fungsi untuk hadnle ketika user klik tombol save
  saveButtonHandler = () => {
    this.props.editTodo(this.props.index, this.state.text)
    this.setState({ viewMode: 'show' })
  }
  // fungsi untuk hadnle ketika user klik tombol cancel
  cancelButtonHandler = () => {
    this.setState({ viewMode: 'show' })
  }
  // fungsi untuk hadnle ketika user klik tombol delete
  deleteButtonHandler = () => {
    this.props.deleteToDo(this.props.index)
  }

  // fungsi untuk handle ketika user edit text di form
  onChangeHandler = (e) => {
    this.setState({ text: e.target.value })
  }


  render() {

    // default tampilan todo berupa text
    var todo = (
      <p>{this.props.todo}</p>
    )

    // default tampilan disamping text todo berupa tombol edit
    var buttonEdit = (
      <button
        className="btn btn-primary"
        onClick={this.editButtonHandler}
      >
        Edit
      </button>
    )

    // Jika viewMode baruba menjadi 'edit'
    if (this.state.viewMode === 'edit') {
      // ganti element text todo menjadi form input
      todo = (
        <input
          className="form-control"
          type="text"
          value={this.state.text}
          onChange={this.onChangeHandler}
        />
      )

      // ganti tombol edit menjadi tombol save dan cancel
      buttonEdit = (
        <>
          <button className="btn btn-success" onClick={this.saveButtonHandler}>Save</button>
          <button className="btn btn-warning" onClick={this.cancelButtonHandler}>Cancel</button>
        </>
      )
    }

    return (
      <div className="row">
        <div className="col-8">{todo}</div>
        <div className="col-4">
          {buttonEdit}
          <button className="btn btn-danger" onClick={this.deleteButtonHandler}>Delete</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editTodo: (index, todo) => dispatch( editToDo({ index, todo }) ),
    deleteToDo: (index) => dispatch( deleteToDo(index) )
  }
}

export default connect(null, mapDispatchToProps)(TextAndForm)