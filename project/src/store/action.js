export const ActionType = {
  SET_FILTER: 'set-filter',
  SET_GENRE: 'set-genre',
};

export const ActionCreator = {
  setFilter: (FilterType) => ({
    type: ActionType.SET_FILTER,
    payload: FilterType,
  }),
  setGenre: (Genre) => ({
    type: ActionType.SET_GENRE,
    payload: Genre,
  }),
};
