import React, { useState } from 'react';
import api from '../../services/api';
import CountDown from '../Util/CountDown';

const BidAction = (props) => {
  const {item} = props;
  const [amount, setAmount] = useState(item.last_bid ? item.last_bid.amount : 0.00);
  
  const bidNowHandleClick = () => {
    api.submitBid(item.id, 1, amount)
      .then(response => {
        console.log(response);
      });
  }
  
  return (
    <div className="BidAction">
      <h3>Place a bid before deadline</h3>
      {item.end_date && <h2 className="countDown"><CountDown endDate={item.end_date} /> </h2>}
      <div className="action">
        <label htmlFor="bid"> Your bid starts at </label>
        <input id="bid" type="number" value={amount} onChange={e => setAmount(e.target.value)} />
        <div className="bidActionWrapper">
          <label className="autoBid">
            <input type="checkbox" />
            Enable auto-bid
          </label>
          <button onClick={bidNowHandleClick}>Bid now</button>
        </div>
      </div>
    </div>
  );
}

export default BidAction;
