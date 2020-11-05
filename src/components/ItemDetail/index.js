import React from 'react';
import {connect} from 'react-redux';
import '../../assets/styles/itemDetail.scss';

const ItemDetail = props => {

  const {activeItem} = props;
  console.log(props);
  return (
    <div className="ItemDetail">
      <h1>{activeItem.item_name}</h1>
      <p>{activeItem.description}</p>
    </div>
  );
}

const mapStateToProps = state => ({
  activeItem: state.activeItem,
});

export default connect(mapStateToProps)(ItemDetail);
