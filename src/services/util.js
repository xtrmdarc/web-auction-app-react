
const util = (() => {

  const convertToUTCDate = (date) => {
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
  };

  const getTimeRemaining = (endDate) => {
    const today = new Date();
    const difference = endDate - today;
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    };
    const finalHours = timeLeft.days * 24 + timeLeft.hours;
    return (finalHours > 0 ? `${finalHours}h` : '') + (` ${timeLeft.minutes}m`) + (` ${timeLeft.seconds}s`);
  };

  return {convertToUTCDate, getTimeRemaining};
})();

export default util;