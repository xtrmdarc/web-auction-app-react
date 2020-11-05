import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import util from '../../services/util';
import {withRouter} from 'react-router-dom';

const Item = (props) => {
  const {item, onBidNowClick} = props;

  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
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
      <button onClick={() => onBidNowClick(item.id)} className="bidNowButton">
        Bid now
      </button>
    </div>
  );
};

const ItemsList = (props) => {
  const [items, setItems] = useState([]);
  const {history} = props;

  const onBidNowClick = (itemId) => {
    history.push(`/items/${itemId}`);
  }

  useEffect(() => {
    api.getActiveItems().then(p => {
      console.log(p);
      setItems(p);
    });
  }, []);

  return (
    <div className="ItemsList">
      {items.map(item => <Item key={item.id} item={item} onBidNowClick={onBidNowClick} />)}
    </div>
  );
}

export default withRouter(ItemsList);