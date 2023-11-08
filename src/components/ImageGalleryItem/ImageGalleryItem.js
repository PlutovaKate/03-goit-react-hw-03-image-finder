import { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    const { smallImage, largeImage, tags } = this.props;
    return (
      <li>
        <img src={smallImage} alt={tags} />
      </li>
    );
  }
}

export default ImageGalleryItem;
