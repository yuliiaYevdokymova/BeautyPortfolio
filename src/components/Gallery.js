import React from "react";
import ImageGallery from "react-image-gallery";
import "../styles/Gallery.css";
import "../styles/image-gallery.scss";

const Gallery = ({ images }) => {
  return (   
      <ImageGallery
        items={images}
        showPlayButton={false}
        showThumbnails={false}
        showBullets={true}
      />   
  );
};

export default Gallery;
