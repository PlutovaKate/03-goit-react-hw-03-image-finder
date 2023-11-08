import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = () => {
  return (
    <ul>
      <li>Image</li>
    </ul>
  );
};

// const ImageGallery = ({ images }) => {
//   return (
//     <ul>
//       {images.map(({ id, webformatURL, largeImageURL, tags }) => {
//         return (
//           <ImageGalleryItem
//             key={id}
//             smallImage={webformatURL}
//             largeImage={largeImageURL}
//             alt={tags}
//           />
//         );
//       })}
//       <li>Image</li>
//     </ul>
//   );
// };

export default ImageGallery;
