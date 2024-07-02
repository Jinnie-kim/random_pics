import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageList from './component/ImageList';
import SearchBar from './component/SearchBar';
import searchImageList from './api';

function App() {
  const [imageLists, setImageLists] = useState([]);

  const getImageList = async (term) => {
    const result = await searchImageList(term);
    setImageLists(result);
  };

  return (
    <section className="container m-auto px-3">
      <div className="flex justify-between">
        <h1 className="mt-[90px] text-[64px]">Search</h1>
        <button className="mt-[90px]">
          <Link to="/archive">Archive🎞️</Link>
        </button>
      </div>
      <header className="mt-[40px]">
        <SearchBar onSubmit={getImageList} />
      </header>

      <main>
        <ImageList imageLists={imageLists} />
      </main>
    </section>
  );
}

export default App;
