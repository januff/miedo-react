import { useLayoutEffect } from 'react';

function useLockBodyScroll() {
  useLayoutEffect(() => {
   // Get original body overflow
   const originalStyle = window.getComputedStyle(document.getElementById('root')).overflow;  
   // Prevent scrolling on mount
   document.getElementById('root').style.overflow = 'hidden';
   // Re-enable scrolling when component unmounts
   return () => document.getElementById('root').style.overflow = originalStyle;
   }, []); // Empty array ensures effect is only run on mount and unmount
}

export default useLockBodyScroll;

