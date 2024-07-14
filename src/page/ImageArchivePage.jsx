import useFavPicListsContext from '../hooks/use-favPicLists-context';
import Link from '../component/Link';
import ImageList from '../component/ImageList';

function ImageArchive() {
  const { imageLists, existFavPicLists } = useFavPicListsContext();

  const resetFavPicLists = () => {
    localStorage.removeItem('favPics');
    existFavPicLists();
  };

  return (
    <section className="container m-auto px-3">
      <div className="flex justify-between">
        <h1 className="mt-[90px] text-[64px]">Favorite Pic Archive🎞️</h1>
        <button className="mt-[90px]">
          <Link to="/">Home🌌</Link>
        </button>
      </div>

      <main className="flex flex-col">
        <button className="ml-auto border-2 p-1 rounded-xl bg-rose-50 border-rose-500 text-gray-400 hover:text-rose-500 font-medium" onClick={resetFavPicLists}>
          Reset Archive
        </button>
        <ImageList imageLists={imageLists} />
      </main>
    </section>
  );
}

export default ImageArchive;
