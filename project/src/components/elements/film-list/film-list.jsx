import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';
import filmProp from '../../pages/film/film.prop';
import {useSelector} from 'react-redux';

FilmList.propTypes = {
  filmList: PropTypes.arrayOf(filmProp),
  listInitialLength: PropTypes.number.isRequired,
};

export default function FilmList({filmList, listInitialLength}) {
  const currentFilter = useSelector((state) => state.currentGenre);
  const [filmsCount, setCount] = useState(listInitialLength);

  function handleBtnClick() {
    setCount(filmsCount + listInitialLength);
  }

  useEffect(() => {
    setCount(listInitialLength);
  }, [currentFilter]);

  return (
    <>
      <div className="catalog__films-list">
        {filmList.length !== 0
          ? filmList.slice(0, filmsCount).map((film) => <FilmCard key={film.id} film={film} />)
          : <p>Sorry, there is no films of that genre :(</p>}
      </div>

      {filmsCount < filmList.length && (
        <div className="catalog__more">
          <button
            className="catalog__button"
            type="button"
            onClick={handleBtnClick}
          >
            Show more
          </button>
        </div>
      )}
    </>
  );
}
