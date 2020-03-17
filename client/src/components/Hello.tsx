import React from 'react';

interface HelloProps {
  compiler: string;
  framework: string;
}

function Hello(props: HelloProps) {
  return (
    <h1>
      Hello from {props.compiler} and {props.framework}!
    </h1>
  );
};

export default Hello;
