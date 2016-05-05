import parser from './parserUtils';
import getFilters from './getFilters';

(function findAds() {
  const ads = {
    url: window.parent.location.href,
    img: [],
    vid: [],
    ifr: [],
  };

  const images = document.getElementsByTagName('img');
  const videos = document.getElementsByTagName('video');
  const iframes = document.getElementsByTagName('iframe');

  getFilters()
    .then(filters => {
      parser(filters, ads, images, videos, iframes);
    });
}());
