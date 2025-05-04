import React from 'react';
import { Link } from 'react-router-dom';


export default function NotFound() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-1 text-danger">404</h1>
        <p className="lead text-muted">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/first-project/" className="btn btn-primary btn-lg">Go Back Home</Link>
      </div>
    </div>
  );
}
