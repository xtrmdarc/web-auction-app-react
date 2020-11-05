import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const Item = (props) => {
  const {item} = props;

  return (
    <div className="Item">
      <div className="leftSide">
        <img className="image" src={item.image} width="150" />

        <div className="info">
          <h2>{item.item_name}</h2>
          <span>{item.description}</span>
        </div>
      </div>
      
      <h2>{item.end_date} </h2>
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
      {items.map(item => <Item item={item} />)}
    </div>
  );
}

export default ItemsList;