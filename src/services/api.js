

const api = (() => {

  const domain = 'http://localhost:8000';

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

  const submitBid = async ( itemId, userId, amount) => {

    const response = await fetch(`${domain}/bids`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        itemId,
        amount,
      }),
    });
    const data = await response.json();
    return data;
  };
  
  return {getActiveItems, getItem, submitBid};
})();

export default api;