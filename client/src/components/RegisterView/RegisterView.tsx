import React, { FormEvent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import app from '../../utils/firebase';

// RegisterViewProps is identical to LoginViewProps
// consider combining later on if these components don't diverge too much
interface RegisterViewProps extends RouteComponentProps {
  [propName: string]: any;
}

function RegisterView({ history }: RegisterViewProps) {
  const { value: email, handleChange: handleEmail } = useInput();
  const { value: password, handleChange: handlePassword } = useInput();
  const handleSignUp = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await app.auth().createUserWithEmailAndPassword(email, password);
      history.push('/');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default withRouter(RegisterView);
