import React from 'react';
import { useLockBodyScroll } from "../resources/util/";

const Quotes = ({ title, img, content, onClose }) => {
  // Call hook to lock body scroll
  useLockBodyScroll();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <p>I hate to say that, Senator, but I think Hitler was a beginner compared to the comic-book industry. They get the children much younger. They teach them race hatred at the age of 4 before they can read. Let me give you an example of a comic book which I think is on the stand right now. It may have disappeared the last few days. You know at the present moment New York City and other cities have a great social problem in integrating immigrating Puerto Ricans. It is very important to establish peace in these neighborhoods where friction may arise, or has a risen. This particular comic book that I am referring to now has a story in which a derogatory term for Puerto Ricans, which I will not repeat here, but which is a common derogatory term, is repeated 12 times in one story. This greasy so and so, this dirty so and so. It is pointed out that a Spanish Catholic family moved into this neighborhood ─ utterly unnecessary. What is the point of the story? The point of the story is that then somebody gets beaten to death. The only error is that the man who must get beaten to death is not a man; it is a girl.</p>
      </div>
    </div>
  );
}

export default Modal

// Senate Subcommittee on Juvenile Delinquency: Wertham Versus Gaines On Decency Standards
// https://www.wnyc.org/story/215975-senate-subcommittee-juvenile-delinquency-ii/

// 1:19:42 Gaines
// http://www.thecomicbooks.com/gaines.html

// I would like to discuss, if you bear with me a moment more, something which Dr. Wertham provoked me into. Dr. Wertham, I am happy to say, I have just caught in a half-truth, and I am very indignant about it. He said there is a magazine now on the stands preaching racial intolerance. The magazine he is referring to is my magazine. What he said, as much as he said, was true. There do appear in this magazine such materials as "Spik," "Dirty Mexican," but Dr. Wertham did not tell you what the plot of the story was.

// This is one of a series of stories designed to show the evils of race prejudice and mob violence, in this case against Mexican Catholics.

// Previous stories in this same magazine have dealt with antisemitism, and anti-Negro feelings, evils of dope addiction and development of juvenile delinquents.

// This is one of the most brilliantly written stories that I have ever had the pleasure to publish. I was very proud of it, and to find it being used in such a nefarious way made me quite angry.

// I am sure Dr. Wertham can read, and he must have read the story, to have counted what he said he counted.


// - - -


// 1:04:10 Wertham
// http://www.thecomicbooks.com/wertham.html

// Senator KEFAUVER. Would you liken this situation you talk about, showing the same thing over and over again until they finally believed it, to what we heard about during the last war of Hitler's theory the story over and over again?

// The CHAIRMAN. The "big lie" technique?

// Dr. WERTHAM. Well, I hate to say that, Senator, but I think Hitler was a beginner compared to the comic-book industry. They get the children much younger. They teach them race hatred at the age of 4 before they can read.

// Let me give you an example of a comic book which I think is on the stand right now. It may have disappeared the last few days.

// You know at the present moment New York City and other cities have a great social problem in integrating immigrating Puerto Ricans. It is very important to establish peace in these neighborhoods where friction may arise, or has a risen.

// This particular comic book that I am referring to now has a story in which a derogatory term for Puerto Ricans, which I will not repeat here, but which is a common derogatory term, is repeated 12 times in one story. This greasy so and so, this dirty so and so. It is pointed out that a Spanish Catholic family moved into this neighborhood ─ utterly unnecessary.

// What is the point of the story? The point of the story is that then somebody gets beaten to death. The only error is that the man who must get beaten to death is not a man; it is a girl.

// Senator KEFAUVER. I think we ought to know the name of the comic book.

// Dr. WERT1IAM. I shall be glad to give it to your counsel.

// Senator KEFAUVER. Can you tell us?

// Dr. WERTHAM. I don't have it in my head.