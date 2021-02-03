import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import NavBar from './components/Nav'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </Router>
  );
}

export default App;
