const postAds = adObj => (
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://localhost:5000/postads');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => resolve(xhr.status);
    xhr.send(JSON.stringify(adObj));
  })
);

export default postAds;
