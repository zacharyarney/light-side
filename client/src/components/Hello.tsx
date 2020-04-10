import React from 'react';
import app from '../utils/firebase';

interface HelloProps {
  compiler: string;
  framework: string;
}

function Hello(props: HelloProps) {
  const signOut = () => {
    app.auth().signOut();
  };
  return (
    <>
      <h1>
        Hello from {props.compiler} and {props.framework}!
      </h1>
      <button onClick={signOut}>Sign Out</button>
    </>
  );
}

export default Hello;
