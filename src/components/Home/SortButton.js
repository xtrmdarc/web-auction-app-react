import React from 'react';

const SortButton = (props) => {
  const {title, handleClick } = props;
  return (
    <button onClick={handleClick} className="SortButton">
      Sort by {title}
    </button>
  );
};

export default SortButton;
