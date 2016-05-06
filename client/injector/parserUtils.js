/* eslint no-restricted-syntax: 0, guard-for-in: 0*/

/**
* Function to determine if page element contains an ad based off of filter passed through.
* @param {object} element - element from page with all pertinent information
* @param {string} filter - string of partial URL from common ad sources
* @param {object} adObj - the adObj which will be returned to server
* @param {string} type - type of element ('vid', or 'ifr'), determines where add is stored in adObj
* @returns {undefined} information is passed via pointer to adObj
**/
const filterCheck = (element, filter, adObj, type) => {
  if (element.src && element.src.includes(filter)) {
    adObj[type].push({
      src: element.src,
      height: element.height,
      width: element.width,
    });
  }
};

/**
* Function to parse through all iframes and videos on page.
* Look at filterCheck to see how it determines if elements are an ad.
* @param {array} filters - list of filters received from server
* @param {object} adObj - the adObj which will be returned to server
* @param {array} videos - video elements on the page
* @param {array} iframes - iframe elements on the page
* @returns {object} adObj - returns object with arrays of advertisements and url of page
**/
function parser(filters, adObj, videos, iframes) {
  filters.forEach(filter => {
    for (const i in videos) {
      filterCheck(videos[i], filter, adObj, 'vid');
    }
    for (const i in iframes) {
        filterCheck(iframes[i], filter, adObj, 'ifr');
    }
  });
  return adObj;
}

export default parser;
