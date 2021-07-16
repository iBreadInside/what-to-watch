import React, {useEffect, useState} from 'react';
import Overview from '../../elements/film-overview/film-overview';
import Details from '../../elements/film-details/film-details';
import Reviews from '../../elements/film-reviews/film-reviews';

const TabType = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
};

function getTabByType(type) {
  switch (type) {
    case TabType.DETAILS:
      return <Details />;
    case TabType.REVIEWS:
      return <Reviews />;
    default:
      return <Overview />;
  }
}

export default function Tabs() {
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

  function setDefaultTab() {
    setActiveTab(TabType.OVERVIEW);
  }

  useEffect(setDefaultTab, []);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabList}
        </ul>
      </nav>

      {getTabByType(activeTab)}

    </div>
  );
}
