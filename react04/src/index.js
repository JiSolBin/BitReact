import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App01 from './App01';
import App02 from './App02';
import App03 from './App03';
import App04 from './App04';
import App05 from './App05';
import App06 from './App06';
import App07 from './App07';
import App08 from './App08';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('index loading..');
root.render(
  <>
    <App08/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
