/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

/**
 * Renders if a route is accessed by an un-authorized user.
 */
export default () => {
  return (
    <main>
      <div className="wrap">
          <h2>Forbidden</h2>
          <p>Oh oh! You can't access this page.</p>
      </div>
    </main>
  );
}