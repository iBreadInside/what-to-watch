export const ActionType = {
  SET_FILTER: 'set-filter',
};

export const ActionCreator = {
  setFilter: (FilterType) => ({
    type: ActionType.SET_FILTER,
    payload: FilterType,
  }),
};
