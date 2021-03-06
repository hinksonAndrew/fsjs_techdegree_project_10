/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

/**
 * Renders a not found page if no routes match.
 */
export default () => {
  return (
    <main>
      <div className="wrap">
          <h2>Not Found</h2>
          <p>Sorry! We couldn't find the page you're looking for.</p>
      </div>
    </main>
  );
}