'use strict';

const dateOfBirthEl = document.querySelector('#date-of-birth');
const luckyNumberEl = document.querySelector('#lucky-number');
const luckBtn = document.querySelector('.btn');

const checkDobIsLucky = function () {
  const birthdate = dateOfBirthEl.value;
  const sum = calculateDobSum(birthdate);

  compareData(sum, luckyNumberEl.value);
};

const calculateDobSum = function (birthdate) {
  birthdate = birthdate.replaceAll('-', '');
  let totalSum = 0;
  for (let i = 0; i < birthdate.length; i++) {
    totalSum = totalSum + Number(birthdate[i]);
  }
  return totalSum;
};

const compareData = function (sum, luckyNumberEl) {
  if (sum % luckyNumberEl === 0) {
    document.querySelector('.output-message').textContent =
      '🥳 Hurray! your birthday is lucky 🥳';
  } else {
    document.querySelector('.output-message').textContent =
      ' 😯 Your birthday is not lucky 😯';
  }
};

// luckBtn.addEventListener('click', checkDobIsLucky);

luckBtn.addEventListener('click', function () {
  if (Number(dateOfBirthEl.value) == 0 || Number(luckyNumberEl.value) == 0) {
    document.querySelector('.output-message').textContent = 'Invalid input';
  } else {
    checkDobIsLucky();
  }
});
