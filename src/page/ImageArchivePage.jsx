import useFavPicListsContext from '../hooks/use-favPicLists-context';
import Link from '../component/Link';
import ImageList from '../component/ImageList';

function ImageArchive() {
  const { imageLists } = useFavPicListsContext();

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
