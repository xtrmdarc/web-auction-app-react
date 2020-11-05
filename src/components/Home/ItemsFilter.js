import React from 'react';
import searchIcon from '../../assets/images/searchIcon.svg';

const ItemsFilter = () => {

  return (
    <div className="ItemsFilter">
      <input type="text" />
      <img src={searchIcon} alt="Search filter"/>
    </div>
  );
};

export default ItemsFilter;
