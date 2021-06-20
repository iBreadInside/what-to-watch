import React from 'react';
import PropTypes from 'prop-types';
import FilmList from '../../elements/film-list/film-list';
import Logo from '../../elements/logo/logo';
import HiddenSVG from '../../elements/hidden-svg/hidden-svg';
import PageFooter from '../../elements/page-footer/page-footer';
import UserBlock from '../../elements/user-block/user-block';
import filmProp from '../film/film.prop';

MyList.propTypes = {
  films: PropTypes.arrayOf(filmProp),
};

export default function MyList({films}) {
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

          <FilmList films={films} />
        </section>

        <PageFooter />
      </div>
    </>
  );
}
