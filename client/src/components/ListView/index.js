import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoteCard from '../NoteCard';

import { apiUri } from '../../globalVariables.js';

const ListView = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get(apiUri).then((res) => {
      setNotes(res.data.notes);
    }).catch(err => {
      console.error(err);
    });
  }, []);
  return (
    <div>
      {notes.map((note) => {
        return <NoteCard key={note.id} note={note} />;
      })}
    </div>
  );
};

export default ListView;
