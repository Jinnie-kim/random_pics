import { useState } from 'react';
import useFavPicListsContext from '../hooks/use-favPicLists-context';
import Link from '../component/Link';
import ImageList from '../component/ImageList';
import Modal from '../component/Modal';

function ImageArchive() {
  const { imageLists, existFavPicLists } = useFavPicListsContext();
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const resetFavPicLists = () => {
    localStorage.removeItem('favPics');
    existFavPicLists();
    setShowModal(false);
  };

  const actionBar = (
    <div className="flex justify-around">
      <button
        className="w-[60px] h-[30px] border-2 rounded-xl bg-rose-50 border-rose-500 text-gray-400 hover:text-rose-500 font-medium"
        onClick={resetFavPicLists}
      >
        예
      </button>
      <button
        className="w-[60px] h-[30px] border-2 rounded-xl bg-rose-50 border-rose-500 text-gray-400 hover:text-rose-500 font-medium"
        onClick={handleModalClose}
      >
        아니오
      </button>
    </div>
  );

  const modal = (
    <Modal actionBar={actionBar}>
      <h1>아카이브를 초기화하시겠습니까?</h1>
    </Modal>
  );

  return (
    <section className="container m-auto px-3">
      <div className="flex justify-between">
        <h1 className="mt-[90px] text-[64px]">Favorite Pic Archive🎞️</h1>
        <button className="mt-[90px]">
          <Link to="/">Home🌌</Link>
        </button>
      </div>

      <main className="flex flex-col">
        <button className="ml-auto border-2 p-1 rounded-xl bg-rose-50 border-rose-500 text-gray-400 hover:text-rose-500 font-medium" onClick={handleModalOpen}>
          Reset Archive
        </button>
        <>{imageLists.length > 0 ? <ImageList imageLists={imageLists} /> : <h1 className="mx-auto mt-[65px]">You haven't liked any photos yet!</h1>}</>
      </main>
      {showModal && modal}
    </section>
  );
}

export default ImageArchive;
