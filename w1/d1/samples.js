const myFunc = (text) => {
  console.log('This is just an example! ' + text);
};

const add = (num1, num2) => {
  return num1 + num2;
};

function thisisfunc() {}

const subtract = (num1, num2) => {
  return num2 - num1;
};

const reverseString = (text) => {
  return text.split(' ').reverse().join(' ');
};

const reverseInternalString = (textStr) => {
  return textStr
    .split(' ')
    .map((data) => data.split('').reverse().join(''))
    .reverse()
    .join(' ');
};

module.exports = {
  myFunc,
  add,
  subtract,
  reverseString,
  reverseInternalString,
};
