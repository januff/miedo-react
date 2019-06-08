import React from 'react';
import { useLockBodyScroll } from "../resources/util";

const Modal = ({ title, img, content, onClose }) => {
  // Call hook to lock body scroll
  useLockBodyScroll();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal panel">
        <p>I hate to say that, Senator, but I think <em>Hitler was a beginner</em> compared to the comic-book industry. They get the children much younger. They teach them race hatred at the age of 4 <em>before they can read.</em> Let me give you an example of a comic book which I think is on the stand right now. It may have disappeared the last few days. You know at the present moment New York City and other cities have a great social problem in integrating <em>immigrating Puerto Ricans.</em> It is very important to establish peace in these neighborhoods where friction may arise, or has arisen. This particular comic book that I am referring to now has a story in which <em>a derogatory term</em> for Puerto Ricans, which I will not repeat here, but which is a common derogatory term, is repeated 12 times in one story. <em>This greasy so and so, this dirty so and so.</em> It is pointed out that a Spanish Catholic family moved into this neighborhood ─ utterly unnecessary. <em>What is the point of the story?</em> The point of the story is that then <em>somebody gets beaten to death.</em> The only error is that the man who must get beaten to death is not a man; <em>it is a girl.</em></p>
      </div>
    </div>
  );
}

export default Modal