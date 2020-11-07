import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { loadItems, paginateItems, setActiveItem, toggleSort } from '../../actions';
import CountDown from '../Util/CountDown';
import PaginationLinks from './PaginationLinks';
import SortButton from './SortButton';

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
      <h2 className="countDown"><CountDown endDate={item.end_date} /></h2>
      <h2 className="lastBidAmount">
        ${item.lastBid ? (parseFloat(item.lastBid.amount) + parseFloat(item.lastBid.auto_bidded_amount)).toFixed(2) : (0.00).toFixed(2)}
      </h2>
      <button onClick={() => onBidNowClick(item)} className="bidNowButton">
        Bid now
      </button>
    </div>
  );
};

const ItemsList = (props) => {

  const {history, filter, setActiveItem, items, setItems, pagination, paginateItems, sort, toggleItemSort} = props;

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
  const filteredItems = items.filter(item => filter === '' || (`${item.item_name} ${item.description}`).match(categoryNameRegex));
  return (
    <div className="itemsListSection">
      <div className="listModifiers">
        <SortButton title="Price" handleClick={toggleItemSort}/>
        <PaginationLinks items={filteredItems} pagination={pagination} paginateItems={paginateItems} />
      </div>
      
      <div className="ItemsList">
        {
          filteredItems
            .sort((item, nextItem) => {
              if(sort === 0) return;
              if(sort === 1)
                return (nextItem.lastBid.amount + nextItem.lastBid.auto_bidded_amount) - (item.lastBid.amount + item.lastBid.auto_bidded_amount);
              if(sort === -1)
                return (item.lastBid.amount + item.lastBid.auto_bidded_amount) - (nextItem.lastBid.amount + nextItem.lastBid.auto_bidded_amount);;
            })
            .slice(pagination.currentIdxs[0], pagination.currentIdxs[1])
            .map(item => <Item key={item.id} item={item} onBidNowClick={onBidNowClick} />)
            
        }
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  filter: state.items.filter,
  items: state.items.collection,
  pagination: state.items.pagination,
  sort: state.items.sort,
});

const mapDispatchToProps = dispatch => ({
  setActiveItem: (item) => dispatch(setActiveItem(item)),
  setItems: (items) => dispatch(loadItems(items)),
  paginateItems: (page) => dispatch(paginateItems(page)),
  toggleItemSort: () => dispatch(toggleSort()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ItemsList));
