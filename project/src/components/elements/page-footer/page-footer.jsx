import React from 'react';
import Copyright from '../copyright/copyright';
import Logo from '../logo/logo';

const IS_LIGHT = true;

export default function PageFooter() {
  return (
    <footer className="page-footer">
      <Logo isLight={IS_LIGHT} />
      <Copyright />
    </footer>
  );
}
