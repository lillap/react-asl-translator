import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './components/containers/Login'

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
