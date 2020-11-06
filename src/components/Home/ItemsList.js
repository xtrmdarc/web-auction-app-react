import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { setActiveItem } from '../../actions';
import CountDown from '../Util/CountDown';

const Item = (props) => {
  const {item, onBidNowClick} = props;

  return (
    <div className="Item">
      <div className="leftSide">
        <img className="image" src={item.image} width="150" />

        <div className="info">
          <h2>{item.item_name}</h2>
          <span>{item.description}</span>
        </div>
      </div>
      <h2><CountDown endDate={item.end_date} /></h2>
      <h2>${item.lastBid ? item.lastBid.amount : (0.00).toFixed(2)} </h2>
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
