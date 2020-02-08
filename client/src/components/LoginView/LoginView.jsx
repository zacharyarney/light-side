import React from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

import LoginForm from './LoginForm';

const LoginView = (props) => {
  const [authenticated, setAuthenticated] = useState(null);

  const checkAuthentication = async () => {
    const isAuthenticated = await props.auth.isAuthenticated();
    if (isAuthenticated !== authenticated) {
      setAuthenticated(isAuthenticated);
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, [authenticated]);

  if (authenticated === null) return null;

  return authenticated ? (
    <Redirect to={{ pathname: '/home' }} />
  ) : (
    <LoginForm baseUrl={props.baseUrl} />
  );
};

LoginView.propTypes = {};

export default withAuth(LoginView);
