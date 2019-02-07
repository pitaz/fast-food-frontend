import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import Routes from './routes/routes.jsx';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

export default App;
