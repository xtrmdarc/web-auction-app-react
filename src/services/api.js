

const api = (() => {

  const domain = 'https://xtrmdarc-web-auction-sc.herokuapp.com';
  // const domain = 'http://localhost:8000';

  const getActiveItems = async () => {
    const response = await fetch(`${domain}/items`);
    const data = await response.json();
    return data;
  };

  const getItem = async (itemId) => {
    const response = await fetch(`${domain}/items/${itemId}`);
    const data = await response.json();
    return data;
  };

  const submitBid = async ( itemId, userId, amount, enableAutoBid) => {

    const response = await fetch(`${domain}/bids`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        itemId,
        amount,
        enableAutoBid,
      }),
    });
    const data = await response.json();
    return data;
  };

  const login = async (username) => {
    const response = await fetch(`${domain}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username
      }),
    });
    const data = await response.json();
    return data;
  }

  const updateUserMaxAutoBid = async (maxAutoBidAmount, userId) => {
    const response = await fetch(`${domain}/user/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        max_auto_bid_amount: parseFloat(maxAutoBidAmount),
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  }
  
  return {getActiveItems, getItem, submitBid, login, updateUserMaxAutoBid};
})();

export default api;