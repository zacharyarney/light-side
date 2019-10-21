import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { apiUri } from '../../globalVariables.js';

const NoteView = (props) => {
  const [note, setNote] = useState({});
  const { match } = props;
  const { noteTitle, noteBody, id } = note;

  useEffect(() => {
    axios
      .get(`${apiUri}/${match.params.id}`)
      .then((res) => {
        setNote(res.data.note);
      })
      .catch((err) => console.error(err));
  }, [match.params.id]);

  return (
    <div>
      <h2>{noteTitle}</h2>
      <p>{noteBody}</p>
      <Link
        to={{ pathname: '/view/:id/edit', state: { noteTitle, noteBody, id } }}
      >
        Edit
      </Link>
    </div>
  );
};

export default NoteView;
