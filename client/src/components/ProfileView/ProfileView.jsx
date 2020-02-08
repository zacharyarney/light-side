import React, { useState } from 'react';
import { withAuth } from '@okta/okta-react';

const ProfileView = (props) => {
  const [user, setUser] = useState;

  const getCurrentUser = async () => {
    const currentUser = await props.auth.getUser();
    setUser(currentUser);
  };

  if (!user) return null;

  return (
    <section className="user-profile">
      <h1>Profile</h1>
      <div>
        <label>Username:</label>
        <span>{user.name}</span>
      </div>
    </section>
  );
};

export default withAuth(ProfileView);
