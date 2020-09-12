import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Title from './components/Title';
import Switch from './components/Switch';


ReactDOM.render(
  <React.StrictMode>
    <Title title="My React Calculator" />
    <Switch />
  </React.StrictMode>,
  document.getElementById('root')
);
