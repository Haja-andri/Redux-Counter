import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import counterReducer from './reducers';

// STEP 1 --> find out what the state of the app should look like
// { counter }

// STEP 2 --> think of the action types that might happen to alter these slices
// and save them as constants (these are STRINGS we'll be using often)
// this is done inside Action.js which is called inside the reducer 
// (index.js inside reducer)
// const INCREMENT = 'INCREMENT';
// const DECREMENT = 'DECREMENT';


// This line instantiates our central Redux store.
// The `createStore` function receives the reducer
// that is responsible for updating the store, along
// with any initial state that we may want the store
// to start out with (which is none in this case).

// STEP 4 COMBINE THOSE REDUCERS INTO ONE REDUCER


// STEP 5 CREATE THE REDUX STORE!!!!!!!!!
// how is counter obtained? its not defined inside reducers/index.js
const store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),);




// Here, we wrap our main React component inside of
// Provider tags, which come from the react-redux package.
// This is needed because the store needs to know where it
// is passing its state to. The Provider component is also
// where the store "lives".
ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);
