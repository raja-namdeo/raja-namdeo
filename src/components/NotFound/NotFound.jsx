import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-4">Page not found</p>
        <Link to="/" className="text-blue-500 hover:text-blue-600 underline">
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
