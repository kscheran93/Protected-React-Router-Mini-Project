import React from 'react';
import Auth from './Auth';

export const AppLayout = props => {
  return (
    <div>
      <h1>Your Dashboard</h1>
      <button
        onClick={() => {
          Auth.logout(() => {
            props.history.push('/');
          });
        }}
      >
        Logout
      </button>
    </div>
  );
};
