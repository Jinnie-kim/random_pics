import { useState } from 'react';
import ImageList from './component/ImageList';
import SearchBar from './component/SearchBar';
import searchImageList from './api';

function App() {
  const [imageLists, setImageLists] = useState([]);

  const getImageList = async (term) => {
    const result = await searchImageList(term);
    searchImageList(result);
  };

  return (
    <>
      <div>
        <SearchBar onSubmit={getImageList} />
      </div>
      <div>
        <ImageList imageLists={imageLists} />
      </div>
    </>
  );
}

export default App;
