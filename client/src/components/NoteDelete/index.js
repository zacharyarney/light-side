import React from 'react';
import axios from 'axios';
import { apiUri } from '../../globalVariables.js';

const NoteDelete = (props) => {
  const { history, match } = props;
  const handleYes = () => {
    axios
      .delete(`${apiUri}/${match.params.id}`)
      .then(() => {
        history.push('/');
      })
      .catch((err) => console.error(err));
  };

  const handleNo = () => {
    history.push(`/view/${match.params.id}`);
  };

  return (
    <div>
      <h3>Are you sure you want to delete this note?</h3>
      <button onClick={handleYes}>Yes</button>
      <button onClick={handleNo}>No</button>
    </div>
  );
};

export default NoteDelete;
