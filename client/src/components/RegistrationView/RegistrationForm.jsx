import React, { useState } from 'react'
import OktaAuth from '@okta/okta-auth-js';
import axios from 'axios';
import { withAuth } from '@okta/okta-react';
import config from '../../app.config';
import { useInput } from '../../hooks/useInput';

const apiUri = process.env.REACT_APP_API_URI;

const RegistrationView = () => {
  const [firstName, setFirstName] = useInput('');
  const [lastName, setLastName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [sessionToken, setSessionToken] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await axios.get(`${apiUri}/`
      'Content-Type': 'application/json'
    )
  }

  return (
    <div>
      
    </div>
  )
}

export default withAuth(RegistrationView);
