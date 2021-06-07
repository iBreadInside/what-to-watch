import React from 'react';
import {Link} from 'react-router-dom';
import { AppRoute } from '../../../const';

export default function FooterLogo() {
  return (
    <div className="logo">
      <Link to={AppRoute.MAIN} className="logo__link logo__link--light">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}
