import React, { useContext, useCallback } from 'react';
import { withRouter, Redirect, RouteComponentProps } from 'react-router-dom';
import { FirebaseContext } from '../Auth/Auth';
import app from '../../utils/firebase';

interface LoginViewProps extends RouteComponentProps {
  [propName: string]: any;
}

function LoginView({ history }: LoginViewProps) {
  const handleLogin = useCallback(
    async e => {
      e.preventDefault();
      /* 
       * target.elements is just an object containing the form elements
       * specifically HTMLFormControlCollection
       * From MDN:
       * The form controls in the returned collection are in the same order in 
       * which they appear in the form by following a preorder, depth-first 
       * traversal of the tree. This is called tree order. 
       */
      const { email, password } = e.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
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
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default withRouter(LoginView);
