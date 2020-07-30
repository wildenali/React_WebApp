import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form'
import List from './components/List/List'

// Wrap Root Componen dengan Provider
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  constructor () {
    super()
    this.state = {
      todos: []
    }
  }

  handleSubmit = (todo) => {
    this.setState(prevState => (
      {todos: prevState.todos.concat(todo) }
    ))
  }
  
  render() {
    return (
      <Provider store={store}>
        <div className="App container">
          <Form submit={this.handleSubmit}/>
          <List todos={this.state.todos}/>
        </div>
      </Provider>
    );
  }
}

export default App;
