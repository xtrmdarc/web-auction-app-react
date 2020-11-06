import React from 'react';
import searchIcon from '../../assets/images/searchIcon.svg';
import {connect} from 'react-redux';
import { filterItems, paginateItems } from '../../actions';

const ItemsFilter = (props) => {
  const {filter, filterItems, paginateItems} = props;

  const handleFilterChange = (e) => {
    filterItems(e.target.value);
    paginateItems(0);
  }
  
  return (
    <div className="ItemsFilter">
      <input value={filter} type="text" onChange={handleFilterChange} placeholder="Search by item name or description"/>
      <img src={searchIcon} alt="Search filter"/>
    </div>
  );
};

const mapStateToProps = state => ({
  filter: state.items.filter,
});

const mapDispatchToProps = dispatch => ({
  filterItems: (filter) => dispatch(filterItems(filter)),
  paginateItems: (page) => dispatch(paginateItems(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsFilter);
