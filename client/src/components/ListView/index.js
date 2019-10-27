import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoteCard from '../NoteCard';
import { apiUri } from '../../globalVariables.js';

const ListView = () => {
  const [notes, setNotes] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    axios
      .get(apiUri)
      .then((res) => {
        setNotes(res.data.notes);
      })
      .catch((err) => {
        console.error(err);
      });
    console.log(filteredNotes(), notes);
  }, []);

  const filteredNotes = () => {
    return notes.filter(
      (note) =>
        note.noteTitle.toLowerCase().includes(searchInput.toLowerCase()) ||
        note.noteBody.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="list-view">
      <label className="label" htmlFor="search">
        Search:
      </label>
      <input
        className="input"
        id="search"
        autoComplete="off"
        value={searchInput}
        onChange={handleSearchInput}
      />
      {filteredNotes()
        .map((note) => {
          return <NoteCard key={note.id} note={note} />;
        })
        .sort((a, b) => {
          console.log(a.props, b.props);
          return b.props.note.id - a.props.note.id;
        })}
    </div>
  );
};

export default ListView;
