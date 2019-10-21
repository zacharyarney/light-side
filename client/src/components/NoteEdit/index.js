import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiUri } from '../../globalVariables.js';

const NoteEdit = (props) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');
  const [id, setId] = useState(null);

  const { history, location } = props;

  useEffect(() => {
    const { noteTitle: title, noteBody: body, id: noteId } = location.state;
    setNoteTitle(title);
    setNoteBody(body);
    setId(noteId);
  }, [location.state]);

  const handleTitleInput = (e) => {
    setNoteTitle(e.target.value);
  };

  const handleBodyInput = (e) => {
    setNoteBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedNote = { noteTitle, noteBody };

    if (noteTitle || noteBody) {
      axios
        .put(`${apiUri}/${id}`, updatedNote)
        .then(() => {
          history.push(`/view/${id}`);
        })
        .catch((err) => console.error(err));
    } else {
      window.alert('Please provide a title and a body.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Note Title:</label>
      <input
        type="text"
        id="title"
        value={noteTitle}
        onChange={handleTitleInput}
      />
      <label htmlFor="body">Note Body:</label>
      <textarea
        name="body"
        id="body"
        value={noteBody}
        onChange={handleBodyInput}
        cols="30"
        rows="10"
      />
      <button type="submit">Publish</button>
    </form>
  );
};

export default NoteEdit;
