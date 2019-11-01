const ImageLoader = (panels) => {
  const loadTest = new Promise((resolve, reject) => {
    // eslint-disable-next-line
    panels.map(imageSet => {
      // eslint-disable-next-line
      for (var image of imageSet){
        // loadImage(image);
      }
    })
    resolve(panels);
  });
  return loadTest
}

export default ImageLoader

// function loadImage(url) {
//   const loaded = useImageData(url);
//   console.log(loaded);
//   return loaded;
// }
