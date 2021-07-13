import React, {useEffect} from 'react';
import FilmList from '../../elements/film-list/film-list';
import Logo from '../../elements/logo/logo';
import HiddenSVG from '../../elements/hidden-svg/hidden-svg';
import PageFooter from '../../elements/page-footer/page-footer';
import UserBlock from '../../elements/user-block/user-block';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFavoriteFilms} from '../../../store/api-actions';
import {getFavorites} from '../../../store/my-list/selectors';

export default function MyList() {
  const dispatch = useDispatch();
  const myFilms = useSelector(getFavorites);

  useEffect(() => {
    dispatch(fetchFavoriteFilms);
  }, [dispatch, myFilms]);

  return (
    <>
      <HiddenSVG />

      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />

          <h1 className="page-title user-page__title">My list</h1>

          <UserBlock />
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmList filmList={myFilms} listInitialLength={myFilms.length} />
        </section>

        <PageFooter />
      </div>
    </>
  );
}
