/* eslint-disable */


/*
  This is the code for the bookmarklet. It will make a request to the server at /findads
  and append the javascript to the current window open allowing us to find ads on page.
  This can be linked via an anchor tag with href set to this code exactly.
  Please note: use the minified/es5 transpiled version of this in dist/client/bookmarklet.js
*/

javascript: (function () {
    const js = document.createElement('script');
    js.setAttribute('src', 'https://localhost:3000/adparse');
    document.body.appendChild(js);
 }());
