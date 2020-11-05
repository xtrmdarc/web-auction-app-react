export const FILTER_ITEMS = 'FILTER_ITEMS';

export const filterItems = (filter) => {
  return {
    type: FILTER_ITEMS,
    filter
  }
};

