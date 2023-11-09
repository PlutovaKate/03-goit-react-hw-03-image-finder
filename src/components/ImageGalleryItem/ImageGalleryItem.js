import { Component } from 'react';
import { ImageGalleryItemLi } from './ImageGalleryItem.styled';
import { ImageGalleryItemImage } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  render() {
    const { smallImage, largeImage, tags } = this.props;
    return (
      <ImageGalleryItemLi>
        <ImageGalleryItemImage src={smallImage} alt={tags} />
      </ImageGalleryItemLi>
    );
  }
}

export default ImageGalleryItem;
