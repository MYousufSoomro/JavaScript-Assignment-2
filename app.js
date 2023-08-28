///////    /////////////////////////////////////////    ///////
///////           Chapter 21 (Changing Case)            ///////
///////    /////////////////////////////////////////    ///////

// 1. Type the characters that are missing from this code.
// var allLower = userInput.toLowerCase;
// Note: Correct this statement by yourself.

var allLower = userInput.toLowerCase();

///////    /////////////////////////////////////////    ///////

// 2. Convert the string represented by x to lower-case and assign the
// result to the same variable.

var x = "HELLO WORLD!";
x = x.toLowerCase();

///////    /////////////////////////////////////////    ///////

// 3. Convert the string represented by y to upper-case and assign the
// result to the same variable

var y = "my name is yousuf";
y = y.toUpperCase();

///////    /////////////////////////////////////////    ///////

// 4. Convert the string represented by a variable to lower-case and
// assign the result to a second variable that hasn't been declared
// beforehand.

var str1 = "HELLO PAKISTAN";
var newString = str1.toLowerCase();

///////    /////////////////////////////////////////    ///////

// 6. Display in an alert the upper-case version of the string
// represented by a variable.

var a = "hello pakistan!";
alert(a.toUpperCase());

///////    /////////////////////////////////////////    ///////

// 7. var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation is
// the writing of a word with its first letter in uppercase and the
// remaining letters in lowercase.

var cityName = "kaRacHi";
cityName = cityName.slice(0, 1).toUpperCase() + cityName.slice(1).toLowerCase();

///////    /////////////////////////////////////////    ///////
///////           Chapter 22 - 25 (Strings)             ///////
///////    /////////////////////////////////////////    ///////

// 1. "captain" has been assigned to variable “sameWords”. You want
// to slice "ap" out of it.

var text = "captain";
var slicedText = text.slice(1, 3);

///////    /////////////////////////////////////////    ///////

// 2. The number of characters in the string will be assigned to the
// variable.

var string = "Hello Pakistan!";
var charactersCount = string.length;
console.log(charactersCount);

///////    /////////////////////////////////////////    ///////

// 3. The string "elephant" has been assigned to the variable animal.
// Slice the four middle characters out of the string and assign it to
// the variable seg, which hasn't been declared beforehand.

var animal = "elephant";
var seg = animal.slice(2, 6);
console.log(seg);

///////    /////////////////////////////////////////    ///////

// 4. Find the number of characters in the string represented by a
// variable and assign the number to a second variable.

var str2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit";
var countStr2 = str2.length;
console.log(countStr2);

///////    /////////////////////////////////////////    ///////

// 5. In a first statement measure how many characters there are in a
// string represented by a variable. In a second statement slice all
// but the first character and last 3 characters of the string and
// assign it to a second variable that hasn't been declared
// beforehand.

var str3 = "sit amet consectetur adipisicing elit";
var countStr3 = str3.length;
var newStr3 = str3.slice(1, countStr3 - 3);
console.log(newStr3);

///////    /////////////////////////////////////////    ///////

// 6. var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?

// VALUE OF indx is "3"

///////    /////////////////////////////////////////    ///////

// 7. var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?

// VALUE OF indx is "16"

///////    /////////////////////////////////////////    ///////

// 8. Find the index of the first character of the last instance of "go" in
// the string represented by the variable text and assign the number
// to the variable indx, which hasn't been declared beforehand.

var text = "Hello go out from here. Don't come, just let it go!";
var indx = text.lastIndexOf("go");
console.log(indx);

///////    /////////////////////////////////////////    ///////

// 9. Code the first line of an if statement that tests whether a segment
// with an index represented by indexNum exists in a string.

var str4 = "Some Text here for testing...";
var indexNum = 29;
if (str4[indexNum] !== undefined) {
  console.log("**** text exists ****");
} else {
  console.log("text not exist");
}

///////    /////////////////////////////////////////    ///////

// 10. In this string "abcde", what character is at index 2? (Use
//     charAt)

var str5 = "abcde";
console.log(str5.charAt(2)); // "c"

///////    /////////////////////////////////////////    ///////

// 11. Find the 10th character in the string represented by text and
// assign it to the variable cha, which hasn't been declared
// beforehand.

var text2 = "Hello go out from here. Don't come, just let it go!";
var cha = text2.charAt(9);

///////    /////////////////////////////////////////    ///////

// 12. Find the last character in the string represented by str and
// assign it to x, which hasn't been declared beforehand.

var str = "Hello go out from here. Don't come, just let it go!";
var x = str.charAt(str.length - 1);

///////    /////////////////////////////////////////    ///////

// 13. Find the the 5th character in a string represented by input
// and assign it to cha, which hasn't been declared beforehand.

var input = "Hello go out from here. Don't come, just let it go!";
var cha = input.charAt(4);
console.log(cha);

///////    /////////////////////////////////////////    ///////

// 14. Code the first line of an if statement that tests whether the
// 3rd character of a string represented by a variable is a particular
// character.

var str5 = "Some Text here for testing particular character";
if (str5.charAt(2) === "m") {
  console.log("Third character is 'm'.");
} else {
  console.log("Third character not matched!");
}

///////    /////////////////////////////////////////    ///////

// 15. Code a for loop that cycles through all the characters of a
// string represented by a variable and assigns each character to an
// element of an array that has been declared beforehand.

var text3 = "all the characters of a string represented";
var arr = [];
for (var i = 0; i < text3.length; i++) {
  arr.push(text3.charAt(i));
}

///////    /////////////////////////////////////////    ///////

// In the string represented by reply replace the first instance of "no"
// with "yes" and assign the revised string to revisedReply, which hasn't
// been declared beforehand.

var reply = "Your answer is no. My answer is no!";
var indexChk = reply.indexOf("no");
var revisedReply = reply.slice(0, indexChk) + "yes" + reply.slice(indexChk + 2);

///////    /////////////////////////////////////////    ///////

// 16. In a string represented by str replace the first instance of "1"
// with "one" and assign the revised string to newStr, which hasn't
// been declared beforehand.

var str = "Your are number 1. But 1 is not satisfactory!";
var indexChk = str.indexOf("1");
var newStr = str.slice(0, indexChk) + "one" + str.slice(indexChk + 1);

///////    /////////////////////////////////////////    ///////

// 17. If you want all instances replaced, enter 3 characters that
// need to appear in this statement.
// var y = x.replace("a", "z");

var y = x.replaceAll("a", "z");

///////    /////////////////////////////////////////    ///////
///////        Chapter 26 (Rounding Numbers)            ///////
///////    /////////////////////////////////////////    ///////

// 1. Form a statement that rounds a number to the nearest integer.

Math.round(58.3648);

///////    /////////////////////////////////////////    ///////

// 2. Round up a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.

var origNum = 69.545673;
var roundNum = Math.ceil(origNum);

///////    /////////////////////////////////////////    ///////

// 3. Round down a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.

var origNum = 69.545673;
var roundNum = Math.floor(origNum);

///////    /////////////////////////////////////////    ///////

// 4. Round a number represented by a variable and assign the result
// to a second variable that hasn't been declared beforehand.

var num = 58.3648;
var roundNum = Math.round(num);

///////    /////////////////////////////////////////    ///////

// 5. Round .5 to 0 and assign it to a variable that hasn't been declared
// beforehand.

var num = 0.5;
var roundNum = Math.floor(num);

///////    /////////////////////////////////////////    ///////
///////          Chapter 27 (Random Numbers)            ///////
///////    /////////////////////////////////////////    ///////

// 1. Convert a random number generated by JavaScript to a number in
// the range 1 to 50

var rand = Math.ceil(Math.random() * 50);
console.log(rand);

///////    /////////////////////////////////////////    ///////

// 2. Generate a random number and assign it to a variable that hasn't
// been declared beforehand.

var randNumber = Math.random();

///////    /////////////////////////////////////////    ///////

// 3. You have to create a dice in JavaScript with the use of pseudorandom number.

var dice = Math.ceil(Math.random() * 6);
console.log(dice);

///////    /////////////////////////////////////////    ///////

// 4. You have to create a toss (head/tail) in JavaScript with the use of
// pseudo-random number.

var toss = Math.ceil(Math.random() * 2);
if (toss === 1) {
  console.log("head");
} else {
  console.log("tail");
}

///////    /////////////////////////////////////////    ///////
///////       Chapter 28, 29 (Converting Strings)       ///////
///////    /////////////////////////////////////////    ///////

// 1. How do you convert a string to an integer in JavaScript?

Number("123456");

///////    /////////////////////////////////////////    ///////

// 2. Write a JavaScript function to convert the string "123" to an
// integer.

Number("123");

///////    /////////////////////////////////////////    ///////

// 3. How can you convert a string containing a decimal number to a
// floating-point number in JavaScript?

Number("5644.6564");
parseFloat("5644.6564");

///////    /////////////////////////////////////////    ///////

// 4. How can you check if a string can be successfully converted to an
// integer or decimal in JavaScript before performing the
// conversion?

var numb = Number(prompt("Enter number"));
var chk = Number(numb).toString();
if (chk === "NaN") {
  console.log("---- NOT A NUMBER ----");
} else {
  console.log(numb);
}

///////    /////////////////////////////////////////    ///////

// 5. How can you convert a number to a string in JavaScript?

(5555).toString();

///////    /////////////////////////////////////////    ///////

// 6. Write a JavaScript function to convert the number 42 to a string.

(42).toString();

///////    /////////////////////////////////////////    ///////

// 7. Can you convert a string representing a decimal number (e.g.,
//     "3.14") to an integer in JavaScript? If so, how?

parseInt("3.14");

///////    /////////////////////////////////////////    ///////
/////// Chapter 30 (Controlling the length of decimals) ///////
///////    /////////////////////////////////////////    ///////

// 1. Code a statement that rounds a number represented by num to 4
// places, converts it to a string, and assigns it to newNum, which
// hasn't been declared beforehand.

var num = 5.6428456;
num.toFixed(4);

///////    /////////////////////////////////////////    ///////

// 2. In a single statement round a number represented by a variable to
// 2 places, convert it to a string, convert it back to a number, and
// assign it to the same variable.

var num = 5.6428456;
num.toFixed(2);

///////    /////////////////////////////////////////    ///////

// 3. Code the first line of an if statement that tests whether the
// number represented by num, rounded to 2 digits and converted
// to a string, has more than 4 characters in it.

if (num.length == 4) {
}

///////    /////////////////////////////////////////    ///////

// 4. Assign a number with many decimal places to a variable.
// Code an alert that displays the number rounded to 2 decimal
// places and converted to a string.

var num = 536.635408897546;
alert(num.toFixed(2).toString());

///////    /////////////////////////////////////////    ///////
///////         Chapter 31 - 34 (Date & Time)           ///////
///////    /////////////////////////////////////////    ///////

// 1. Code a statement that creates a new Date object and assigns it to
// dObj, which hasn't been declared beforehand.

var dObj = new Date();

///////    /////////////////////////////////////////    ///////

// 2. Code a statement that creates a new Date object, converts it to a
// string, and assigns the string to dStr, which hasn't been declared
// beforehand.

var dObj = new Date();
var dStr = dObj.toString();

///////    /////////////////////////////////////////    ///////

// 3. Code a statement that extracts the day of the week from a Date
// object represented by d and assigns it to day, which hasn't been
// declared beforehand.

var dObj = new Date();
var d = dObj.getDay();

///////    /////////////////////////////////////////    ///////

// 4. The day has been extracted from the Date object and assigned to
// d. The names of the days of the week have been assigned to the
// array dayNames. Alert the current day with array index.

var dObj = new Date();
var d = dObj.getDay();
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
dayNames[d];

///////    /////////////////////////////////////////    ///////

// 5. Extract all parts of the Date and Time and assign it to the variable
// which has not been declared beforehand.

var dObj = new Date();
var date = dObj.getDate();
var year = dObj.getFullYear();
var hour = dObj.getHours();
var minute = dObj.getMinutes();
var second = dObj.getSeconds();

var d = dObj.getDay();
var m = dObj.getMonth();
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
var monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
var formatedDate = dayNames[d] + ", " + date + " " + monthNames[m] + " " + year;
var formatedTime = hour + ":" + minute + ":" + second;

///////    /////////////////////////////////////////    ///////

// 6. Code a statement that creates a Date object for the last day of the
// last month of 2020 and assigns it to later, which hasn't been
// declared beforehand.

var d = new Date();
d.setFullYear(2020);
d.setMonth(11);
d.setDate(31);

///////    /////////////////////////////////////////    ///////

// 7. Create a Date object for the second day of the second month of
// 1992 and assign it to a variable that hasn't been declared
// beforehand.

var d = new Date();
d.setFullYear(1992);
d.setMonth(1);
d.setDate(2);

///////    /////////////////////////////////////////    ///////

// 8. Code a single statement that displays in an alert the milliseconds
// that elapsed between the reference date and the beginning of
// 1980.

alert(new Date().getTime() - new Date("1980").getTime());

///////    /////////////////////////////////////////    ///////

// 9. How do you change the year of a date in JavaScript?

new Date("1996");

///////    /////////////////////////////////////////    ///////

// 10. Write a JavaScript function to change the month of a given
// date to January.

var d = new Date();
d.setMonth(0);

///////    /////////////////////////////////////////    ///////

// 11. What is the method to change the day of the week for a
// specific date in JavaScript?

var d = new Date();
d.setDate(5);

///////    /////////////////////////////////////////    ///////

// 12. Write a JavaScript function to change the minutes of a given
// time to a specific value. (Value by prompt)

var d = new Date();
var getPrompt = Number(prompt("Enter Number to set Minutes"));
d.setMinutes(getPrompt);
console.log(d);

///////    /////////////////////////////////////////    ///////

// 13. Write a JavaScript function to add a specific number of
// hours to a given time.

var d = new Date();
var getPrompt = Number(prompt("Enter Number to Add in Hours"));
d.setHours(d.getHours() + getPrompt);
console.log(d);

///////    /////////////////////////////////////////    ///////

// 14. You have to create a age calculator in JavaScript.

var userDate = Number(prompt("Enter your Birth Date"));
var userMonth = Number(prompt("Enter your Birth Month"));
var userYear = Number(prompt("Enter your Birth Year"));

var currentDate = new Date();
var birthDate = new Date();
birthDate.setDate(userDate);
birthDate.setMonth(userMonth - 1);
birthDate.setFullYear(userYear);

var diff = currentDate.getTime() - birthDate.getTime();
var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));
alert("Your age is: " + age);

///////    /////////////////////////////////////////    ///////
///////           Chapter 35 - 37 (Functions)           ///////
///////    /////////////////////////////////////////    ///////

// 1. Code the first line of a function displayAlert

function displayAlert() {}

///////    /////////////////////////////////////////    ///////

// 2. Code a function named askName that prompts the user to "Enter
// name" and assigns the answer to userName, which hasn't been
// declared beforehand.

function askName() {
  var userName = prompt("Enter name");
}

///////    /////////////////////////////////////////    ///////

// 3. Code a function that calls 2 other functions.

function abc() {
  hello();
  greet();
}

///////    /////////////////////////////////////////    ///////

// 4. Code a function that displays a prompt, "Enter name" and then
// displays the name in an alert. Call the function.

function askName() {
  var userName = prompt("Enter name");
  alert("Welcome, " + userName);
}
askName();

///////    /////////////////////////////////////////    ///////

// 5. Code the first line of a function named concat that has 3
// parameters, the first three letters of the alphabet. Call that takes
// a variable, a string, and a number as arguments.

function concat(variable, string, number) {
  console.log(variable);
  console.log(string);
  console.log(number);
}
var alphabet = "abc";
concat(alphabet, "hello", 1996);

///////    /////////////////////////////////////////    ///////

// 6. Code a function that has 2 parameters. Concatenate them and
// assign the result to a variable that hasn't been declared
// beforehand.

function fullName(firstName, lastName) {
  var fName = firstName + " " + lastName;
  console.log(fName);
}
fullName("Muhammad", "Yousuf");

///////    /////////////////////////////////////////    ///////

// 7. Code a function that has three parameters. Multiply them and
// assign them to a variable that hasn't been declared yet.

function product(num1, num2, num3) {
  var ans = num1 * num2 * num3;
  return ans;
}
product(55, 66, 77);

///////    /////////////////////////////////////////    ///////

// 8. Write a JavaScript function that takes an array of numbers as
// input and returns the average of those numbers.

var numForAvg = [10, 5, 15, 20, 25, 30, 55, 100];

function avg(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  var calcAvg = sum / arr.length;
  return calcAvg;
}

avg(numForAvg);

///////    /////////////////////////////////////////    ///////

// 9. Write a JavaScript function that takes two parameters and returns
// their sum.

function add(num1, num2) {
  return num1 + num2;
}

add(55, 45);

///////    /////////////////////////////////////////    ///////

// 10. Write a JavaScript function that takes an array of numbers as
// input and returns the average of those numbers.

var numForAvg = [10, 5, 15, 20, 25, 30, 55, 100];

function avg(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  var calcAvg = sum / arr.length;
  return calcAvg;
}

avg(numForAvg);

///////    /////////////////////////////////////////    ///////

// 11. You have to capture the returned value from a function and
// store it in a variable?

function add(num1, num2) {
  return num1 + num2;
}

var result = add(55, 45);

///////    /////////////////////////////////////////    ///////

// 12. Write a function which tells letter counts of (word).

var strng =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, placeat.";
function letterCount(str) {
  return str.length;
}
letterCount(strng);

///////    /////////////////////////////////////////    ///////

// 13. Write a function to set (year) in date object

function setYear(dObj, year) {
  return dObj.setFullYear(year);
}
var d = new Date();
setYear(d, 1996);

///////    /////////////////////////////////////////    ///////

// 14. Write a function which tells the age of a person who Born on
// (dateOfBirth)

var userDate = Number(prompt("Enter your Birth Date"));
var userMonth = Number(prompt("Enter your Birth Month"));
var userYear = Number(prompt("Enter your Birth Year"));

var currentDate = new Date();
var birthDate = new Date();
birthDate.setDate(userDate);
birthDate.setMonth(userMonth - 1);
birthDate.setFullYear(userYear);

var diff = currentDate.getTime() - birthDate.getTime();
var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));
alert("Your age is: " + age);

///////    /////////////////////////////////////////    ///////

// 15. Write a function which tells the presense of (word) in an
// array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
// result should be in true or false

array = ["zaid", "haris", "raza", "abubakar", "hassan", "hussain", "fatima"];
var flag = false;
function presense(name) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == name) {
      flag = true;
    }
  }
  return flag;
}
presense("zaid");

///////    /////////////////////////////////////////    ///////

// 16. Write a function which repeat (letter) 10 times.
// Hint: "abcde" str.repeat(10)

function repeatLetters(str) {
  return str.repeat(10);
}
console.log(repeatLetters("Hello Pakistan!"));

///////    /////////////////////////////////////////    ///////

// 17. write a function which reverse array = ['a','b','c','d','e']
// Hint: arr.reverse()

var array = ["a", "b", "c", "d", "e"];
var revArry = array.reverse();
console.log(revArry);

///////    /////////////////////////////////////////    ///////
///////     Chapter 38 (Local vs. Global Variables)     ///////
///////    /////////////////////////////////////////    ///////

// 1. Write a JavaScript function that demonstrates the usage of a local
// variable.

function abc() {
  var localVar = "hello world";
  console.log(localVar);
}

// 2. How can you access a global variable inside a function in
// JavaScript?

var globalVar = "hello world";
function abc() {
  console.log(globalVar);
}

///////    /////////////////////////////////////////    ///////
///////       Chapter 39, 40 (Switch Statements)        ///////
///////    /////////////////////////////////////////    ///////

// 1. Write a JavaScript switch statement that checks the value of a
// variable and performs different actions based on different cases.

var day = "mon";

switch (day) {
  case "mon":
    console.log("working day");
    break;

  case "fri":
    console.log("half day");
    break;

  case "sun":
    console.log("holiday");
    break;

  default:
    console.log("error");
}

// 2. Write a JavaScript switch statement that check whether cityName
// given by user check the cityName if match alert the user and
// break the statement, if not default message will be shown to user.

var cityName = "islamabad";

switch (cityName) {
  case "karachi":
    console.log("Welcome to Karachi");
    break;

  case "lahore":
    console.log("Welcome to Lahore");
    break;

  case "islamabad":
    console.log("Welcome to Islamabad");
    break;

  default:
    console.log("CITY NOT FOUND!");
}

//================= THE END =================
