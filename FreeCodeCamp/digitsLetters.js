function digitsOrLetters(str) {
  let countLetter = 0,
    countDigit = 0;
  const digit = [],
    letter = [];
  const data = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (data[i].charCodeAt(0) >= 48 && data[i].charCodeAt(0) <= 57) {
      countDigit++;
      digit.push(data[i]);
    } else if (data[i].charCodeAt(0) >= 97 && data[i].charCodeAt(0) <= 122) {
      countLetter++;
      letter.push(data[i]);
    }
  }

  let result = "";

  if (countDigit > countLetter) {
    return (result = "digits");
  } else if (countLetter > countDigit) {
    return (result = "letter");
  } else {
    return (result = "tie");
  }
}

const value = digitsOrLetters("a1b2c3d");
console.log(value);

//min letter 48
//max letter 57

//min digit 97
//max digit 122
