import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// default 아니면 중괄호 넣어줘야 함 -> {Car}
import Car from './Ex01';

// const myelement = (
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
// );

//const myElement = React.createElement('h1', {className:'cl1', onClick:()=>alert('click')}, 'I do not use JSX!');
//const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

class Car2 extends React.Component{
  constructor(props){
    super();
    this.name = props.name;
  }
  render(){
    return <h2>{this.name}</h2>
  }
}

function Car3(props){
  // return <h2>Car3 : {props.name}</h2>
  return (
    <>
    <Car2 name={props.name}/>
    <h2>Car3</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    // myelement
    // myElement
    <>
      <Car/>
      <Car2></Car2>
      <Car3 name="k3"/>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
