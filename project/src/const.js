export const REQUEST_TIMEOUT = 5000;

export const AppRoute = {
  MAIN: '/',
  SIGN_IN: '/login',
  MY_LIST: '/mylist',
  FILM: '/films/:id',
  ADD_REVIEW: '/films/:id/review',
  PLAYER:'/player/:id',
  NOT_FOUND: '/404',
};

export const APIRoute = {
  FILMS: '/films',
  PROMO: '/promo',
  FAVORITE: '/favorite',
  LOGIN: '/login',
  LOGOUT: '/logout',
  SIMILAR: '/similar',
  REVIEWS: '/comments',
  ADD_REVIEW: '/review',
};

export const FilmsShown = {
  MAIN: 8,
  SIMILAR: 4,
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const ResponseCode = {
  OK: 200,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
};

export const INITIAL_GENRE = 'All genres';

export const PosterType = {
  BIG: 'BIG',
  SMALL: 'SMALL',
};
