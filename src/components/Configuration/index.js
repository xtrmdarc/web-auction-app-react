import React, { useState } from 'react';
import {connect} from 'react-redux';
import '../../assets/styles/configuration.scss';
import api from '../../services/api';

const Configuration = props => {

  const {user} = props;
  const [maxAmount, setMaxAmount] = useState(user.max_auto_bid_amount);
  const [error, setError] = useState('');

  const handleClick = () => {
    setError('');
    if(!maxAmount || parseFloat(maxAmount) <= 0) setError("Amount needs to be higher than 0");
    api.updateUserMaxAutoBid(maxAmount, user.id)
      .then(res => {
        console.log(res);
      });
  }

  return (
    <div className="Configuration">
      <div className="contentWrapper">
        <h1 className="mainTitle">Hi {user.name} </h1>
        <p className="sectionDesc">Set your personal preferences below</p>
        <label>Max auto bid amount</label>
        <input value={maxAmount} type="text" onChange={(e) => setMaxAmount(e.target.value)} />
        {error && <span className="errorMessage">{error}</span>}
        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Configuration);