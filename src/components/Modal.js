import React from 'react';
import { useLockBodyScroll } from "../resources/util/";

const Modal = ({ title, img, content, onClose }) => {
  // Call hook to lock body scroll
  useLockBodyScroll();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <p>For at least one new species of comic book fandom, Facebook's pivot to Groups may have spun a classic origin. Leveraging the platform's global sprawl and cosmopolitan AI, an obsessive collector cohort has been exploiting the site's recently emphasized Groups and Marketplace tabs to surface a surreal archival multi-verse: American comics in bootleg translation, a stochastic impulse which appears to have spanned decades and hemispheres, from locales as far-flung as Beirut, Buenos Aires, and Jakarta.</p>
        <p>One of the most prolific outposts was Mexico City's Editora Sol, who in the early ’60s published unauthorized editions of Lafayette Street's EC Comics, then barely five years undead. Presented here are panels from two recently exhumed translations, Feldstein and Wood's race melodrama “The Whipping” (as “El Castigo”) and Krigstein's hallucinatory “You, Murderer” (as “Asesino.”) Both are swiped from the same issue of <i>Shock SuspenStories</i> famously defended by publisher Bill Gaines before Senate Subcommittee in 1954.</p>
      </div>
    </div>
  );
}

export default Modal