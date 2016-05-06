// Preforms XMLHttpRequest from server to get filters
const getFilters = () => (
   new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://localhost:3000/adfilters');
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 400) {
        res(JSON.parse(xhr.response));
      } else {
        const err = new Error(`Error receiving ad filters, ${xhr.status}`);
        rej(err);
      }
    };
    xhr.send();
  })
);

export default getFilters;
