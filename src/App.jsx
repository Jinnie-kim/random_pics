import { useState } from 'react';
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
    <section className="width-[1180px] height-[1080px] mx-auto grid gap-x-[20px] grid-cols-12 grid-rows-12">
      <h1 className="col-start-2 col-span-2 row-span-2 text-[64px]">Search</h1>
      <header className="row-start-4 col-start-2 col-span-10 row-span-1">
        <SearchBar onSubmit={getImageList} />
      </header>
      <main className="row-start-5 col-start-2 col-span-10">
        <ImageList imageLists={imageLists} />
      </main>
    </section>
  );
}

export default App;
