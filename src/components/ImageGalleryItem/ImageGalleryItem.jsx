import { Item,Image } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ smallImage, tags, onClick }) => {
  return (
    <Item onClick={onClick}>
      <Image src={smallImage} alt={tags} />
    </Item>
  );
};
