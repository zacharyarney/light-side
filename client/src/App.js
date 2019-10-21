import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import ListView from './components/ListView';
import NoteView from './components/NoteView';
import NoteCreate from './components/NoteCreate';
import NoteEdit from './components/NoteEdit';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Sidebar} />
      <Route exact path="/" component={ListView} />
      <Route exact path="/view/:id" component={NoteView} />
      <Route path="/write" component={NoteCreate} />
      <Route path="/view/:id/edit" component={NoteEdit} />
    </div>
  );
}

export default App;
