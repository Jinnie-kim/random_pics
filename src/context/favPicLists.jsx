import { createContext, useState, useEffect } from 'react';

const FavPicListsContext = createContext();

function Provider({ children }) {
    const [imageLists, setImageLists] = useState([]);

    useEffect(() => {
        existFavPicLists();
    }, []);

    const existFavPicLists = () => {
        const favPicsList = JSON.parse(localStorage.getItem('favPics'));
        setImageLists(favPicsList || []);
    };

    const addFavPicLists = (newFavPic) => {
        const newFavPicLists = [...imageLists, newFavPic];
        setImageLists(newFavPicLists);
        localStorage.setItem('favPics', JSON.stringify(newFavPicLists));
    };

    const removeFavPicLists = (deleteFavPic) => {
        const newFavPicLists = imageLists.filter((image) => image.id !== deleteFavPic.id);
        setImageLists(newFavPicLists);
        localStorage.setItem('favPics', JSON.stringify(newFavPicLists));
    };

    const valueToShare = {
        imageLists,
        addFavPicLists,
        removeFavPicLists,
        existFavPicLists,
    };

    return <FavPicListsContext.Provider value={valueToShare}>{children}</FavPicListsContext.Provider>;
}

export { Provider };
export default FavPicListsContext;
