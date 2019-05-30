import React from 'react';
import { useLockBodyScroll } from "../resources/util/";

const Modal = ({ title, img, content, onClose }) => {
  // Call hook to lock body scroll
  useLockBodyScroll();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <p>For at least one new species of comic book fandom, Facebook's pivot to Groups may have triggered an uncanny origin story. Leveraging the platform's global creep and eager auto-translation, a cosmopolitan cohort is exploiting Facebook's Groups and Marketplace features to discover an archival multi-verse: American comics of every subgenre in bootleg translation, a stochastic phenomenon spanning every era of comic book publishing, and extending from Beirut to Buenos Aires.</p>
        <p>One of the most prolific such intermediaries was Mexico City's Editora Sol, who in the early ’60s released unauthorized translations of Lafayette Street's notorious EC Comics. Presented here are panels from specimens, Feldstein and Wood's race melodrama “The Whipping” (as “El Castigo”) and Krigstein's Caligari-esque “You, Murderer” (as “Asasino”), both borrowed from the same 1954 issue of <i>Shock Illustrated</i>.</p>
      </div>
    </div>
  );
}

export default Modal