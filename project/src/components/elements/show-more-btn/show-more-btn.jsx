import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../../store/action';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  onBtnClick() {
    dispatch(ActionCreator.showMoreFilms());
  },
});

ShowMoreBtn.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};

export function ShowMoreBtn({onBtnClick}) {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={(evt) => {
          evt.preventDefault();
          onBtnClick();
        }}
      >
        Show more
      </button>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(ShowMoreBtn);
