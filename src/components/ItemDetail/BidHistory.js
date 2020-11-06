import React from 'react';

const BidHistory = (props) => {
  const {bidsHistory} = props;

  return (
    <div className="BidHistory">
      <h3 className="sectionTitle">Bids history</h3>
        {
        bidsHistory.map(bid => 
          (
          <div key={bid.id} className="bidHistoryItem">
            <span>{bid.user.name} </span>
            <span>${bid.amount}</span>
          </div>
          ) 
        )
        }
    </div>
  );
}

BidHistory.defaultProps = {
  bidsHistory: [],
}

export default BidHistory;
