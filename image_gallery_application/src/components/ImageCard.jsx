import React from "react";

function ImageCard({ src, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={src} alt="gallery" />
    </div>
  );
}

export default ImageCard;