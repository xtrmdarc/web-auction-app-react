export const FILTER_ITEMS = 'FILTER_ITEMS';
export const SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM';

export const filterItems = (filter) => {
  return {
    type: FILTER_ITEMS,
    filter,
  };
};

export const setActiveItem = (item) => {
  return {
    type: SET_ACTIVE_ITEM,
    item,
  };
};