import { createStore } from 'redux'
import * as actionTypes from './actions/actionTypes'

const initialState = {
  todos: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case actionTypes.DELETE_TODO:
      // ---------------- Cara 1 ----------------
      // // menghapus dengan method splice
      // // copu state todos
      // let newTodos = [...state.todos]
      // // hapus element array
      // newTodos.splice(action.payload.index, 1)
      // // return state baru
      // return {
      //   ...state,
      //   todos: newTodos
      // }
      // ---------------- Cara 1 ----------------

      // ---------------- Cara 2 ----------------
      // Menghapus dengan methos filter
      let newTodos = state.todos.filter((element, index) => index !== action.payload)
      return {
        ...state,
        todos: newTodos
      }
      // ---------------- Cara 2 ----------------
    case actionTypes.EDIT_TODO:
      // edit state
      // copy state todos
      let todos = [...state.todos]
      // ganti data todo
      let index = action.payload.index
      let todo = action.payload.todo
      todos[index] = todo
      // retusn state baru
      return {
        ...state,
        todos
      }
    default:
      return state
  }
}

const store = createStore(rootReducer)

export default store