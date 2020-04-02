import React, { createContext, useState, useEffect } from 'react';
import app, { UserContext } from '../../utils/firebase';

interface ProviderParams {
  children: React.ReactNode;
}

export const FirebaseContext = createContext<UserContext>({ currentUser: undefined });

function FirebaseProvider({ children }: ProviderParams) {
  // Maybe figure out typing for useState here to avoid the 'any'
  // 'firebase.User' didn't work
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <FirebaseContext.Provider value={{ currentUser }}>
      {children}
    </FirebaseContext.Provider>
  );
}

export default FirebaseProvider;
