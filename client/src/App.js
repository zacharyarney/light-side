import React from 'react';
import { Security, ImplicitCallback } from '@okta/okta-react';
import { Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import ListView from './components/ListView/ListView';
import NoteView from './components/NoteView';
import NoteCreate from './components/NoteCreate';
import NoteEdit from './components/NoteEdit';
import NoteDelete from './components/NoteDelete';

function App() {
  return (
    <div className="App">
      <Route exact path="/home" component={ListView} />
      <Route exact path="/login" />
    </div>
  );
}

export default App;
