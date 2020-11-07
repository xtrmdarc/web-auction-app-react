import React, { useEffect, useState } from 'react';
import util from '../../services/util';

const CountDown = (props) => {
  const {endDate} = props;

  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    setTimeRemaining(util.getTimeRemaining(new Date(endDate.replace(' ', 'T'))));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining(util.getTimeRemaining(new Date(endDate.replace(' ', 'T'))));
    }, 1000);

    return () => {clearTimeout(timer)};
  });

  return (
    timeRemaining
  );
}

export default CountDown;