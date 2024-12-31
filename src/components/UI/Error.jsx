import React from 'react';

const Error404 = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <p className="error-message">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="back-home">Go Back Home</a>
      </div>

    </div>
  );
};

export default Error404;
