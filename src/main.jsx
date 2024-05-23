import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../emilio-portfolio-react/src/App';
import '../emilio-portfolio-react/src/index.css'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);