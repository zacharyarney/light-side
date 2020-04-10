import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import app, { UserContext } from '../../utils/firebase';

interface ProviderParams {
  children: React.ReactNode;
}

interface UserContextProperties {
  currentUser: firebase.User | null | undefined;
}

type CurrentUserType = firebase.User | null;
type UserType = firebase.User | null;

export const FirebaseContext = createContext<UserContext>({
  currentUser: undefined,
});

function FirebaseProvider({ children }: ProviderParams) {
  // Maybe figure out typing for useState here to avoid the 'any'
  // 'firebase.User' didn't work
  const [currentUser, setCurrentUser] = useState<CurrentUserType>(null);
  const [pending, setPending] = useState<boolean>(true);

  useEffect(() => {
    async function httpAuthHeaders(user: UserType) {
      if (user) {
        const idToken = await app.auth().currentUser?.getIdToken();
        axios.defaults.headers.common['Authorization'] = idToken;
      }
    }
    const unsubscribe = app.auth().onAuthStateChanged(user => {
      httpAuthHeaders(user);
      if (user) {
        setCurrentUser(user);
        // setPending(false);
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // if (pending) {
  //   return <div>Loading...</div>;
  // }

  return (
    <FirebaseContext.Provider value={{ currentUser }}>
      {children}
    </FirebaseContext.Provider>
  );
}

export default FirebaseProvider;
