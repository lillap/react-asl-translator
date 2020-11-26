import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Login from './components/containers/Login'
import Translator from './components/containers/Translator'
import Profile from './components/containers/Profile'
import NotFound from './components/containers/NotFound';
import Header from './components/ui/Header';

function App() {


  

  return (
    <Router>
      <div className="App">
        <Header/>
          <Switch>
            <Route exact path="/">
              <Redirect from="/" to="/login" />
            </Route>
            <Route exact path="/login" component={ Login }/>
            <Route exact path="/translator" component={ Translator }/>
            <Route exact path="/profile" component={ Profile }/>
            <Route path="*" component={NotFound}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
