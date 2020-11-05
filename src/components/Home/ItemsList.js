import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import util from '../../services/util';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { setActiveItem } from '../../actions';

const Item = (props) => {
  const {item, onBidNowClick} = props;

  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
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
      <button onClick={() => onBidNowClick(item)} className="bidNowButton">
        Bid now
      </button>
    </div>
  );
};

const ItemsList = (props) => {
  const [items, setItems] = useState([]);
  const {history, filter, setActiveItem} = props;

  const onBidNowClick = (item) => {
    setActiveItem(item);
    history.push(`/items/${item.id}`);
  }

  useEffect(() => {
    api.getActiveItems().then(p => {
      setItems(p);
    });
  }, []);

  const categoryNameRegex = new RegExp(filter, 'gi');

  return (
    <div className="ItemsList">
      {
        items
          .filter(item => filter === '' || (`${item.item_name} ${item.description}`).match(categoryNameRegex))
          .map(item => <Item key={item.id} item={item} onBidNowClick={onBidNowClick} />)
      }
    </div>
  );
}

const mapStateToProps = state => ({
  filter: state.items.filter,
});

const mapDispatchToProps = dispatch => ({
  setActiveItem: (item) => dispatch(setActiveItem(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ItemsList));
