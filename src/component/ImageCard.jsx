import { useState, useEffect } from 'react';
import useFavPicListsContext from '../hooks/use-favPicLists-context';
import useNavigationContext from '../hooks/use-navigation-context';
import Modal from './Modal';
import Button from './Button';
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
            <Button text onClick={handleYes}>
                예
            </Button>
            <Button text onClick={handleNo}>
                아니오
            </Button>
        </div>
    );

    const openConfirmModal = async (imageInfo) => {
        const result = await editFavoritePicLists(imageInfo);
        if (result) {
            removeFavPicLists(imageInfo);
            setHeartClick(false);
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
            <Button onClick={handleModalClose} text className="mx-auto">
                확인
            </Button>
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
                <Button
                    icon
                    onClick={() => {
                        copyImageUrlClipBoard(image.urls.small);
                    }}
                >
                    <BsShare />
                </Button>
                <Button icon>
                    <a href={`${image.links.download}&force=true`} title="선택 이미지 다운로드">
                        <BsDownload />
                    </a>
                </Button>
                <Button
                    icon
                    onClick={() => {
                        openConfirmModal(image);
                    }}
                >
                    {heartClick ? <FcLike /> : <PiHeartLight />}
                </Button>
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
