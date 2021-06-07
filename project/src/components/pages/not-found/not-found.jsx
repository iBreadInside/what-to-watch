import React from 'react';
import {Link} from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-content">
      <h1>404 error. This page not found :(</h1>
      <Link to="/">
        <span>Back to main page</span>
      </Link>
    </div>
  );
}
