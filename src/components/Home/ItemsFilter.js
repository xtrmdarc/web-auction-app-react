import React from 'react';
import searchIcon from '../../assets/images/searchIcon.svg';
import {connect} from 'react-redux';
import { filterItems } from '../../actions';

const ItemsFilter = (props) => {
  const {filter, filterItems} = props;
  
  return (
    <div className="ItemsFilter">
      <input value={filter} type="text" onChange={(e) => filterItems(e.target.value)} placeholder="Search by item name or description"/>
      <img src={searchIcon} alt="Search filter"/>
    </div>
  );
};

const mapStateToProps = state => ({
  filter: state.items.filter,
});

const mapDispatchToProps = dispatch => ({
  filterItems: (filter) => dispatch(filterItems(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsFilter);
