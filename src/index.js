import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Functional Component
// function FunctionalComponent() {

//     return <h1>FunctionalComponent</h1>

// }

// Class Component
// class ClassComponent extends React.Component {

//     render() {

//         return <h1>ClassComponent</h1>

//     }

// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
