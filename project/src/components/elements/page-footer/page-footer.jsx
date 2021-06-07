import React from 'react';
import Copyright from '../copyright/copyright';
import FooterLogo from '../footer-logo/footer-logo';

export default function PageFooter() {
  return (
    <footer className="page-footer">
      <FooterLogo />
      <Copyright />
    </footer>
  );
}
