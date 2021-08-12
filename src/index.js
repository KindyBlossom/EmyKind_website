import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Page/Home';


ReactDOM.render(
  <Router>
    <Home/>
  </Router>,
    

  document.getElementById('root')
);


