import React from 'react';
import { FilmListLenght } from '../../../const';
import { generateFilmCards } from '../../../utils';
import FilmCard from '../../elements/film-card/film-card';
import HeaderLogo from '../../elements/header-logo/header-logo';
import HiddenSVG from '../../elements/hidden-svg/hidden-svg';
import PageFooter from '../../elements/page-footer/page-footer';
import UserBlock from '../../elements/user-block/user-block';

const filmCards = generateFilmCards(FilmListLenght.MY_LIST, FilmCard);

export default function MyList() {
  return (
    <>
      <HiddenSVG />

      <div className="user-page">
        <header className="page-header user-page__head">
          <HeaderLogo />

          <h1 className="page-title user-page__title">My list</h1>

          <UserBlock />
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__films-list">
            {filmCards}
          </div>
        </section>

        <PageFooter />
      </div>
    </>
  );
}
