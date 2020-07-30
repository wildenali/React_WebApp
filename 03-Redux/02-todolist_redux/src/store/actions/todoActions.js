export const addTodo = (todo) => ({ type: 'ADD_TODOS', payload: todo })

export const editToDo = (payload) => ({
  type: 'EDIT_TODO',
  payload: payload
})

export const deleteToDo = (index) => ({
  type: 'DELETE_TODO',
  payload: index
})