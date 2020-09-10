import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Title from './components/Title';
import Calculator from './components/Calculator';


ReactDOM.render(
  <React.StrictMode>
    <Title title="My React Calculator" />
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);
