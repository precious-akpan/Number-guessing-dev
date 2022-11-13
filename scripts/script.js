"use strict";

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct guess!!!'
console.log(document.querySelector('.number').textContent);
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '1';

console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess'));

const checkButton = document.querySelector('.check');

checkButton.addEventListener('click', function (event) {
    console.log(document.querySelector('.guess').value);

});