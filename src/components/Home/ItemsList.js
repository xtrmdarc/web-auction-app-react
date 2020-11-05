import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import util from '../../services/util';

const Item = (props) => {
  const {item} = props;

  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log();
      const seconds = new Date().getSeconds();
      setTimeRemaining(util.getTimeRemaining(new Date(item.end_date.replace(' ', 'T'))));
    }, 1000);

    return () => {clearTimeout(timer)};
  });

  return (
    <div className="Item">
      <div className="leftSide">
        <img className="image" src={item.image} width="150" />

        <div className="info">
          <h2>{item.item_name}</h2>
          <span>{item.description}</span>
        </div>
      </div>
      
      <h2>{timeRemaining} </h2>
      <h2>${item.last_bid ? item.last_bid.amount : (0.00).toFixed(2)} </h2>
      <button className="bidNowButton">
        Bid now
      </button>
    </div>
  );
};

const ItemsList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.getActiveItems().then(p => {
      console.log(p);
      setItems(p);
    });
  }, []);

  return (
    <div className="ItemsList">
      {items.map(item => <Item key={item.id} item={item} />)}
    </div>
  );
}

export default ItemsList;