"use strict";

let secretNumber = Math.floor(Math.random() * 20) + 1;


const checkButton = document.querySelector('.check');

let score = 20
const body = document.querySelector('body');

checkButton.addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
// if there is no number entered
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!'
    } /* if the player wins*/
    else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        body.style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.message').textContent = '🏆 Correct Number!!'
    } /*if the guess is greater than the random number*/
    else if (score > 1) {
        if (guess < secretNumber) {
            document.querySelector('.message').textContent = '📈 Too Low!!'
            score--;
            document.querySelector('.score').textContent = score;


        } else if (guess > secretNumber) {
            document.querySelector('.message').textContent = '📉 Too High!!'
            score--;
            document.querySelector('.score').textContent = score;
        }
    } else {
        document.querySelector('.message').textContent = '❌ You Lost'
        document.querySelector('.score').textContent = 0;
    }
});

const againButton = document.querySelector('.again');

againButton.addEventListener('click', function () {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.message').textContent = '🤏 Start guessing...'
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = ''
    document.querySelector('.number').textContent = '?'
    document.querySelector('.number').style.width = '15rem'
    body.style.background = 'black'
});