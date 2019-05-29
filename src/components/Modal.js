import React from 'react';
import { useLockBodyScroll } from "../resources/util/";

const Modal = ({ title, img, content, onClose }) => {
  // Call hook to lock body scroll
  useLockBodyScroll();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <img alt="Editora Sol" src={img} />
        <p>Terra incognita even to comics cognoscenti is the global corpus of translated Americana, published semi-contemporaneously by bootleggers—and occasionally genuine licensees—on seemingly every continent. (And circulating only recently by way of far-flung eBay clones and Facebook Marketplaces.)</p>
        <p>One of the most prolific such publishers was Mexico City's Editora Sol, who in the early ’60s pushed unauthorized editions of many macabre and controversial EC classics. Presented here are panels from two such translations, Feldstein and Wood's race drama “The Whipping” and Krigstein's “You, Murderer,” both borrowed from the same 1954 issue of <i>Shock Illustrated</i>.</p>
      </div>
    </div>
  );
}

export default Modal