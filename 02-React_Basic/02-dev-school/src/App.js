import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Wilden School</h1>
      <div className="row">
        <div className="col-md-6" style={{ border: '1px solid black' }}>
          <h2>Member</h2>
          <div className="row pt-2 pb-4">
            
            <div className="col-md-6">
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
            <div className="col-md-6">
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
          </div>
          
          <div className="row pb-4">
            <div className="col-md-6">
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
            <div className="col-md-6">
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

export default App;
