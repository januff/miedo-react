const ImageLoader = (panels) => {
  const loadTest = new Promise((resolve, reject) => {
    console.table(panels)
    panels.map(imageSet => {
      for (var image of imageSet){
        // loadImage(image);
        console.log(image)
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
