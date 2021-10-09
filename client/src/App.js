import React from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

import Auth from './components/hoc/auth'

import LadingPage from './components/views/LandingPage/LadingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import AdminPage from './components/views/AdminPage/AdminPage';




function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Auth(LadingPage, null)}/>
          <Route exact path="/login" component={Auth(LoginPage, false)}/>
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/admin"  component={Auth(AdminPage, true, true)}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
