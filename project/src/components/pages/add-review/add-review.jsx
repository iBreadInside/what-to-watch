import React, { useEffect } from 'react';
import {Link, Redirect, useParams} from 'react-router-dom';
import Logo from '../../elements/logo/logo';
import HiddenSVG from '../../elements/hidden-svg/hidden-svg';
import UserBlock from '../../elements/user-block/user-block';
import ReviewForm from '../../elements/review-form/review-form';
import {APIRoute, AppRoute} from '../../../const';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFilmById} from '../../../store/api-actions';
import {deleteCurrentFilmData} from '../../../store/actions';
import LoadingScreen from '../../elements/loading-screen/loading.screen';
import {getFilm, getIsFilmResponce} from '../../../store/film/selectors';

export default function AddReview() {
  const params = useParams();
  const dispatch = useDispatch();
  const currentFilm = useSelector(getFilm);
  const isFilmResponsed = useSelector(getIsFilmResponce);

  useEffect(() => {
    dispatch(fetchFilmById(params.id));
    return () => dispatch(deleteCurrentFilmData);
  }, [dispatch, params.id]);

  if (!currentFilm && !isFilmResponsed) {
    return <LoadingScreen />;
  }

  if (!currentFilm && isFilmResponsed) {
    return <Redirect to={AppRoute.NOT_FOUND} />;
  }

  const {
    id,
    name,
    backgroundImage,
    posterImage,
  } = currentFilm;

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
            <Logo />

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`${APIRoute.FILMS}/${id}`} className="breadcrumbs__link">{name}</Link>
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
