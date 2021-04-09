import React from 'react'

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import './Gallery.css';
const Gallery = (props) => {
    const imageList = props?.images?.map( (image) => {
        return {
            original: image,
            thumbnail: image,
        };
     });
    return (
      <div>
         <ImageGallery items={imageList} title={imageList} showBullets showThumbnails={false}/> 
      </div>
    );
};
export default Gallery;
