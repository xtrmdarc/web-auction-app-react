import React from 'react';
import CountDown from '../Util/CountDown';

const BidAction = (props) => {
  const {item} = props;
  return (
    <div className="BidAction">
      <h3>Place a bid before deadline</h3>
      <h2 className="countDown"><CountDown endDate={item.end_date} /> </h2>
      <div className="action">
        <label for="bid"> Your bid starts at </label>
        <input id="bid" type="number"  />
        <div className="bidActionWrapper">
          <label className="autoBid">
            <input type="checkbox" />
            Enable auto-bid
          </label>
          <button >Bid now</button>
        </div>
      </div>
    </div>
  );
}

export default BidAction;
