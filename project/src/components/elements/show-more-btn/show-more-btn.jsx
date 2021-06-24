import React from 'react';
import PropTypes from 'prop-types';
import filmProp from '../../pages/film/film.prop';

ShowMoreBtn.propTypes = {
  films: PropTypes.arrayOf(filmProp),
};

export default function ShowMoreBtn({films}) {
  // const showMoreBtnElement =
  return (
    films.length !== 0
      ? <div className="catalog__more"><button className="catalog__button" type="button">Show more</button></div>
      : null
  );
}
