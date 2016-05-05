const filterCheck = (element, filter, adObj, type) => {
  if (element.src.includes(filter)) {
    console.log(element);
    adObj[type].push({
      src: element.src,
      height: element.height,
      width: element.width,
    });
  }
};

function parser(filters, adObj, images, videos, iframes) {
  console.log('start here');
  filters.forEach(filter => {
    console.log('here');
    // images.forEach(image => {
    //
    //   filterCheck(image, filter, adObj, 'img');
    // });

  //   // videos.forEach(video => {
  //   //   filterCheck(video, filter, adObj, 'vid');
  //   // });
  //   // iframes.forEach(iframe => {
  //   //   filterCheck(iframe, filter, adObj, 'ifr');
  //   // });
  });
  console.log('done');
};

export default parser;
