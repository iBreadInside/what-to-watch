import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Overview from '../../elements/film-overview/film-overview';
import Details from '../../elements/film-details/film-details';
import Reviews from '../../elements/film-reviews/film-reviews';
import filmProp from '../../pages/film/film.prop';
import commentProp from '../comment/comment.prop';

const TabType = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
};

function getTabByType(type, film, comments) {
  switch (type) {
    case TabType.OVERVIEW:
      return <Overview film={film} />;
    case TabType.DETAILS:
      return <Details film={film} />;
    case TabType.REVIEWS:
      return <Reviews comments={comments} />;
  }
}

Tabs.propTypes = {
  film: filmProp,
  comments: PropTypes.arrayOf(commentProp),
};

export default function Tabs({film, comments}) {
  const [activeTab, setActiveTab] = useState(TabType.OVERVIEW);

  const tabList = Object.entries(TabType).map(([, value]) => (
    <li
      className={`film-nav__item ${value === activeTab ? 'film-nav__item--active' : ''}`}
      key={value}
    >
      <a
        href="#/"
        className="film-nav__link"
        onClick={(evt) => {
          evt.preventDefault();
          setActiveTab(value);
        }}
      >
        {value}
      </a>
    </li>
  ));

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabList}
        </ul>
      </nav>

      {getTabByType(activeTab, film, comments)}

    </div>
  );
}
