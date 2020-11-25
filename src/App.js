import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './components/containers/Login'
import Translator from './components/containers/Translator'
import Profile from './components/containers/Profile'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Switch>
            <Route path="/login" component={ Login }/>
            <Route path="/translator" component={ Translator }/>
            <Route path="/profile" component={ Profile }/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
