import React from 'react';
import { useLockBodyScroll } from "../resources/util";

const Modal = ({ title, img, content, onClose }) => {
  // Call hook to lock body scroll
  useLockBodyScroll();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal panel">
        <p>I hate to say that, Senator, but I think Hitler was a beginner compared to the comic-book industry. They get the children much younger. They teach them race hatred at the age of 4 before they can read. Let me give you an example of a comic book which I think is on the stand right now. It may have disappeared the last few days. You know at the present moment New York City and other cities have a great social problem in integrating immigrating Puerto Ricans. It is very important to establish peace in these neighborhoods where friction may arise, or has a risen. This particular comic book that I am referring to now has a story in which a derogatory term for Puerto Ricans, which I will not repeat here, but which is a common derogatory term, is repeated 12 times in one story. This greasy so and so, this dirty so and so. It is pointed out that a Spanish Catholic family moved into this neighborhood ─ utterly unnecessary. What is the point of the story? The point of the story is that then somebody gets beaten to death. The only error is that the man who must get beaten to death is not a man; it is a girl.</p>
      </div>
    </div>
  );
}

export default Modal