/* eslint-disable */


/*
  This is the code for the bookmarklet. It will make a request to the server at /findads
  and append the javascript to the current window open allowing us to find ads on page
*/

javascript: (function () {
    const js = document.createElement('script');
    js.setAttribute('src', 'http://localhost:3000/findads');
    document.body.appendChild(js);
 }());
