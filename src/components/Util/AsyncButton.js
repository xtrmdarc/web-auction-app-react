import React, { useState } from 'react';

const AsyncButton = props => {

  const {className, handleClick, title} = props;
  const [loading, setLoading] = useState(false);

  const processRequest = () => {
    setLoading(true);
    handleClick().finally(p => setLoading(false));
  }

  return (
    <button className={`${className}`} onClick={processRequest} >
      {loading ? <div className="loader"></div> : title }
    </button>
  )
}

export default AsyncButton;