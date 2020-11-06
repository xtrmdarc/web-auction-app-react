export const FILTER_ITEMS = 'FILTER_ITEMS';
export const SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM';
export const LOAD_ITEMS = 'LOAD_ITEMS';
export const PAGINATE_ITEMS = 'PAGINATE_ITEMS';
export const TOGGLE_SORT = 'TOGGLE_SORT';
export const LOGIN_USER = 'LOGIN_USER';
export const UPDATE_USER = 'UPDATE_USER';

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

export const loginUser = (user) => {
  return {
    type: LOGIN_USER,
    user,
  }
}

export const updateUser =(user) => {
  return {
    type: UPDATE_USER,
    user,
  }
}
