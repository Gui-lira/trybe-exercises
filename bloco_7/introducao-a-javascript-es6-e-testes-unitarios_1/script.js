let clickCount = 0;

const text = document.querySelector('.text');

const button = document.querySelector('.button');
button.addEventListener('click', () => {
    clickCount += 1;
    text.innerText = clickCount;
});



