"use strict";

let secretNumber = getSecretNumber();


const checkButton = document.querySelector('.check');

let score = 20
const body = document.querySelector('body');
let highScore = 0;

let guess = '';

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

function displayScore(score) {
    document.querySelector('.score').textContent = score;
}

function wrongGuess() {
    displayMessage((guess > secretNumber ? '📈 Too high!!' : '📉 Too low!!'));
    score--;
    displayScore(score)
}

checkButton.addEventListener('click', function () {
    guess = Number(document.querySelector('.guess').value);
// if there is no number entered
    if (!guess) {
        displayMessage('⛔ No number!')
    } /* if the player wins*/
    else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        body.style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem'
        displayMessage('🏆 Correct Number!!')
        if (highScore < score) {
            document.querySelector('.highScore').textContent = score;
        }
    } /*if the guess is greater than the random number*/
    else if (score > 1) {
        wrongGuess();

    } else {
        displayMessage('❌ You Lost')
        displayScore(0)
    }
});

const againButton = document.querySelector('.again');

function getSecretNumber() {
    return Math.floor(Math.random() * 20) + 1;
}

againButton.addEventListener('click', function () {
    secretNumber = getSecretNumber();
    score = 20;
    displayMessage('🤏 Start guessing...')
    displayScore(score)
    document.querySelector('.guess').value = ''
    document.querySelector('.number').textContent = '?'
    document.querySelector('.number').style.width = '15rem'
    body.style.background = 'black'
});