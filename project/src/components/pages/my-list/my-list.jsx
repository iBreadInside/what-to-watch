import React, {useEffect} from 'react';
import Logo from '../../elements/logo/logo';
import HiddenSVG from '../../elements/hidden-svg/hidden-svg';
import PageFooter from '../../elements/page-footer/page-footer';
import UserBlock from '../../elements/user-block/user-block';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFavoriteFilms} from '../../../store/api-actions';
import {getFavorites} from '../../../store/my-list/selectors';
import FilmCard from '../../elements/film-card/film-card';

export default function MyList() {
  const dispatch = useDispatch();
  const myFilms = useSelector(getFavorites);

  useEffect(() => {
    dispatch(fetchFavoriteFilms());
  }, [dispatch]);

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
          <div className="catalog__films-list">
            {myFilms.length !== 0
              ? myFilms.map((film) => <FilmCard key={film.id} film={film} />)
              : <p>Sorry, there is no films of that genre :(</p>}
          </div>
        </section>

        <PageFooter />
      </div>
    </>
  );
}
