// Question 1: write a function called tripleFive that loops 3 times using a for loop.  Each iteration
// should output "Five!" using console.log

function tripleFive() {
	for (i =1; i<=3; i++) {
		console.log("Five!")
	}
}

tripleFive();

// Question 2: write a function called 'lastLetter' that takes 
// a single string argument and returns the last character in the string



function lastLetter(inputWord) {
	return inputWord.charAt(inputWord.length - 1);
}

console.log(lastLetter('hello'));
console.log(lastLetter('island'));

// Question 3: Write a function called 'square' which takes a single 
// argument which is a number, and returns number * number.

function square(num1) {
	return num1 * num1;
}

console.log(square(3));
console.log(square(5));

// Question 4: Write a function called 'negate' which takes a single 
// number argument and returns the negative of that number.

function negate(num1) {
	return num1 * -1;
}

console.log(negate(5));
console.log(negate(-8));

// Question 5: Write a function called 'toArray' which takes three 
// arguments and returns an array with each of those arguments as items.

function toArray(a, b, c) {
	var myArray = [a, b, c];
	return myArray;
}

console.log(toArray(1,4,5));
console.log(toArray(8,9,10));

// Question 6: Write a function called 'startsWithA' which takes a single 
// string argument and returns true if the given string's first letter is 'A' and false otherwise.

function startsWithA(word) {
	return word.charAt(0) === 'A' || word.charAt(0) ==='a';
}

console.log(startsWithA('aardvark'));
console.log(startsWithA('bear'));

// Question 7: Write a function called 'excite' which takes a single 
// string argument and returns the given string plus three exclamation marks.

function excite(word) {
	return word + '!!!';
}

console.log(excite('yes'));
console.log(excite('no'));

// Question 8: Write a function called 'sun' which takes a single string argument 
// and returns true if the string contains the word 'sun' within it. You may use 
// the indexOf method that is built-in to strings, or you can do it manually with a for loop.

function sun(word) {
	return word.indexOf('sun') !== -1;
	
}

console.log(sun('sundries'));
console.log(sun('asunder'));
console.log(sun('catapult'));

// Question 9: Write a function called 'tiny' which takes a 
// single number argument and returns true if the number is between 0 and 1.

function tiny(num2) {
	return num2 >= 0 && num2 <= 1;
}

console.log(tiny(0.3));
console.log(tiny(14));
console.log(tiny(-5));

// Question 10: Write a function called 'getSeconds' which takes a single string argument in the format 'MM:SS' 
// (hours, minutes, and seconds) and returns the total number of seconds represented by that timespan.


function getSeconds(time) {
	var times = time.split(':');
	var minutes = +times[0];
	var seconds = +times[1];
	return (minutes * 60) + seconds;
}

console.log(getSeconds('01:30'));
console.log(getSeconds('10:25'));




















