import * as actionTypes from './actionTypes'

export const addTodo = (todo) => ({
  type: actionTypes.ADD_TODO,
  payload: todo
})

export const editToDo = (payload) => ({
  type: actionTypes.EDIT_TODO,
  payload: payload
})

export const deleteToDo = (index) => ({
  type: actionTypes.DELETE_TODO,
  payload: index
})