import ImageCard from './ImageCard';

function ImageList({ imageLists }) {
  const renderedImages = imageLists.map((image) => {
    return <ImageCard image={image} key={image.id} />;
  });

  return <div>{renderedImages}</div>;
}

export default ImageList;
