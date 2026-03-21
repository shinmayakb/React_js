import React from "react";
import ImageCard from "./ImageCard";

function Gallery({ images, onImageClick }) {
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <ImageCard
          key={index}
          src={img}
          onClick={() => onImageClick(index)}
        />
      ))}
    </div>
  );
}

export default Gallery;