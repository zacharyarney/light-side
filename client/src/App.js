import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ListView from './components/ListView';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route exact path="/" component={ListView} />
      </Switch>
    </div>
  );
}

export default App;
