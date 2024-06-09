const searchImageList = async (term) => {
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${term}`, {
    headers: {
      Authorization: 'Client-ID YgZZYR7G02SrYFg0WO0hpBwlESx2gG4paMNmTdXRSGg',
    },
  });

  return response.json();
};

export default searchImageList;
