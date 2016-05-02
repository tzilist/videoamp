import { parser } from './parserUtils';

(function findAds() {
  const images = document.getElementsByTagName('img');
  const videos = document.getElementsByTagName('video');
  const iframes = document.getElementsByTagName('iframe');
  parser(images);
}());
