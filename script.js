"use strict";

const formTo = document.querySelector('#formTo');
const promptTo = document.querySelector('#promptTo');
const startTimers = document.getElementById('startTimers');
const h2s = document.querySelector('h2');
const p = document.querySelector('p');


function removeElem() {
    formTo.classList.remove('none-display');
    promptTo.classList.remove('none-display');
    h2s.classList.remove('none-display');
    p.classList.remove('none-display');
}

let startToTimer;
let i = 300;


startTimers.addEventListener('click', function func() {
    removeElem();

    startToTimer = setInterval(function () {
        window.localStorage.setItem('Seconds', i--);
        startTimers.innerHTML = window.localStorage.getItem('Seconds');

        if (i < 0) {
            clearInterval(startToTimer);
            startTimers.innerHTML = 'Время вышло!';
            startTimers.style.backgroundColor = 'red';
            formTo.disabled = true;
            promptTo.disabled = true;
        }
    }, 1000);

    this.removeEventListener('click', func);
});


formTo.addEventListener('click', function () {
    let answer = prompt('введите ответ на загадку');

    if ((answer == 'Любопытство' || answer == 'любопытство') || (answer == 'Любопытство ' || answer == 'любопытство ')) {
        window.location.href = '2.html';
    } else {
        alert('Неверно!');
    }
});

promptTo.addEventListener('click', function () {
    alert('Это ROT0 с словом в начале ключа шифрования');
});


document.addEventListener('DOMContentLoaded', function () {
    if (!window.localStorage.getItem('Seconds')) {
        window.localStorage.setItem('Seconds', i);
    }

    i = window.localStorage.getItem('Seconds');
});


