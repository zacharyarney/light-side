import React from 'react'
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import config from '../../app.config';

const RegistrationView = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sessionToken, setSessionToken] = useState(null);

  

  return (
    <div>
      
    </div>
  )
}

export default withAuth(RegistrationView);
