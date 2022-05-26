import React from 'react';//--REAL DOM
import ReactDOM from 'react-dom';//--VIRTUAL DOM
import './index.css';//--STYLING FILE
import App from './App';//---APP.JS FILE
//import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  //---IT WILL PROVIDE A ERROR INSIDE APP
  //---APP--IT IS A IN BUILD COMPONENT AND THE CODE IS COMING FROM LINE NUMBER 4
    <BrowserRouter>
    <App />
    </BrowserRouter>,
  //----THIS IS A DOM SELECTOR WHICH IS COME FROM PUBLIC=>INDEX.HTML=>DIV ID (IT IS A BOILERPLATE FILE)
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();
