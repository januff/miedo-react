import React from 'react';
import parse from 'html-react-parser';
import { useLockBodyScroll } from "../resources/util";

const Modal = ({ title, img, content, onClose }) => {
  // Call hook to lock body scroll
  useLockBodyScroll();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal panel">
        {parse(content.quote)}
      </div>
    </div>
  );
}

export default Modal