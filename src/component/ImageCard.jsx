import { useState, useEffect } from 'react';
import useFavPicListsContext from '../hooks/use-favPicLists-context';
import { PiHeartLight } from 'react-icons/pi';
import { FcLike } from 'react-icons/fc';
import { BsDownload, BsShare } from 'react-icons/bs';

function ImageCard({ image }) {
  const { imageLists, addFavPicLists, removeFavPicLists } = useFavPicListsContext();
  const [heartClick, setHeartClick] = useState(false);

  const editFavoritePicLists = (imageInfo) => {
    if (heartClick) {
      setHeartClick(!heartClick);
      removeFavPicLists(imageInfo);
    } else {
      setHeartClick(!heartClick);
      addFavPicLists(imageInfo);
    }
  };

  const copyImageUrlClipBoard = (url) => {
    navigator.clipboard.writeText(url);
  };

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
            editFavoritePicLists(image);
          }}
        >
          {heartClick ? <FcLike /> : <PiHeartLight />}
        </button>
      </div>
    </li>
  );
}

export default ImageCard;
