import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { Gallery } from "./ImageGallery.styled";

export const ImageGallery = ({ images, onSelect }) => {
  return (
    <Gallery>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            smallImage={webformatURL}
            tags={tags}
            onClick={() => onSelect(largeImageURL)}
          />
        );
      })}
    </Gallery>
  );
};