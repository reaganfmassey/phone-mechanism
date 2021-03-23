import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Image from './Image';
// eslint-disable-next-line
import  galaxys8 from "./phones/galaxys8.png";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Image name = 'galaxys8'/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
