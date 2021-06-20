import React from 'react';
import {Link, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderLogo from '../../elements/logo/logo';
import HiddenSVG from '../../elements/hidden-svg/hidden-svg';
import UserBlock from '../../elements/user-block/user-block';
import filmProp from '../film/film.prop';
import ReviewForm from '../../elements/review-form/review-form';

AddReview.propTypes = {
  films: PropTypes.arrayOf(filmProp),
};

export default function AddReview({films}) {
  const params = useParams();

  const [{
    id,
    name,
    backgroundImage,
    posterImage,
  }] = films.filter((film) => film.id === +params.id);

  return (
    <>
      <HiddenSVG />

      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <HeaderLogo />

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <UserBlock />
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <ReviewForm />
        </div>

      </section>
    </>
  );
}
