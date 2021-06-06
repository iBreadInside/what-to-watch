import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

App.propTypes = {
  promo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
  }),
};

export default function App({promo}) {
  return (
    <Main promo={promo} />
  );
}
