import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import '../../assets/styles/itemDetail.scss';
import BidAction from './BidAction';
import BidHistory from './BidHistory';
import { setActiveItem } from '../../actions';
import api from '../../services/api';
import {withRouter} from 'react-router-dom';

const ItemDetail = props => {

  const {activeItem, setActiveItem, match, user} = props;

  useEffect(() => {
    api.getItem(match.params.itemId)
      .then(item => {
        setActiveItem(item);
      });
  }, []);

  return (
    <div className="ItemDetail">
      <h1>{activeItem.item_name}</h1>
      <p className="description">{activeItem.description}</p>
      <div className="actionsWrapper">
        <BidAction item={activeItem} user={user} setActiveItem={setActiveItem}/>
        <BidHistory bidsHistory={activeItem.bids} />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  activeItem: state.activeItem,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setActiveItem: (item) => dispatch(setActiveItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ItemDetail));
