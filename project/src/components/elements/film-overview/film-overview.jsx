import React from 'react';
import {useSelector} from 'react-redux';
import {getReviewRating} from '../../../common';
import {getFilm} from '../../../store/film/selectors';

const FILM_GRADES = [
  ['Bad', [0, 3]],
  ['Normal', [3, 5]],
  ['Good', [5, 8]],
  ['Very good', [8, 10]],
  ['Awesome', [10, Infinity]],
];

export default function Overview() {
  const film = useSelector(getFilm);
  const {
    rating,
    scoresCount,
    description,
    director,
    starring,
  } = film;

  const starringText = starring.length > 4
    ? `${starring.slice(0, 4).join(', ')} and others`
    : starring.join(', ');

  const [filmLevel] = FILM_GRADES.find(([, grade]) => (rating >= grade[0] && rating < grade[1]));

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{getReviewRating(rating)}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{filmLevel}</span>
          <span className="film-rating__count">{scoresCount}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {starringText}</strong></p>
      </div>
    </>
  );
}
