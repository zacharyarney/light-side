import { useState, ChangeEvent } from 'react';

export const useInput = (initialValue = '') => {
  // takes in initialValue like useState -> basically wrapper around useState
  const [value, setValue] = useState(initialValue);

  // typical handleChange function
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  // return value and functions to be used elsewhere
  return { value, handleChange };
};

export default useInput;
