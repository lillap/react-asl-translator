import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Login from './components/containers/Login'
import Translator from './components/containers/Translator'
import Profile from './components/containers/Profile'

function App() {

  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Switch>
            <Route exact path="/login" component={ Login }/>
            <Route exact path="/translator" component={ Translator }/>
            <Route exact path="/profile" component={ Profile }/>
            <Redirect from="/" to="/login" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
