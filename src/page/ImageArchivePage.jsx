import { useState } from 'react';
import useFavPicListsContext from '../hooks/use-favPicLists-context';
import Link from '../component/Link';
import ImageList from '../component/ImageList';
import Modal from '../component/Modal';
import Button from '../component/Button';

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
            <Button text onClick={resetFavPicLists}>
                예
            </Button>
            <Button text onClick={handleModalClose}>
                아니오
            </Button>
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
                <button type="button" className="mt-[90px]">
                    <Link to="/">Home🌌</Link>
                </button>
            </div>

            <main className="flex flex-col">
                <Button text className="w-fit h-fit ml-auto p-1 d" onClick={handleModalOpen}>
                    Reset Archive
                </Button>
                <>{imageLists.length > 0 ? <ImageList imageLists={imageLists} /> : <h1 className="mx-auto mt-[65px]">You haven't liked any photos yet!</h1>}</>
            </main>
            {showModal && modal}
        </section>
    );
}

export default ImageArchive;
