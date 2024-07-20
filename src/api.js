const searchImageList = async (term) => {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${term}`, {
        headers: {
            Authorization: 'Client-ID YgZZYR7G02SrYFg0WO0hpBwlESx2gG4paMNmTdXRSGg',
        },
    });

    const result = await response.json();

    return result.results;
};

export default searchImageList;
