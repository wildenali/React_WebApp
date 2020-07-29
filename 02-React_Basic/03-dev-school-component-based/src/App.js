import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Members from './components/Members/Members';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      members: [],
      first_name: '',
      last_name: '',
      buttonDisable: false,
      formStatus: 'create',
      memberIdSelected: null,
    }
  }

  // CRUD, Read data from database
  inputOnChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  onSubmitHandler = (e) => {
    console.log('form di submit')
    e.preventDefault()
    this.setState({ buttonDisable: true })  // tambah state buttonDisable ini kondisi ketika setelah ngirim data, button di disable, supaya user tidak nge klik banyak kali
    var payload = {
      first_name: this.state.first_name,
      last_name: this.state.last_name
    }
    var url = 'https://reqres.in/api/users';
    if (this.state.formStatus === 'create') {
      // url untuk form create
      url = 'https://reqres.in/api/users';
      this.addMember(url, payload);
    } else {
      // url untuk form edit
      url = `https://reqres.in/api/users/${this.state.memberIdSelected}`;
      this.editMember(url, payload);
    }
  }

  // CRUD, Read data from database
  componentDidMount() {
    axios.get('https://reqres.in/api/users?page=1')
      .then(response => {
        console.log('response', response);
        this.setState({ members: response.data.data })
      })
      .catch(error => {
        console.log('error', error);
      })
  }

  // CRUD, Update
  editButtonHandler = (member) => {
    this.setState({
      first_name: member.first_name,
      last_name: member.last_name,
      formStatus: 'edit',
      memberIdSelected: member.id
    })
  }

  addMember = (url, payload) => {
    axios.post(url, payload)
      .then(response => {
        console.log('response', response.data)
        var members = [...this.state.members]
        members.push(response.data)
        this.setState({ members, buttonDisable: false, first_name: '', last_name: '' }) // ini supaya kondisi button bisa di klik
      })
      .catch(error => {
        console.log(error)
      })
  }

  editMember = (url, payload) => {
    axios.put(url, payload)
      .then(response => {
        console.log('response', response.data)
        var members = [...this.state.members]
        var indexmember = members.findIndex(member => member.id === this.state.memberIdSelected)
        members[indexmember].first_name = response.data.first_name
        members[indexmember].last_name = response.data.last_name
        this.setState({ members, buttonDisable: false, first_name: '', last_name: '', formStatus: 'create' })
      })
      .catch(error => {
        console.log(error)
      })
  }

  // CRUD, Delete
  deleteButtonHandler = id => {
    var url = `https://reqres.in/api/users/${id}`
    axios.delete(url)
      .then(response => {
        if (response.status === 204) {
          var members = [...this.state.members]
          var index = members.findIndex(member => member.id === id)
          members.splice(index, 1)
          this.setState({ members })
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    return (
      <div className="container">
        <h1>Wilden School</h1>
        <div className="row">
          <div className="col-md-6" style={{ border: '1px solid black' }}>
            <h2>Member</h2>
            <div className="row">
              
              <Members
                members = {this.state.members}
                editButtonClick = {(member) => this.editButtonHandler(member)}
                deleteButtonClick = {(id) => this.deleteButtonHandler(id)}
              />
              
            </div>
          </div>
          <div className="col-md-6" style={{ border: '1px solid black', }}>
              <h2>Form {this.state.formStatus}</h2>
              <form onSubmit={this.onSubmitHandler}>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.inputOnChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    value={this.state.last_name}
                    onChange={this.inputOnChangeHandler}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={this.state.buttonDisable}
                >
                  Submit
                </button>
              </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;