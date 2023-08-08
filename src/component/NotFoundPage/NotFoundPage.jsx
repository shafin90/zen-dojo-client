import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import './NotFoundPage.css'

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">
        Go Back
      </Link>
    </div>
  );
};

export default NotFoundPage;
