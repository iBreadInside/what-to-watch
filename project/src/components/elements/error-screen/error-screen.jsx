import React from 'react';
import PropTypes from 'prop-types';

ErrorScreen.propTypes = {
  error: PropTypes.string.isRequired,
};

export default function ErrorScreen({error}) {
  return (
    <p style={{ marginTop: '150px', textAlign: 'center' }}>{error}</p>
  );
}
