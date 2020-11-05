import React from 'react'
import '../../assets/styles/home.scss';
import ItemsFilter from './ItemsFilter';
import ItemsList from './ItemsList';

const Home = () => {
  return (
    <div className="Home">
      <ItemsFilter />
      <h1 className="mainTitle">Items on sale</h1>
      <ItemsList />
    </div>
  );
}

export default Home;