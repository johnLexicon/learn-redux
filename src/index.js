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

//DISPATCH

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
