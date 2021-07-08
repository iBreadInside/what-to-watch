export const AppRoute = {
  MAIN: '/',
  SIGN_IN: '/login',
  MY_LIST: '/mylist',
  FILM: '/films/:id',
  ADD_REVIEW: '/films/:id/review',
  PLAYER:'/player/:id',
};

export const APIRoute = {
  FILMS: '/films',
  PROMO: '/promo',
  FAVORITE: '/favorite',
  LOGIN: '/login',
  LOGOUT: '/logout',
  SIMILAR: '/similar',
  REVIEWS: '/comments',
};

export const FilmsShown = {
  MAIN: 8,
  SIMILAR: 4,
};

export const FilterType = {
  ALL_GENRES: 'All genres',
  COMEDIES: 'Comedies',
  CRIME: 'Crime',
  DOCUMENTARY: 'Documentary',
  DRAMAS: 'Dramas',
  HORROR: 'Horror',
  FAMILY: 'Kids & Family',
  ROMANCE: 'Romance',
  SCI_FI: 'Sci-Fi',
  THRILLERS: 'Thrillers',
};

// export const Genre = {
//   ALL_GENRES: 'All genres',
//   COMEDY: 'Comedy',
//   CRIME: 'Crime',
//   DOCUMENTARY: 'Documentary',
//   DRAMA: 'Drama',
//   HORROR: 'Horror',
//   FAMILY: 'Kids & Family',
//   ROMANCE: 'Romance',
//   SCI_FI: 'Sci-Fi',
//   THRILLER: 'Thriller',
// };

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const ResponseCode = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
};

export const INITIAL_GENRE = 'All genres';
