import React from 'react';

var defaultState = { image: undefined, status: 'loading' };

const useImage = (url, crossOrigin) => {
  var res = React.useState(defaultState);
  var image = res[0].image;
  var status = res[0].status;

  var setState = res[1];

  React.useEffect(
    function() {
      if (!url) return;
      const img = document.createElement('img');

      function onload() {
        setState({ image: img, status: 'loaded' });
      }

      function onerror() {
        setState({ image: undefined, status: 'failed' });
      }

      img.addEventListener('load', onload);
      img.addEventListener('error', onerror);
      crossOrigin && (img.crossOrigin = crossOrigin);
      img.src = url;

      return function cleanup() {
        img.removeEventListener('load', onload);
        img.removeEventListener('error', onerror);
      };
    },
    [url, crossOrigin, setState]
  );

  // return array because it it better to use in case of several useImage hooks
  // const [background, backgroundStatus] = useImage(url1);
  // const [patter] = useImage(url2);
  return [image, status];
};

export default useImage