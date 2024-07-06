import { useState, useEffect } from 'react';
import { PiHeartLight } from 'react-icons/pi';
import { FcLike } from 'react-icons/fc';
import { BsDownload, BsShare } from 'react-icons/bs';

function ImageCard({ image }) {
  const [heartClick, setHeartClick] = useState(false);

  const addFavoritePics = (imageInfo) => {
    if (heartClick) {
      setHeartClick(!heartClick);
      let existedFavPics = JSON.parse(localStorage.getItem('favPics'));

      if (existedFavPics) {
        let editedFavPics = existedFavPics.filter((pic) => pic.id !== imageInfo.id);
        localStorage.removeItem('favPics');
        localStorage.setItem('favPics', JSON.stringify([...editedFavPics]));
      }
    } else {
      setHeartClick(!heartClick);

      // 로컬 스토리지에서 기존의 이미지 배열 가져오기
      const existedImages = JSON.parse(localStorage.getItem('favPics')) || [];

      // 새 이미지 url을 배열에 추가하기
      const updatedImages = [...existedImages, imageInfo];

      // 업데이트 된 배열을 로컬스토리지에 저장
      localStorage.setItem('favPics', JSON.stringify(updatedImages));
    }
  };

  const copyImageUrlClipBoard = (url) => {
    navigator.clipboard.writeText(url);
  };

  useEffect(() => {
    const favPicsLists = JSON.parse(localStorage.getItem('favPics')) || [];

    if (favPicsLists.length > 0) {
      let matchPic = favPicsLists.find((pic) => {
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
            addFavoritePics(image);
          }}
        >
          {heartClick ? <FcLike /> : <PiHeartLight />}
        </button>
      </div>
    </li>
  );
}

export default ImageCard;
