import React, { useState } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';

const LoginView = withAuth((props) => {
  const [sessionToken, setSessionToken] = useState(null);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  return <div></div>;
});

export default LoginView;
