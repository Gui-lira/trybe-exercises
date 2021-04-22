const API_URL = 'https://icanhazdadjoke.com/';

const value = {
    'id': '7h3oGtrOfxc',
    'joke': 'Whiteboards ... are remarkable.',
    'status': 200
  }

const fetch = jest.fn(() =>
   Promise.resolve({
       json: () => 
        Promise.resolve(value)
   }));

const fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: 'application/json' }})
    .then(response => response.json())
    .then(data => data.joke);
};

module.exports = { fetchJoke }