import React from 'react';
import {connect} from 'react-redux';
import '../../assets/styles/itemDetail.scss';
import BidAction from './BidAction';
import BidHistory from './BidHistory';

const ItemDetail = props => {

  const {activeItem} = props;

  return (
    <div className="ItemDetail">
      <h1>{activeItem.item_name}</h1>
      <p className="description">{activeItem.description}</p>
      <div className="actionsWrapper">
        <BidAction item={activeItem} />
        <BidHistory />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  activeItem: state.activeItem,
});

export default connect(mapStateToProps)(ItemDetail);
