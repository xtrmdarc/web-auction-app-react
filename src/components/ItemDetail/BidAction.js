import React, { useState } from 'react';
import api from '../../services/api';
import CountDown from '../Util/CountDown';

const BidAction = (props) => {
  const {item} = props;
  const [amount, setAmount] = useState(item.lastBid ? item.lastBid.amount + 1 : 0.00);
  const [error, setError] = useState('');

  const bidNowHandleClick = () => {
    setError('');
    if(item.lastBid && parseFloat(amount) <= item.lastBid.amount) {
      setError('Your bid needs to be higher than the latest');
      return;
    }
    api.submitBid(item.id, 1, amount)
      .then(response => {
        if(response.code !== 200) {
          setError(response.message);
        }
      });
  }
  
  return (
    <div className="BidAction">
      <h3>Place a bid before deadline</h3>
      {item.end_date && <h2 className="countDown"><CountDown endDate={item.end_date} /> </h2>}
      <div className="action">
        <label htmlFor="bid"> Your bid starts at </label>
        <input id="bid" type="number" value={amount} onChange={e => setAmount(e.target.value)} />
        {error && <span className="errorMessage">{error}</span>}
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
