import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './components/Calculator';
import Form from './components/Form';


ReactDOM.render(
  <React.StrictMode>
    <Calculator title="My React Calculator" />
    <Form />
  </React.StrictMode>,
  document.getElementById('root')
);
