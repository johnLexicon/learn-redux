import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';

//STORE -> GLOBALIZED STATE

//ACTIONS -> AN ACTION IS A FUNCTION THAT RETURNS AN OBJECT
const increment = () => {
  return {
    type: 'INCREMENT',
  };
};
const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

//REDUCER -> MODIFIES THE STORE UPON THE ACTION
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

let store = createStore(counter);

//Display the store on the console
store.subscribe(() => console.log(store.getState()));

//DISPATCH
store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
