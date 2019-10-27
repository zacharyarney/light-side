import React from 'react';
import { Link } from 'react-router-dom';

const NoteCard = (props) => {
  const {
    note: { id, noteTitle, noteBody },
  } = props;

  return (
    <Link className="card-link" to={`/view/${id}`}>
      <div className="card">
        <div className="content">
          <h4 className="h4">{noteTitle}</h4>
          <p className="p">{noteBody}</p>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
