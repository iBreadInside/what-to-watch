import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const';

export default function NotFound() {
  return (
    <div className="page-content">
      <h1>404 error. This page not found :(</h1>
      <Link to={AppRoute.MAIN}>
        <span>Back to main page</span>
      </Link>
    </div>
  );
}
