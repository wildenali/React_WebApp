import { createStore } from 'redux'

const initialState = {
  todos: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODOS':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case 'DELETE_TODO':
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
    default:
      return state
  }
}

const store = createStore(rootReducer)

export default store