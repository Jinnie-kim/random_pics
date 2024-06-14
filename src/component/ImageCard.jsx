function ImageCard({ image }) {
  return (
    <li>
      <img src={image.urls.small} alt={image.alt_description} className="rounded-lg mb-[20px]" />
    </li>
  );
}

export default ImageCard;
