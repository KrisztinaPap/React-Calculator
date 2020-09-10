import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Heading from './components/Heading';
import Form from './components/Form';


ReactDOM.render(
  <React.StrictMode>
    <Heading title="My React Calculator" />
    <Form />
  </React.StrictMode>,
  document.getElementById('root')
);
