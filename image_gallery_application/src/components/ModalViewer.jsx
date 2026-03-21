import React from "react";

function ModalViewer({ image, onClose, onNext, onPrev }) {
  return (
    <div className="modal">
      <span className="close" onClick={onClose}>×</span>

      <button className="nav left" onClick={onPrev}>❮</button>

      <img className="modal-img" src={image} alt="large view" />

      <button className="nav right" onClick={onNext}>❯</button>
    </div>
  );
}

export default ModalViewer;