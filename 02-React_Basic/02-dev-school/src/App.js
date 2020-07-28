import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      members: [
        {},
        {},
        {},
        {}
      ]
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Wilden School</h1>
        <div className="row">
          <div className="col-md-6" style={{ border: '1px solid black' }}>
            <h2>Member</h2>
            <div className="row">
              
              { this.state.members.map((member, index) => (
                <div className="col-md-6" key={index}>
                  <div className="card" style={{ margin: 10 }}>
                    <div className="card-body">
                      <h5 className="card-title">ID Member</h5>
                      <h5 className="card-text">First Name</h5>
                      <h5 className="card-text">Last Name</h5>
                      <button className="btn btn-primary">Edit</button>
                      <button className="btn btn-danger">Delete</button>
                    </div>
                  </div>
                </div>
              )) }
              
            </div>
          </div>
          <div className="col-md-6" style={{ border: '1px solid black', }}>
            <h2>Form</h2>
              <form>
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
