// TODO: add your solutions here!

// 1)

function combineWords(word1, word2) {
  finalWord = word1 + word2;
  return finalWord;
}

var result = combineWords('mul', 'berry');
console.log(result);



// 2)

function repeatPhrase(phrase, n) {
  for (i = 0; i < n; i++) {
    console.log(phrase);
  }
}

repeatPhrase('Hello', 5);


// 3)

function toTheNthPower(number, power) {
  powerAnswer = (Math.pow(number, power));
  return powerAnswer;
}

var result = toTheNthPower(4, 5);
console.log(result);


// 4)

function areaOfACircle(radius) {
  area = Math.PI * Math.pow(radius, 2);
  return area;
}

var result = areaOfACircle(2);
console.log(result);


// 5)

function pythagoreanTheorem(a, b) {
  pythTheoAnswer = Math.pow(a, 2) + Math.pow(b, 2);
  return pythTheoAnswer;
}

var result = pythagoreanTheorem(3, 4);
console.log(result);


// 6)

function isXEvenlyDivisibleByY(x, y) {
  if (x % y === 0); {
    return true;
  } else {
    return false;
   }
  }
}

var result = isXEvenlyDivisibleByY(99, 3);
console.log(result);



// 7)

function countVowels(word) {
  vowels = ['a', 'e', 'i', 'o', 'u'];
  count = 0;
  splitWord = word.split('');
  for(var i=0; i<split.length; i++) {
    if splitWord[i] in vowels {
      count ++;
      return count;
    }

  }
}

var result = countVowels("stealing");
console.log(result);






