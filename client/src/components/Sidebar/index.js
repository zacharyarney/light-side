import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="content">
      <Link className="link" to="/write">
        Write a new note
      </Link>
      <Link className="link" to="/">
        View your notes
      </Link>
    </div>
  );
};

export default Sidebar;
