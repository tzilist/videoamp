import parser from './parserUtils';
import getFilters from './getFilters';
import adPost from './adPost';

(function findAds() {
  // It is safe to skip parsing images as it will increase speed of parsing and the fact that
  // most ads are placed into an iframe to prevent external JS from injecting onto main page
  const ads = {
    url: window.parent.location.href,
    vid: [],
    ifr: [],
  };
  // finds all videos and iframes on the page
  const videos = document.getElementsByTagName('video');
  const iframes = document.getElementsByTagName('iframe');

  // preforms GET request for filters from server, parses videos/iframes through filters
  // and then posts ads to server.
  getFilters()
    .then(filters => {
      parser(filters, ads, videos, iframes);
    })
    .then(() => {
      adPost(ads);
    });
}());
