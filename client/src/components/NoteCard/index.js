import React from 'react';
import { Link } from 'react-router-dom';

const NoteCard = (props) => {
  const {
    note: { id, noteTitle, noteBody },
  } = props;

  return (
    <Link to={`/view/${id}`} >
      <h2>{noteTitle}</h2>
      <p>{noteBody}</p>
    </Link>
  );
};

export default NoteCard;
