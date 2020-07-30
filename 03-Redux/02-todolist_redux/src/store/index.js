import { createStore, combineReducers } from 'redux'
import * as actionTypes from './actions/actionTypes'

// initial state di pisah
const initialStateTodos = {
  todos: []
}
const initialStateNotes = {
  notes: []
}

const todoReducer = (state= initialStateTodos, action) => {
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

const noteReducer = (state= initialStateNotes, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload]
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todoReducer: todoReducer,
  noteReducer: noteReducer
})

// supaya bisa menggunakan redux dev tool di chrom
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store