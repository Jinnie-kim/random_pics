import { useState, useEffect } from 'react';
import useFavPicListsContext from '../hooks/use-favPicLists-context';
import useNavigationContext from '../hooks/use-navigation-context';
import Modal from './Modal';
import { PiHeartLight } from 'react-icons/pi';
import { FcLike } from 'react-icons/fc';
import { BsDownload, BsShare } from 'react-icons/bs';

function ImageCard({ image }) {
  const { imageLists, addFavPicLists, removeFavPicLists } = useFavPicListsContext();
  const { currentPath } = useNavigationContext();
  const [heartClick, setHeartClick] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false); // 하트 버튼 클릭 시 뜨는 모달 제어
  const [modalContent, setModalContent] = useState('');
  const [modalCallback, setModalCallback] = useState(null);

  const handleYes = () => {
    if (modalCallback) modalCallback(true);
    setIsModalOpen(false);
  };

  const handleNo = () => {
    if (modalCallback) modalCallback(false);
    setIsModalOpen(false);
  };

  const favPicActionBar = (
    <div className="flex justify-around">
      <button className="w-[60px] h-[30px] border-2 rounded-xl bg-rose-50 border-rose-500 text-gray-400 hover:text-rose-500 font-medium" onClick={handleYes}>
        예
      </button>
      <button className="w-[60px] h-[30px] border-2 rounded-xl bg-rose-50 border-rose-500 text-gray-400 hover:text-rose-500 font-medium" onClick={handleNo}>
        아니오
      </button>
    </div>
  );

  const openConfirmModal = async (imageInfo) => {
    const result = await editFavoritePicLists(imageInfo);
    if (result) {
      console.log('user clicked yes');
      // 이미지 삭제 코드 추가
      removeFavPicLists(imageInfo);
      setHeartClick(false);
    } else {
      console.log('user clicked no');
    }
  };

  const editFavoritePicLists = (imageInfo) => {
    if (heartClick) {
      if (currentPath === '/') {
        return new Promise((resolve) => {
          setModalContent('이미 저장한 이미지 입니다. 삭제하시겠습니까?');
          setIsModalOpen(true);
          setModalCallback(() => resolve);
        });
      } else if (currentPath === '/archive') {
        return new Promise((resolve) => {
          setModalContent('아카이브에서 삭제하시겠습니까?');
          setIsModalOpen(true);
          setModalCallback(() => resolve);
        });
      }
    } else {
      setHeartClick(!heartClick);
      addFavPicLists(imageInfo);
      return Promise.resolve(false);
    }
  };

  const copyImageUrlClipBoard = (url) => {
    navigator.clipboard.writeText(url);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div className="flex">
      <button
        className="mx-auto w-[60px] h-[30px] border-2 rounded-xl bg-rose-50 border-rose-500 text-gray-400 hover:text-rose-500 font-medium"
        onClick={handleModalClose}
      >
        확인
      </button>
    </div>
  );

  const clipboardModal = (
    <Modal actionBar={actionBar}>
      <h1>이미지 주소가 클립보드에 복사되었습니다.</h1>
    </Modal>
  );

  useEffect(() => {
    if (imageLists.length > 0) {
      let matchPic = imageLists.find((pic) => {
        return pic.id === image.id;
      });

      setHeartClick(!!matchPic);
    }
  }, []);

  return (
    <li className="relative">
      <img src={image.urls.small} alt={image.alt_description} className="rounded-lg mb-[20px]" />
      <div className="absolute bottom-1 right-1">
        <button
          type="button"
          className="p-1 mr-1 bg-rose-50 rounded"
          onClick={() => {
            copyImageUrlClipBoard(image.urls.small);
          }}
        >
          <BsShare />
        </button>
        <button type="button" className="p-1 mr-1 bg-rose-50 rounded">
          <a href={`${image.links.download}&force=true`} title="선택 이미지 다운로드">
            <BsDownload />
          </a>
        </button>
        <button
          type="button"
          className="p-1 bg-rose-50 rounded"
          onClick={() => {
            openConfirmModal(image);
          }}
        >
          {heartClick ? <FcLike /> : <PiHeartLight />}
        </button>
      </div>
      {showModal && clipboardModal}
      {isModalOpen && (
        <Modal actionBar={favPicActionBar}>
          <h1>{modalContent}</h1>
        </Modal>
      )}
    </li>
  );
}

export default ImageCard;
