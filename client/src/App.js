import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { css } from '@emotion/css'

import NavBar from './components/Nav'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <Router>
      <div className={AppContainer}>
        <NavBar />
        <div className={RouteContainer}>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </div>
      </div>
    </Router>
  );
}

const AppContainer = css`
  padding-left: 5rem;
  padding-right: 5rem;
  background-color: #334d4d;
`

const RouteContainer = css`
  height: 100vh;
  border-top: 2px solid #fff;
  margin-top: .5rem;
`

export default App;
