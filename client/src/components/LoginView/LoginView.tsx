import React, { useContext, useCallback } from 'react';
import { withRouter, Redirect, RouteComponentProps } from 'react-router-dom';
import { FirebaseContext } from '../Auth/Auth';
import useInput from '../../hooks/useInput';
import app from '../../utils/firebase';

interface LoginViewProps extends RouteComponentProps {
  [propName: string]: any;
}

function LoginView({ history }: LoginViewProps) {
  const { value: email, handleChange: handleEmail } = useInput();
  const { value: password, handleChange: handlePassword } = useInput();
  const handleLogin = useCallback(
    async e => {
      e.preventDefault();
      try {
        await app.auth().signInWithEmailAndPassword(email, password);
        history.push('/');
      } catch (err) {
        // TODO: Error handling
        alert(err);
      }
    },
    [history]
  );

  const { currentUser } = useContext(FirebaseContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default withRouter(LoginView);
