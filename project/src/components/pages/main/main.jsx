import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FilmList from '../../elements/film-list/film-list';
import HiddenSVG from '../../elements/hidden-svg/hidden-svg';
import MyListBtn from '../../elements/my-list-btn/my-list-btn';
import PageFooter from '../../elements/page-footer/page-footer';
import PlayBtn from '../../elements/play-btn/play-btn';
import Logo from '../../elements/logo/logo';
import UserBlock from '../../elements/user-block/user-block';
import filmProp from '../../pages/film/film.prop';
import GenreList from '../../elements/genre-list/genre-list';
import ShowMoreBtn from '../../elements/show-more-btn/show-more-btn';

const mapStateToProps = (state) => ({
  promo: state.promo,
  filmList: state.filmList,
  isShowBtn: state.isShowBtn,
});

Main.propTypes = {
  promo: filmProp,
  isShowBtn: PropTypes.bool.isRequired,
};

export function Main({promo, isShowBtn}) {
  return (
    <>
      <HiddenSVG />
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promo.backgroundImage} alt={promo.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promo.posterImage} alt={promo.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo.genre}</span>
                <span className="film-card__year">{promo.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayBtn film={promo}/>
                <MyListBtn />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <GenreList />
          </ul>

          <FilmList />

          {isShowBtn && <ShowMoreBtn />}
        </section>

        <PageFooter />
      </div>
    </>
  );
}

export default connect(mapStateToProps)(Main);
