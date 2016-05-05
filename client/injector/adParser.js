import parser from './parserUtils';
import getFilters from './getFilters';

(function findAds() {
  // It is safe to skip parsing images as it will increase speed of parsing and the fact that
  // most ads are placed into an iframe to prevent external JS from injecting onto main page
  const ads = {
    url: window.parent.location.href,
    vid: [],
    ifr: [],
  };

  const videos = document.getElementsByTagName('video');
  const iframes = document.getElementsByTagName('iframe');

  getFilters()
    .then(filters => {
      parser(filters, ads, videos, iframes);
    });
}());
