

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
  
  return {getActiveItems, getItem};
});

export default api;