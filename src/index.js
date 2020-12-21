import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Root } from './Root';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Root>
      <Router>
        <App />
      </Router>
    </Root>
  </React.StrictMode>,
  document.getElementById('root')
);
