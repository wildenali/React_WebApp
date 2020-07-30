const redux = require('redux')


// --------------------------------- Tahap 1 start ---------------------------------
// State awal
var initialState = {
  loggedIn: false,
  username: null
}

// Buat Reducer
const rootReducer = (state = initialState, action) => {
  // return state // ini Tahap 1
  
  // ----- Ini Tahap 2 start -----
  switch (action.type) {
    case 'LOGIN_SUCCESS' :
      return {
        ...state,
        loggedIn: true,
        username: action.payload.username
      }
    default:
      return state  
  }
  // NOTE : Reducer tidak boleh melakukan perubahan terhadap state secara langsung (mutate) . Lakukan perubahan secara immutable, dengan cara mengcopy object state dengan spread syntax, kemudian memodifikasinya.
  // ----- Ini Tahap 2 end -----
}

// Buat Store
const createStore = redux.createStore

// Buat Redux store
const store = createStore(rootReducer)

// ----- Ini Tahap 2 start -----
// subscribe
store.subscribe( () => {
  console.log('subscription', store.getState())
})
// ----- Ini Tahap 2 end -----

console.log(store.getState())
// --------------------------------- Tahap 1 end ---------------------------------

// --------------------------------- Tahap 2 start ---------------------------------
// Tahan 2 ini melakukan Dispacth Action dan Subscribe terhadap store

// Ubah state
initialState = {
  loggedIn: true,
  username: 'Andrea'
}
console.log(initialState)

// action
var actionLoginSuccess = {
  type: 'LOGIN_SUCCESS',
  payload: {username: 'Andrea'}
}

// dispatch action
store.dispatch(actionLoginSuccess)

console.log('setelah dispatch', store.getState())

// --------------------------------- Tahap 2 end ---------------------------------