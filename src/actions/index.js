export const FILTER_ITEMS = 'FILTER_ITEMS';
export const SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM';
export const LOAD_ITEMS = 'LOAD_ITEMS';
export const PAGINATE_ITEMS = 'PAGINATE_ITEMS';
export const TOGGLE_SORT = 'TOGGLE_SORT';

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

export const loadItems = (items) => {
  return {
    type: LOAD_ITEMS,
    items
  };
};

export const paginateItems = (page) => {
  return {
    type: PAGINATE_ITEMS,
    page,
  };
};

export const toggleSort = () => {
  return {
    type: TOGGLE_SORT,
  };
};
