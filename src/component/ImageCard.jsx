import { useState } from 'react';

function ImageCard({ image }) {
  const [heartClick, setHeartClick] = useState(false);

  const addFavoritePics = (imageInfo) => {
    setHeartClick(!heartClick);

    // 로컬 스토리지에서 기존의 이미지 배열 가져오기
    const existedImages = JSON.parse(localStorage.getItem('favPics')) || [];

    // 새 이미지 url을 배열에 추가하기
    const updatedImages = [...existedImages, imageInfo];

    // 업데이트 된 배열을 로컬스토리지에 저장
    localStorage.setItem('favPics', JSON.stringify(updatedImages));
  };

  return (
    <li className="relative">
      <img src={image.urls.small} alt={image.alt_description} className="rounded-lg mb-[20px]" />
      <div className="absolute bottom-1 right-1">
        <button type="button" className="p-1 mr-1 bg-white rounded-full">
          <a href={`${image.links.download}&force=true`} title="선택 이미지 다운로드">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </a>
        </button>
        <button
          type="button"
          className="p-1 bg-white rounded-full"
          onClick={() => {
            addFavoritePics(image);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={heartClick ? 'pink' : 'white'}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>
    </li>
  );
}

export default ImageCard;
