const numbers = [3, 3, 1, 1, 9, 6, 7, 8, 7, 5, 9, 8, 5, 6];

function pairs(numbers) {
  let newA = [];
  l = numbers.length;
  for (let i = 0; i < l; i++)
    for (let j = i + 1; j < l; j++)
      if (numbers[i] === numbers[j]) {
        newA.push(numbers[i], numbers[j]);
      }
  if (newA.length === numbers.length) {
    console.log("true");
  } else {
    console.log("false");
  }
  console.log(newA);
  console.log(numbers);
}

pairs(numbers);

// if two lowest added together equals highest
//A.sort(function(b, a){return b-a});
const A = [
  [1, 2, 3],
  [4, 5, 6],
  [11, 5, 6],
];

function arrayEquation(A) {
  for (let i = 0; i < A.length; i++) {
    let sums = A[i][0] + A[i][1] + A[i][2];
    let highestNumber = Math.max(...A[i]);
    let result = sums - highestNumber;
    if (result === highestNumber) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
arrayEquation(A);

// find words that start with S and all the strings
const sAndString = [
  1,
  2,
  3,
  4,
  5,
  6,
  11,
  5,
  6,
  "stripe",
  "hi",
  "shape",
  "still",
];

newS = [];
newString = [];

function startsWithSAndArray(sAndString) {
  for (let i = 0; i < sAndString.length; i++) {
    if (sAndString[i][0] === "s") {
      newS.push(sAndString[i]);
    }
    {
      if (typeof sAndString[i] === "string") {
        newString.push(sAndString[i]);
      }
    }
  }
}
startsWithSAndArray(sAndString);
console.log(newS);
console.log(newString);

//capitalizeWord
function capitalizeWord(woord) {
  return woord[0].toUpperCase() + woord.slice(1);
}

//likes challenge
// ``````BACK TICKS!!!!

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    let other = names.length - 2;
    return `${names[0]}, ${names[1]} and ${other} others like this`;
  }
}

//number position of alphabet
function position(letter) {
  //Write your own Code!
  let letters = "abcdefghijklmnopqrstuvwxyz";
  return "Position of alphabet: " + (letters.indexOf(letter) + 1);
  // let splitLetters = letters.split();
  //for (let i=0, i<splitLetters.length, i++);
  //if letter === splitLetters[i] {
  //return "Position of alphabet:" splitLetters.indexOf(letter)+1}
}

//if value is NaN
// const isReallyNaN = (val) => {
//     if (val === undefined)
//       {return false}
//    else if (isNaN(val))
//     {return true}
//     else return false;
//   };
const isReallyNaN = (val) => Number.isNaN(val);

//double array numbers
//  xarr = []
function maps(xp) {
  let dubx = Array.from(xp, (y) => y * 2);
  return dubx;
  //    for (let i = 0; i < x.length; i++)
  //    {let dubl=x[i];
  //     let dub = dubl*2;
  //     xarr.push(dub)}
  //    return xarr
}
function maps2(x2) {
  return x2.map((n) => n * 2);
}

//which quater of the year is the month
//Math.ceil = rounds rumber upwards to whole number
const quarterOf = (month) => {
  return Math.ceil(month / 3);
};

//find all numbers from array
function filter_list(lc) {
  // Return a new array with the strings filtered out
  let lfilter = [];
  for (let i = 0; i < lc.length; i++)
    //   if (lc[i] !== isNaN)
    if (typeof lc[i] === "number") {
      lfilter.push(lc[i]);
    }
  return lfilter;
}

//find next square size
function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let root = Math.sqrt(sq);
  let rootx = root + 1;
  let nxtBx = rootx * rootx;
  if (Number.isInteger(nxtBx)) {
    return nxtBx;
  } else return -1;
}

//Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers) {
  let squared = [];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    squared.push(numbers[i] * numbers[i]);
    sum += squared[i];
  }
  return sum;
}

//remove all white space in string/array
function noWhiteSpace(wsa) {
  return wsa.replace(/\s/g, "");
}

//sum of all positive numbers
function positiveSum(arrnu) {
  let sum = 0;
  for (let i = 0; i < arrnu.length; i++)
    if (arrnu[i] >= 0) {
      sum += arrnu[i];
    }
  return sum;
}

// remove all numbers that are the same : arrayDiff([1,2,2,2,3],[2]) == [1,3]
// using .includes instead of ===
function arrayDiff(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++)
    if (!b.includes(a[i])) {
      result.push(a[i]);
    }
  return result;
}

//get middle item/items if 2
function getMiddle(s) {
  let middle = s.length / 2;
  let higher = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    return s[middle - 1] + s[middle];
  } else return s[higher];
}

//if bonus is true, then multiply salary by 10
function bonusTime(salary, bonus) {
  let x10 = salary * 10;
  if (bonus === true) {
    return `£${x10}`;
  } else return `£${salary}`;
}

//add numbers in array together - even string numbers - (+)Plus sign changes string to number
// can also use number(x[i]), but I used +(x[i]) - parseInt is when there are letter after the number
function sumMix(x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) sum += +x[i];
  return sum;
  //   let num = []
  //   let stringnum = []
  //   let numbers =  parseInt(stringnum)
  //   let ans = num + numbers
  //   let sum = 0
  //   for (let i=0;i<x.length;i++)
  //     if (typeof x[i] === 'number')
  //       {num.push(x[i])}
  //   if (typeof x[i] === 'string')
  //   {stringnum.push(parseInt(x[i]))}
  //   return sum += ans
}

//return all multiplication(answers) of 'x' up to 'n'
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) z.push(x * i);
  return z;
}

//km per hour and returns it in cm per second
function cockroachSpeed(s) {
  let cps = s * 27.7777777778;
  return Math.floor(cps);
}

//average score better than yours
function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  for (let i = 0; i < classPoints.length; i++) sum += classPoints[i];
  let average = sum / classPoints.length;
  if (average < yourPoints) {
    return true;
  } else return false;
}

// using functions in string
function derive(coefficient, exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`;
}

//depends on number of good or bad in array
function well(x) {
  let good = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") {
      good.push(x[i]);
    }
  }
  if (good.length > 2) {
    return "I smell a series!";
  } else if (good.length > 0) {
    return "Publish!";
  } else return "Fail!";
}

//number to negative
function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else return num;
}

//flip single word - (flip returns pilp)
function solution(str) {
  let spl = str.split("");
  let flp = spl.reverse();
  return flp.join("");
}
function solution(str) {
  return str.split("").reverse().join("");
}

// invert case of letters in word
String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join("");
};

// seperate and reverse numbers
//first turn to string, the split and reverse, then turn back to number
function digitize(n) {
  return String(n).split("").reverse().map(Number);
}

// merge array without duplicates and then sort in order
function mergeArrays(arr1, arr2) {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr3.indexOf(arr1[i]) == -1) arr3.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr3.indexOf(arr2[i]) == -1) arr3.push(arr2[i]);
  }
  return arr3.sort((a, b) => a - b);
}
function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)));
}
//same

//sort array in order, then add 3 *** between each letter of the first word
let twoSort = (s) =>
  s
    .sort((a, b) => (a < b ? -1 : 1))[0]
    .split("")
    .join("***");

const twoSort = (s) => [...s.sort()[0]].join("***"); //doesnt require calculations

function twoSort(s) {
  return s.sort()[0].split("").join("***");
}

// return the (num) amount of sheep - "1 sheep...2 sheep...3 sheep..."
// learning to use for use in a different way
var countSheep = function (num) {
  let ans = "";
  for (let i = 1; i <= num; i++) {
    ans += i + " sheep...";
  }
  return ans;
};

//numbers in array - if number is 5 or higher return 1, if lower return 0.
//4345365595464 returns 0001011111010
//.map(x => x<5 ? 0 : 1) --- if x is lower than 5 return 0, else return 1
function fakeBin(x) {
  return x
    .split("")
    .map((x) => (x < 5 ? 0 : 1))
    .join("");
}

function fakeBin(str) {
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (Number(str[i]) >= 5) {
      newStr += "1";
    } else {
      newStr += "0";
    }
  }
  return newStr;
}

function fakeBin(x) {
  let result = "";
  for (let i = 0; i < x.length; i++) {
    x[i] < 5 ? (result += 0) : (result += 1);
  }
  return result;
}

const carAge = 16;
const checkAge = age >= carAge ? "fresh" : "old school";

//does last letter of body = tail
correctTail = (body, tail) => body[body.length - 1] === tail;

//repeat s, n amount of times - first time using repeat
repeatStr = (n, s) => s.repeat(n);

// Using reduce - times all numbers together from behinning
function grow(x) {
  return x.reduce((a, b) => b * a);
}

const grow = (x) => {
  let res = 1;
  for (let i = 0; i < x.length; i++) {
    res *= x[i];
  }
  return res;
};

// hex to decimal - parseInt is a library - 16 is hex part of the library
function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

// length of positive and sum of negative
function countPositivesSumNegatives(input) {
  let positive = 0;
  let negative = 0;
  if (input == null || input.length === 0) {
    return [];
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positive++;
    }
    if (input[i] < 0) {
      negative += input[i];
    }
  }
  return [positive, negative];
}

// greeting with custom name - using replace instead
let greet = (name) => `Hello, ${name} how are you doing today?`;

function greet(name) {
  return "Hello, <name> how are you doing today?".replace("<name>", name);
}

//convert boolean into string
booleanToString = (b) => (b ? "true" : "false");

//finding distance between x and y, 2D
function distanceBetweenPoints(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

//if n is even, divide it by 2. If n is odd, multiply it by 3 and add 1.
//If you repeat the process continuously for n, n will eventually reach 1
function collatz(n) {
  let ans = 1;
  while (n > 1) {
    {
      ans++;
    }
    if (n % 2) {
      n *= 3;
      n += 1;
    } else {
      n /= 2;
    }
  }
  return ans;
}

// sum of array = even or odd
function oddOrEven(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  if (sum % 2 === 0) {
    return "even";
  } else return "odd";
}

//['h','h','y']['i','o','o']['','w','u'] - This becomes 'hi how are you'
//final += ''   -- adds spaces between the words --.trim - removes spaces on edges
function arrAdder(arr) {
  let final = "";
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      final += arr[j][i];
    }
    final += " ";
  }
  return final.trim();
}

//Depending on amount of petals return the phrase - could repeat
function howMuchILoveYou(nbPetals) {
  if (nbPetals % 6 === 1) {
    return "I love you";
  }
  if (nbPetals % 6 === 2) {
    return "a little";
  }
  if (nbPetals % 6 === 3) {
    return "a lot";
  }
  if (nbPetals % 6 === 4) {
    return "passionately";
  }
  if (nbPetals % 6 === 5) {
    return "madly";
  }
  if (nbPetals % 6 === 0) {
    return "not at all";
  }
}

function howMuchILoveYou(nbPetals) {
  let petals = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  return petals[(nbPetals - 1) % 6];
}

//sort retangles and circles by area - **2 squares the number
function sortByArea(array) {
  return [...array].sort(
    (a, b) =>
      (typeof a === "number" ? Math.PI * a ** 2 : a[0] * a[1]) -
      (typeof b === "number" ? Math.PI * b ** 2 : b[0] * b[1])
  );
}

// return highest/lowest number from single string
function highAndLow(numbers) {
  let spl = numbers.split(" ");
  return Math.max(...spl) + " " + Math.min(...spl);
}

//Math trick to return sum of numbers - all numbers that would be between (a ... b)
function getSum(a, b) {
  let low = Math.min(a, b);
  let high = Math.max(a, b);
  return ((high - low + 1) * (high + low)) / 2;
}

//remove first and last letter of word - slice removes - .slice(index to remove - beginning,end-1)
function removeChar(str) {
  return str.slice(1, str.length - 1);
}

//return opposite number - if 6 return -6 - if -7 return 7
function opposite(number) {
  return -number;
}

//replace all index's in text to character in char - text='phone' char='n' - returns 'nnnnn'
function contamination(text, char) {
  {
    return char.repeat(text.length);
  }
}

//return initials in capitals
function abbrevName(name) {
  let a = name.toUpperCase();
  return `${a[0]}.${a[a.indexOf(" ") + 1]}`;
}

function abbrevName(name) {
  return (
    name[0].toUpperCase() + "." + name[name.indexOf(" ") + 1].toUpperCase()
  );
}

//return milli seconds of a length of time
function past(h, m, s) {
  let hs = h * 3600000;
  let ms = m * 60000;
  let ss = s * 1000;
  return hs + ms + ss;
}

// turn -6 into 6 and vise versa - works on array of numbers
function invert(array) {
  return array.map((x) => -x);
}

//create sequence of numbers exual/below 'n' until '0'
function reverseSeq(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result.reverse();
}

//check if all letters are upper case
String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};

//return all number below n - to the power of 2
function powersOfTwo(n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}

//check if a includes x
function check(a, x) {
  return a.includes(x);
}

//return closest square root - pow(opposite to square root, add '2' on end)
//round: rounds it to closest side ----- sqrt: square root it
function nearestSq(n) {
  return Math.pow(Math.round(Math.sqrt(n)), 2);
}

//swap a's with b's - abaabac returns babbabc - else if: goes to original array
function switcheroo(x) {
  let arr = x.split("");
  for (let i = 0; i < x.length; i++) {
    if (arr[i] === "a") {
      arr[i] = "b";
    } else if (arr[i] === "b") {
      arr[i] = "a";
    }
  }
  return arr.join("");
}

//lowest*2 + middle*2 === highest*2
function isPythagoreanTriple(integers) {
  integers.sort((a, b) => a - b);
  let a = integers[0] * integers[0];
  let b = integers[1] * integers[1];
  let c = integers[2] * integers[2];
  if (a + b === c) {
    return true;
  } else return false;
}

function isPythagoreanTriple(integers) {
  let massiv = integers.sort((a, b) => a - b);
  return massiv[0] ** 2 + massiv[1] ** 2 == massiv[2] ** 2; //** = to the power of
}

//switch names over
function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

//return integer* 2,3,4,5 until reaches limit
function findMultiples(integer, limit) {
  let arr = [];
  for (let i = integer; i <= limit; i += integer) {
    arr.push(i);
  }
  return arr;
}

//return shortest word
function findShort(s) {
  return Math.min(...s.split(" ").map((element) => element.length));
}

//duplicate each letter - * "String"   returns   -> "SSttrriinngg"
function doubleChar(str) {
  return (str = str
    .split("")
    .map((x) => x + x)
    .join(""));
}

//is n divisible by x and y
isDivisible = (n, x, y) => (n % x === 0 && n % y === 0 ? true : false);

//replace & " > < with other characters
function htmlspecialchars(formData) {
  return formData
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

//replace . with -
replaceDots = (str) => str.replace(/\./g, "-");

var replaceDots = (s) => s.split(".").join("-"); //can split and join with seperate character

//check if 1 is odd and 1 is even
function lovefunc(flower1, flower2) {
  if ((flower1 + flower2) % 2 === 1) {
    return true;
  } else return false;
}

//longer number in middle - shorter number on either side
function solution(a, b) {
  if (a.length < b.length) {
    return `${a}${b}${a}`;
  } else return `${b}${a}${b}`;
}

//find single number that isn't repeated
function findUniq(arr) {
  let result = arr.sort();
  for (let i = 0; i < result.length; i++) {
    if (result[i - 1] !== result[i] && result[i + 1] !== result[i]) {
      return result[i];
    }
  }
}

//return index and array - if array=[a,b,c] - returns [1:a,2:b,3:c]
function number(array) {
  return array.map((element, index) => `${index + 1}: ${element}`);
}

//return + sign repeated a certain amount of times - trim removes spaces and certain shapes at end
function generateShape(integer) {
  return ("+".repeat(integer) + "\n").repeat(integer).trim();
}

//return name * price, without using *
function billboard(name, price = 30) {
  return name.repeat(price).length;
}

//return index n to the power of n - if index n is out of array return -1
function index(array, n) {
  if (array.length > n) {
    return Math.pow(array[n], n);
  } else return -1;
}

//if last character is !, remove it
function remove(string) {
  //coding and coding....
  if (string[string.length - 1] === "!") {
    return string.slice(0, -1);
  } else return string;
}

remove = (s) => s.replace(/!$/, "");

//How many odd number below n
oddCount = (n) => Math.floor(n / 2);

//Rock, Paper, Scissors
const rps = (p1, p2) => {
  if (p1 === "rock" && p2 === "scissors") {
    return "Player 1 won!";
  }
  if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!";
  }
  if (p1 === "paper" && p2 === "rock") {
    return "Player 1 won!";
  }
  if (p2 === "rock" && p1 === "scissors") {
    return "Player 2 won!";
  }
  if (p2 === "scissors" && p1 === "paper") {
    return "Player 2 won!";
  }
  if (p2 === "paper" && p1 === "rock") {
    return "Player 2 won!";
  } else return "Draw!";
};

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  if (p1 === "rock" && p2 === "scissors") return "Player 1 won!";
  if (p1 === "scissors" && p2 === "paper") return "Player 1 won!";
  if (p1 === "paper" && p2 === "rock") return "Player 1 won!";
  return "Player 2 won!";
};

// Gather all numbers below 'number' that are divisible by 3 or 5, them add them together
function solution(number) {
  let threeFive = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      threeFive.push(i);
    }
  }
  return threeFive.reduce((a, b) => a + b, 0);
}

function solution(number) {
  var sum = 0;
  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

//calculate when dad was/will be half sons age
function twiceAsOld(dadYearsOld, sonYearsOld) {
  let sum = dadYearsOld - sonYearsOld * 2;
  if (sum < 0) {
    return sum * -1;
  } else return sum;
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(sonYearsOld * 2 - dadYearsOld);
}

//see if same amount of x and o's
function XO(str) {
  str = str.toLowerCase();
  let countx = 0;
  let counto = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      countx++;
    }
    if (str[i] === "o") {
      counto++;
    }
  }
  if (countx === counto) {
    return true;
  } else return false;
}

//return all true
function countSheeps(arr) {
  return arr.filter(Boolean).length;
}

//sum up array in array - multiply by 20
function stairsIn20(s) {
  return s.reduce((a, b) => a + b.reduce((a, b) => a + b, 0), 0) * 20;
}

//sum didgets - (A) - next number with same same from didgets
function nx(A) {
  let digits = String(A).split("");
  let sum1 = digits.reduce((a, b) => a + Number(b), 0);

  for (let i = A + 1; i < 100000; i++) {
    if (
      String(i)
        .split("")
        .reduce((a, b) => a + Number(b), 0) === sum1
    )
      return i;
  }
}

//sort words using last letter of word
function last(x) {
  return x
    .split(" ")
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

//grade level
function getGrade(s1, s2, s3) {
  let av = (s1 + s2 + s3) / 3;
  if (av < 60) {
    return "F";
  } else if (av < 70) {
    return "D";
  } else if (av < 80) {
    return "C";
  } else if (av < 90) {
    return "B";
  } else return "A";
}

function getGrade(s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3;
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F";
}

//sum up 2 seperate arrays together
arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((a, b) => a + b, 0);

//remove duplicated numbers
distinct = (a) => [...new Set(a)];

//return first non consecutive number
firstNonConsecutive = (arr) =>
  Number.isInteger(arr.find((a, b) => a !== b + arr[0]))
    ? arr.find((a, b) => a !== b + arr[0])
    : null;

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
}

//find how many 1's in array, then how many of the result from that 1
stantonMeasure = (array) =>
  array.filter(
    (element) => element === array.filter((element) => element === 1).length
  ).length;

//repeat 'loc' index of 'str', 'num' amount of times
function modifyMultiply(str, loc, num) {
  return Array(num).fill(str.split(" ")[loc]).join("-");
}

//check if didgets of number are in assending order - (23 = true) - (32 = false)
tidyNumber = (n) =>
  Number(
    String(n)
      .split("")
      .sort((a, b) => a - b)
      .join("")
  ) === n;

//square every didget
squareDigits = (num) =>
  Number(
    String(num)
      .split("")
      .map((x) => x * x)
      .join("")
  );

//sum of arguments - reduce does not work, unless you use '...' on argument
function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function sum(...xs) {
  return xs.reduce((x, y) => x + y);
}

//reverse engineer handshake problem
getParticipants = (handshakes) =>
  handshakes === 0 ? 0 : Math.ceil((Math.sqrt(8 * handshakes + 1) + 1) / 2);

//return first missing alphabet in list - can start at any point
function findMissingLetter(array) {
  let start = array[0].charCodeAt(0);
  for (let i = 0; i < array.length; i++) {
    if (start + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(start + i);
    }
  }
}

//sort words and remove a,e,A,E from them
onePunch = (items) =>
  items === String(items) && items.length > 0
    ? items
        .split(" ")
        .sort()
        .join(" ")
        .replace(/e|a|A|E/g, "")
    : "Broken!";

//replace letters upto 'T' from 'x' to 'o' - remember to split text first
function flyBy(lamps, drone) {
  let spl = lamps.split("");
  for (let i = 0; i <= drone.indexOf("T") && i < lamps.length; i++) {
    spl[i] = "o";
  }
  return spl.join("");
}

//sort odd numbers in order, nut dont move any even numbers
function sortArray(array) {
  let odd = array.filter((a) => a % 2 !== 0).sort((a, b) => a - b);
  return array.map((a) => (a % 2 === 0 ? a : odd.shift()));
}

//order odd number in assending order and negative numbers in decending order
function sortItOut(array) {
  let even = array.filter((a) => Math.floor(a) % 2 === 0).sort((a, b) => b - a);
  let odd = array.filter((a) => Math.floor(a) % 2 !== 0).sort((a, b) => a - b);
  return odd.concat(even);
}

//check if string can become a palindrome with letter in it
function permuteAPalindrome(input) {
  let obj = {};
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      continue;
    }
    if (obj[input[i]]) {
      delete obj[input[i]];
    } else obj[input[i]] = true;
    count++;
  }
  if (count % 2 === 0) {
    return Object.keys(obj).length === 0;
  } else return Object.keys(obj).length === 1;
}

//remove the smallest number
function removeSmallest(numbers) {
  return numbers.filter(
    (_, index) => index !== numbers.indexOf(Math.min(...numbers))
  );
}

function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

//using forEach - [[1,6],[2,4]] return [7] - amount of numbers between pairs
function sumIntervals(intervals) {
  let num = [];
  intervals.forEach((e) => {
    for (let i = e[0]; i < e[1]; i++) {
      num.push(i);
    }
  });
  num = [...new Set(num)];
  return num.length;
}

//replace every 'T' with 'U'
function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}

DNAtoRNA = (dna) => dna.replace(/T/g, "U");

//remove every other index in array
removeEveryOther = (arr) => arr.filter((_, i) => i % 2 === 0);

//if first number is higher, get 3 points - sum up all points - ['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'] - returns 30
points = (games) =>
  games.reduce((a, [x, _, y]) => a + (x > y ? 3 : x === y), 0);

//find highest possible number using * and +
function expressionMatter(a, b, c) {
  let num = [];
  num.push(a + b + c);
  num.push(a * b * c);
  num.push(a + b * c);
  num.push(a + b * c);
  num.push(a * (c + b));
  num.push((a + b) * c);
  num.push(a * b + c);
  return Math.max(...num);
}

//if letters are the same case return 1, if not return 0, in not letters -1 - "/[a-z]/i.test(exampleinput)" tests if not a letter
function sameCase(a, b) {
  if (/[a-z]/i.test(a) && /[a-z]/i.test(b)) {
    if (a === a.toLowerCase() && b === b.toLowerCase()) {
      return 1;
    } else if (a === a.toUpperCase() && b === b.toUpperCase()) {
      return 1;
    } else if (a === a.toLowerCase() && b === b.toUpperCase()) {
      return 0;
    } else if (a === a.toUpperCase() && b === b.toLowerCase()) {
      return 0;
    }
  } else return -1;
}

//return all numbers that are multiples of their own index
multipleOfIndex = (array) => array.filter((e, i) => e % i === 0);

//sum all numbers, excluding highest and lowest number
function sumArray(array) {
  let sum = 0;
  if (array == null) {
    return 0;
  }
  let srt = array.sort((a, b) => a - b);
  for (let i = 1; i < array.length - 1; i++) {
    sum += srt[i];
  }
  return sum;
}

//Palindrome with extra characters - removeChar = string.replace(/[^A-Z0-9]/ig, "").toLowerCase() - removes characters and makes it lowercase
function palindrome(string) {
  let removeChar = string.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  if (removeChar == removeChar.split("").reverse().join("")) {
    return true;
  } else return false;
}

//is it a didget - regex
String.prototype.digit = function () {
  if (this < 10) {
    return /^[0-9]+$/.test(this);
  } else return false;
};

//return an array containing all of the strings in the input array except those that match strings in geese
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((a) => !geese.includes(a));
}

//creating multiplication table - using [...Array()] - creates a fresh array with undefined items - using index of those to create numbers
multiTable = (number) =>
  [...Array(10)]
    .map((_, i) => `${i + 1} * ${number} = ${(i + 1) * number}`)
    .join("\n");

multiTable = (n) =>
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .map((i) => `${i} * ${n} = ${i * n}`)
    .join("\n");

//remove all numbers
stringClean = (s) => s.replace(/[0-9]/g, "");

//clubs, diamonds, hearts or diamonds
defineSuit = (card) =>
  card[1] === "♣"
    ? "clubs"
    : card[1] === "♦"
    ? "diamonds"
    : card[1] === "♥"
    ? "hearts"
    : card[1] === "♠"
    ? "spades"
    : card === "10♣"
    ? "clubs"
    : card === "10♦"
    ? "diamonds"
    : card === "10♥"
    ? "hearts"
    : card === "10♠"
    ? "spades"
    : 0;

//remove vowels
shortcut = (string) => string.replace(/[a,e,i,o,u]/g, "");

//sum of all full even numbers
sumEvenNumbers = (input) =>
  input.filter((a) => a % 2 === 0).reduce((a, b) => a + b, 0);

a.reduce((a, b) => a + (b % 2 == 0 && b), 0);

sumEvenNumbers = (a) => a.reduce((r, e) => r + (e % 2 ? 0 : e), 0);

//reverse without using input functions
reverse = function (array) {
  let ans = [];
  let len = array.length - 1;
  for (let i = 0; i < array.length; i++) {
    if (array.length > 0) {
      ans[i] = array[len - i];
    }
  }
  return ans;
};

//add 1 to an array of numbers - [1, 2, 3, 9] would return [1, 2, 4, 0] - unshift adds an element to beginning
function upArray(arr) {
  if (arr.length == 0) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || arr[i] < 0 || arr[i] > 9) {
      return null;
    }
  }
  for (let i = arr.length - 1; i > -1; i--) {
    if (arr[i] !== 9) {
      arr[i] = arr[i] + 1;
      break;
    } else arr[i] = 0;
    if (i === 0) {
      arr.unshift(1);
    }
  }
  return arr;
}

// \D - removes all but numbers - regex - check if its a phone number - mixed in with letters and symbols
function isItANum(str) {
  let result = str.replace(/\D/g, "");
  if (result[0] == 0 && result.length === 11) {
    return result;
  } else return "Not a phone number";
}

//add position to each number - if over 9, keep last number
function incrementer(nums) {
  return nums.map((a, i) => (a + i + 1 < 10 ? a + i + 1 : (a + i + 1) % 10));
}

//how many times is calculation required for p0 to be larger than p - single | is basically Math.floor
function nbYear(p0, percent, aug, p) {
  let result = 0;
  for (let i = 0; p0 < p; i++) {
    p0 = (p0 + (p0 / 100) * percent + aug) | 0;
    result++;
  }
  return result;
}

//replace vowels with 1, everything else with 0
vowelOne = (s) => s.replace(/[^aeiou]/gi, "0").replace(/[aeiou]/gi, "1");

function vowelOne(s) {
  return s
    .split("")
    .map((x) => ("aeiouAEIOU".includes(x) ? 1 : 0))
    .join("");
}

//check if you square all numbers in array2, do they equal array1
comp = (array1, array2) =>
  !!array1 &&
  !!array2 &&
  array1
    .map((a) => a * a)
    .sort()
    .join("") === array2.sort().join("");

comp = (array1, array2) =>
  !!array1 &&
  !!array2 &&
  array1.sort().join("") ==
    array2
      .map((a) => Math.sqrt(a))
      .sort()
      .join("");

//every divisible number below, summed up = original number
function isPerfect(n) {
  if (n === 1) {
    return false;
  }
  let div = 1;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      div = div + i + n / i;
    }
  }
  return div === n;
}

//return largest n amount of numbers
largest = (n, xs) => xs.sort((a, b) => a - b).slice(xs.length - n);

//return the nth number from this sequence - sequence = P(n) = 2 * P(n-1) + P(n-2)
function pell(n) {
  let bigi = [BigInt(0), BigInt(1)];
  while (bigi.length <= n) {
    bigi.push(BigInt(2) * bigi[bigi.length - 1] + bigi[bigi.length - 2]);
  }
  return BigInt(bigi[bigi.length - 1]);
}

//how many vowels
getCount = (str) => str.replace(/[^aeiou]/g, "").length;

//is the object a cube? only have volume and 1 side
var cubeChecker = function (volume, side) {
  if (side <= 0 || volume <= 0) {
    return false;
  }
  if (side ** 3 === volume) {
    return true;
  } else return false;
};

//
cubeChecker = (volume, side) =>
  volume <= 0 || side <= 0 ? false : side ** 3 === volume ? true : false;

//return how much change in money
function changeMe(moneyIn) {
  return (
    {
      "£5": "20p ".repeat(25).trim(),
      "£2": "20p ".repeat(10).trim(),
      "£1": "20p ".repeat(5).trim(),
      "50p": "20p 20p 10p",
      "20p": "10p 10p",
    }[moneyIn] || moneyIn
  );
}

function changeMe(moneyIn) {
  switch (moneyIn) {
    case "£5":
      return "20p ".repeat(25).trim();
    case "£2":
      return "20p ".repeat(10).trim();
    case "£1":
      return "20p ".repeat(5).trim();
    case "50p":
      return "20p 20p 10p";
    case "20p":
      return "10p 10p";
    default:
      return moneyIn;
  }
}

//Add 2 numbers together - Pre 2020 - Without using 'BigInt'
function add(a, b) {
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    let digit1 = i >= 0 ? parseInt(a[i]) : 0;
    let digit2 = j >= 0 ? parseInt(b[j]) : 0;
    let sum = digit1 + digit2 + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10).toString() + result;
    i--;
    j--;
  }

  return result;
}

//transform the normal letters into phenetical (NATO = if dictionary already created)
function to_nato(words) {
  return words
    .split(" ")
    .join("")
    .toLowerCase()
    .split("")
    .map((char) => NATO[char] || char)
    .join(" ");
}

//redact all but last 4, like a credit card, replace redacted with '#'
maskify = (cc) => cc.replace(/[0-9a-zA-Z]/g, "#").slice(0, -4) + cc.slice(-4);

//return 13 letters further down the alphabet
function rot13(str) {
  let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let res = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return str.replace(/[a-z]/gi, (char) => res[alpha.indexOf(char)]);
}

//return size amount of letters from str and add '...' at the end, to show it has been cropped
trim = (str, size) =>
  str.length <= size ? str : str.slice(0, size > 3 ? size - 3 : size) + "...";

//return the lowest index 'val' would fit in 'ary' - 'ary' is in order - numbers
keepOrder = (ary, val) => ary.filter((e) => e < val).length;

//return welcome in the right language
greet = (language) =>
  ((a) => a[language] || "Welcome")({
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  });

//is it a power of 2?
isPowerOfTwo = (n) => Math.log2(n) % 1 == 0;

//sort array by length of word
sortByLength = (array) => array.sort((a, b) => a.length - b.length);

//ASII code total - return sum of numbers of ASII letters
uniTotal = (string) => [...string].reduce((a, b) => a + b.charCodeAt(), 0);

//conver mpg into killometres per letre - round to 2 decimal places
converter = (mpg) => +((mpg / 4.54609188) * 1.609344).toFixed(2);

//test if the greeting is hello from one of these languages
function validateHello(greetings) {
  return /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings);
}
