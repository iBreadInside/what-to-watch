import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {FilterType} from '../../../const';
import {ActionCreator} from '../../../store/action';

const mapStateToProps = (state) => ({
  filmList: state.filmList,
  filterType: state.filterType,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter(filterType) {
    dispatch(ActionCreator.setFilter(filterType));
  },
});

GenreList.propTypes = {
  filterType: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export function GenreList({filterType, onChangeFilter}) {
  const categories = Object.values(FilterType).map((caterogy) => {
    const activeClass = filterType === caterogy ? 'catalog__genres-item--active' : '';

    return (
      <li
        className={`catalog__genres-item ${activeClass}`}
        key={caterogy}
      >
        <a
          href="#"
          className="catalog__genres-link"
          onClick={(evt) => {
            evt.preventDefault();
            onChangeFilter(caterogy);
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
