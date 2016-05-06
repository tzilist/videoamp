/**
* Sends ads to server via XMLHttpRequest
* @param {object} adObj - Object after videos/iframes have been parsed, sent to server
**/

const postAds = adObj => (
  new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://localhost:3000/postads');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => res(xhr.status);
    xhr.send(JSON.stringify(adObj));
  })
);

export default postAds;
