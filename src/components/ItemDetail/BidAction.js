import React, { useState } from 'react';
import api from '../../services/api';
import CountDown from '../Util/CountDown';

const BidAction = (props) => {
  const {item, user, setActiveItem} = props;
  const [amount, setAmount] = useState(item.lastBid ? item.lastBid.amount + item.lastBid.auto_bidded_amount + 1 : 0.00);
  const [enableAutoBid, setEnableAutoBid] = useState(false);
  const [error, setError] = useState('');

  const bidNowHandleClick = () => {
    setError('');
    if(item.lastBid && parseFloat(amount) <= item.lastBid.amount) {
      setError('Your bid needs to be higher than the latest');
      return;
    }
    api.submitBid(item.id, user.id, amount, enableAutoBid)
      .then(response => {
        if(response.code !== 200) {
          setError(response.message);
        }
        else {
          api.getItem(item.id)
            .then(item => {
              setActiveItem(item);
            });
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
            <input type="checkbox" checked={enableAutoBid} onChange={(e) => setEnableAutoBid(e.target.checked)} />
            Enable auto-bid
          </label>
          <button onClick={bidNowHandleClick}>Bid now</button>
        </div>
      </div>
    </div>
  );
}

export default BidAction;
