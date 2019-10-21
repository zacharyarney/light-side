import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <Link to="/write">
        <h3>Write a new note</h3>
      </Link>
      <Link to="/">
        <h3>View your notes</h3>
      </Link>
    </div>
  );
};

export default Sidebar;
