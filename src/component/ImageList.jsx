import ImageCard from './ImageCard';

function ImageList({ imageLists }) {
  const renderedImages = imageLists.map((image) => {
    return <ImageCard image={image} key={image.id} />;
  });

  return <ul className="mt-[65px] columns-[200px]">{renderedImages}</ul>;
}

export default ImageList;
