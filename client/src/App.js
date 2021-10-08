import React from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

import LadingPage from './components/views/LandingPage/LadingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LadingPage}/>
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/register" component={RegisterPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
