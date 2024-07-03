import { Link } from 'react-router-dom';
import { useState } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

function ImageArchive() {
  const [imageLists, setImageLists] = useState([]);

  return (
    <section className="container m-auto px-3">
      <div className="flex justify-between">
        <h1 className="mt-[90px] text-[64px]">Favorite Pic Archive🎞️</h1>
        <button className="mt-[90px]">
          <Link to="/">Home🌌</Link>
        </button>
      </div>

      <main>
        <ImageList imageLists={imageLists} />
      </main>
    </section>
  );
}

export default ImageArchive;
