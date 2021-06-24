import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {FilterType, Genre} from '../../../const';
import {ActionCreator} from '../../../store/action';

const mapStateToProps = (state) => ({
  genre: state.genre,
  filmList: state.filmList,
  filterType: state.filterType,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter(filterType, genre) {
    dispatch(ActionCreator.setFilter(filterType));
    dispatch(ActionCreator.setGenre(genre));
  },
});

GenreList.propTypes = {
  filterType: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export function GenreList({filterType, onChangeFilter}) {
  const genres = Object.values(Genre);

  const categories = Object.values(FilterType).map((caterogy, index) => {
    const activeClass = filterType === caterogy ? 'catalog__genres-item--active' : '';

    return (
      <li
        className={`catalog__genres-item ${activeClass}`}
        key={caterogy}
      >
        <a
          href="#"
          className="catalog__genres-link"
          data-genre={genres[index]}
          onClick={(evt) => {
            evt.preventDefault();
            onChangeFilter(caterogy, evt.currentTarget.dataset.genre);
          }}
        >
          {caterogy}
        </a>
      </li>
    );
  });

  return (
    <ul className="catalog__genres-list">
      {categories}
    </ul>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
