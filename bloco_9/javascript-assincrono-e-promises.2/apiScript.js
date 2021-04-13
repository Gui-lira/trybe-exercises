// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

let json

const putJoke = (arr) => {
    const h1 = document.createElement('h1');
    document.body.appendChild(h1);
    h1.innerText = arr;
}

const fetchJoke = () => {
  const obj = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, obj)
  .then((data) => data.json()
//   .then((data) => console.log(data))
  .then((data) => putJoke(data.joke)));
};


window.onload = () => fetchJoke();