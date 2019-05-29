import React from 'react';
import { useLockBodyScroll } from "../resources/util/";

const Modal = ({ title, img, content, onClose }) => {
  // Call hook to lock body scroll
  useLockBodyScroll();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <img alt="Editora Sol" 
          src={img} />
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Modal