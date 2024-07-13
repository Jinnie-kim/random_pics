import { useContext } from 'react';
import FavPicListsContext from '../context/favPicLists';

function useFavPicListsContext() {
  return useContext(FavPicListsContext);
}

export default useFavPicListsContext;
