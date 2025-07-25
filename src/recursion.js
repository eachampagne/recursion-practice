// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
	//edge case - negative number
	if (n < 0) {
		return null;
	} else if (n === 0) { //base case - 0! = 1
		//note that no n === 1 case is necessary
		return 1;
	}
	//recursive case
	return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
	if (array.length === 0) return 0; //base case - empty array has sum 0

	return array[0] + sum(array.slice(1)); //recursive case
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	/* my first thought
	let sum = 0; //base case of empty array will return 0

	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			sum += arraySum(array[i]); //recursive case - if an element is a subarray, arraySum must be called on it
		} else {
			sum += array[i]; //number elements don't need arraySum 
		}
	}

	return sum;
	*/

	//more recursion
	if (array.length === 0) return 0; //base case - empty array has sum 0

	//recursive case
	//in this version, unlike the flat array version, subarrays need arraySum called on them
	//the ternary operator checks whether the first element is an array or not, which determines whether the element is added directly or subArray is called on it
	return (Array.isArray(array[0]) ? arraySum(array[0]) : array[0]) + arraySum(array.slice(1));
};

// 4. Check if a number is even.
var isEven = function(n) {
	//this was in Eloquent JS
	
	//even base case - 0
	if (n === 0) return true;
	//odd base case - 1
	//it doesn't really matter if this is an if or an else if, and a plain if looks neater
	if (n === 1) return false;

	//recursive cases
	if (n > 0) {
		return isEven(n - 2); //for positive numbers, move downwards towards the 0 and 1 base cases
		//subtracting 2 conserves parity
	} else { //only case left is negative, since positive and zero are handled
		return isEven(n + 2); //for negative numbers, move upwards towards the 0 and 1 base cases
		//adding 2 converves parity
	}
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	if (n >= 0) {
		//base case - less than or equal to 1
		if (n <= 1) {
			return 0;
		}

		//recursive case
		return (n-1) + sumBelow(n-1);
	} else { //negative n
		//base case - greater than or equal to -1
		if (n >= -1) {
			return 0;
		}

		//recursive case
		return (n+1) + sumBelow(n+1);
	}
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
	//edge case - no numbers between x and y
	if (Math.abs(y - x) < 2) return [];

	//case x < y
	if (x < y) {
		//base case - x and y two apart
		if (y - x === 2) {
			return [x + 1]; //equivalently, [y - 1]
		}

		//recursive case - return number just after x, then adjust the range in the recursive call
		return [x + 1].concat(range(x+1, y));
	} else { //case y < x
		//base case - x and y two apart
		if (x - y === 2) {
			return [x - 1]; //equivalently, [y + 1]
		}

		//recursive case - return number just below x, then adjust range for recursive call
		return [x - 1].concat(range(x - 1, y));
	}
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	//only handles integer exponents - fractional exponents with recurse forever (or until it crashes)

	//base case - exp = 0
	if (exp === 0) return 1;

	//recurse towards an exponent of 0, depending on whether the exponent is positive or negative
	if (exp > 0) { //positive exponents
		return exponent(base, exp - 1) * base;
	} else { //negative exponents
		return exponent(base, exp + 1) / base; //x^-n = 1 / x^n
	}
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
	//negative inputs are an edge case
	//I think they're not actually powers of two
	//There is no n that satisfies 2^n < 0
	//as written this function will return false for negative numbers, which I suppose is good

	//base cases - 1 is a power of 2 (the 0th), anything less than 1 is a fraction and therefore not a power of two
	if (n === 1) return true;
	if (n < 1) return false;

	//recursive case - divide by 2 and call again
	return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
	//base case - empty string
	if (string.length === 0) {
		return "";
	}

	//recursive case
	//deliberately ensuring the recursive call is the very last thing - I'm not sure whether that makes the code more optimized (tail recursion? I don't really understand that yet)
	//of course you could also
	//return reverse(string.slice(1)) + string[0];
	//which is actually a bit easier to read...
	//hmm
	//I don't know how to benchmark yet
	return string[string.length - 1] + reverse(string.slice(0, string.length - 1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	string = string.trim(); //removes leading or trailing whitespace so a space is never the compared character

	//base cases - empty strings and one letter strings both count as palindromes
	if (length.string === 0 || string.length === 1) return true;

	//recursive case
	
	//check if first and last letter are the same
	//the first and last letter being the same doesn't guarantee that the word of is a palindrome, but them being different DOES guarantee that it ISN'T
	if (string[0].toLowerCase() === string[string.length - 1].toLowerCase()) {
		//if so, slice them off and check the "inner" string (recursively)
		return palindrome(string.slice(1, string.length - 1));
	} else { //if not, return false
		return false;
	}
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

//Comments moved out of function

//edge case - negative y
//it looks like x % -y = x % y in JavaScript
//I don't know why
//The Wiki page on modulo has FIVE ways to define modulo
//JavaScript and Python, for instance, give different answers for 4 % -3
//Apparently this is what they meant when they said JavaScript technically had a remainder operator rather than a modulo operator
//I don't think there are even any test cases for negative values but I wrote a check anyway

//I didn't even consider the y=0 edge case - just happened to notice that the Wiki page said different implentations treat this differently
//Apparently JS gives NaN for x % 0
var modulo = function(x, y) {
	if (y < 0) return modulo(x, -y);

	if (y === 0) return NaN;

	if (x >= 0) {
		if (x < y) {
			return x;
		} else {
			return modulo(x-y, y);
		}
	} else {
		if (-x < y) {
			return x;
		} else {
			return modulo(x+y, y);
		}
	}
  
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
	if (y === 0) return 0;

	if (y > 0) {
		return x + multiply(x, y - 1);
	} else {
		return -x + multiply(x, y + 1);
	}
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.

//I have to assume this is only going to give us numbers that divide evenly
//Update: this was incorrect and my function never finished
//Switched to just truncating the division once abs(x) < abs(y)
//Apparently that's sufficient... that's good
//I couldn't figure out how I would start getting into the decimal part without using multiplication, which isn't allowed

//Comments moved out

//edge case - division by zero
//this does not give the same results as a regular division because regular division gives +/- Infinity, not NaN

//the ridiculous ternary operator expression is a complicated way of comparing the absolute values of x and y without calling Math.abs()
//The "base case" is abs(x) < abs(y), in which case there's not enough divident "left" to divide out another divisor, so return 0 and end (rather than recursing endlessly bouncing back and forth around 0)

//The ^ is the bitwise XOR operator (I had to look up what symbol to use, but I'm familiar with the logical operator)
//XOR's truth table is:
//	T^T => F
//	T^F => T
//	F^T => T
//	F^F => F
//In this case it's a way to check whether x and y have the same sign, regardless of which sign they have
//Mismatched signs are the first branch (the if statement), while matching signs are the else branch
//The return statements have to be different to (1) make sure x is moving toward zero and (2) make sure the accumulating answer has the same sign
//It happens you can use the same return expression for matching signs (regardless of whether x and y are both positive or both negative) and mismatched signs (regardless of which is positive and which is negative)
//I did not rigorously prove this - I just tried it out (originally with a more explicit 4 branch if/else if chain) and confirmed I got the right signs out

var divide = function(x, y) {
	if (y === 0) return NaN;

	if ((x >= 0 ? x : -x) < (y >= 0 ? y : -y)) return 0;

	if (y < 0 ^ x < 0) {
		return -1 + divide(x+y, y);
	} else {
		return 1 + divide(x-y, y);
	}
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
	//edge case - negative inputs
	if (x < 0 || y < 0) return null;

	//base cases
	if (x === 0) return y;
	if (y === 0) return x;

	//recursive case - Euclid's algorithm (which I'd never heard of before this)
	let a = x % y;

	return gcd(y, a);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	//base cases
	if (str1 === "" && str2 === "") return true;

	//tests if only one string is empty but the other isn't
	if (str1 === "" ^ str2 === "") return false;

	//recursive case
	if (str1[0] !== str2[0]) {
		//the first letters being different guarantees the strings are different
		return false;
	} else {
		//but them being the same doesn't guarantee the whole string is the same, so recursively check the substrings
		return compareStr(str1.slice(1), str2.slice(1));
	}
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
	//base case
	if (str.length === 0) return [];

	//recursive case
	return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
	//base case
	if (array.length === 0) return [];

	//recursive case
	return [array[array.length - 1]].concat(reverseArr(array.slice(0, array.length - 1)));
}

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	//edge case - negative length
	if (length < 0) return null;
	//base case
	if (length === 0) return [];

	//recursive case - create an array of length 1, then call buildList recursive to create the rest of the array
	return [value].concat(buildList(value, length - 1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
	//base case - empty array
	if (array.length === 0) return 0;

	//recursive case
	//uses ternary operator to determine if array[0] is the target value, then adds 1 or 0 to the count of the rest of the array accordingly
	return (array[0] === value ? 1 : 0) + countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output=[]) {
	//base case - empty array
	if (array.length === 0) return output;

	//recursive case
	output.push(callback(array[0])); //unlike regular map(), this can't pass the index or the whole array because it doesn't have them

	//process the rest of the array
	return rMap(array.slice(1), callback, output);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
	//initialize count
	//"base case" is that the key is not found and the return value is 0 
	let count = 0; 

	for (let k in obj) {
		if (k === key) {
			count += 1; //increment count for matching keys
		}
		//this can't be an else-if - a given key might be the target, and also have anested object as its value
		if (typeof obj[k] === "object") {
			count += countKeysInObj(obj[k], key); //recursive case - call countKeysInObj on sub-objects and add to count
		}
	}

	return count;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
	//very similar to countKeysInObj, except that it's checking values rather than keys

	//initialize count
	//"base case" is that the value is not found and the return value is 0 
	let count = 0; 

	for (let key in obj) {
		if (obj[key] === value) {
			count += 1; //increment count for matching keys
		}
		//also can't be an else-if - you could, in theory, be searching for an object (by reference)
		if (typeof obj[key] === "object") {
			count += countValuesInObj(obj[key], value); //recursive case - call countValuesInObj on sub-objects and add to count
		}
	}

	return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
	//loop over object's keys
	for(let k in obj) {
		//recursively edit nested objects before changing the keys
		if (typeof obj[k] === "object") {
			obj[k] = replaceKeysInObj(obj[k], key, newKey);
		}

		//now rename the current key, if necessary
		if (k === key) {
			obj[newKey] = obj[key]
			delete obj[key];
		}
	}

	return obj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
	//base cases - <= 0 and 1
	if (n <= 0) return null;
	if (n === 1) return [0, 1];

	//recursive cases
	
	//get previous sequence
	const prev = fibonacci(n-1);
	
	//compute current element
	const nth = prev[prev.length - 2] + prev[prev.length - 1];

	//add current element to array and return
	return prev.concat(nth);
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
	//edge case - negative n
	if (n < 0) return null;

	//base cases
	if (n === 0) return 0;
	if (n === 1) return 1;

	//recursive case
	return nthFibo(n-2) + nthFibo(n-1);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
	//base case - empty array
	if (input.length === 0) return [];

	//recursive case
	const capitalized = input[0].toUpperCase();

	return [capitalized].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
	//like capitalizeWords, except words are changed to title case rather than uppercase

	//base case - empty array
	if (array.length === 0) return [];

	//recursive case
	const capitalized = array[0][0].toUpperCase() + array[0].slice(1);

	return [capitalized].concat(capitalizeFirst(array.slice(1)));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
	//initialize sum
	let sum = 0;

	for (let key in obj) {
		if (typeof obj[key] === "number") {
			if (obj[key] % 2 === 0) {
				sum += obj[key]; //sum even numbers
			} 
		} else if (typeof obj[key] === "object") {
			//it seems this will work for arrays, since the indices are "like" keys (?)
			//I think this will even work for dates and stuff - they'll just bypass the for loop and return 0
			sum += nestedEvenSum(obj[key]); //recursive step - call nestedEvenSum on sub-objects
		}
		//ignore values of other types (strings, etc)
	}

	//return sum. If there are no even numbers in the input object, this will return 0 ("base case")
	return sum;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
	//base case - empty array
	if (arrays.length === 0) return [];

	//recursive case

	//if the first element is a subarray, first is that array flattened
	//otherwise first is simply a flat array consisting of the first element
	let first = Array.isArray(arrays[0]) ? flatten(arrays[0]) : [arrays[0]];

	//concatenate [first] with the rest of the processed array
	//note that first + flatten() will NOT work because it will merge them stringwise
	let rest = flatten(arrays.slice(1));
	return first.concat(flatten(arrays.slice(1)));
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj={}) {
	//base case - empty string
	if (str === "") return obj;

	//if current letter already exists in obj, increment the count
	if (obj.hasOwnProperty(str[0])) {
		obj[str[0]] += 1;
	} else { //otherwise add a new property with a count of one
		obj[str[0]] = 1;
	}

	//process the rest of the string
	return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
	//base case - empty array
	if (list.length === 0) {
		return [];
	}

	//recursive case
	const rest = compress(list.slice(1));

	//only include the first element if it's not a duplicate with the first element of rest
	//if they're the same, omit it
	if (list[0] === rest[0]) {
		return rest;
	} else {
		return [list[0]].concat(rest);
	}
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
	//base case
	if (array.length === 0) return [];

	//recursive case
	let subArray = array[0];
	subArray.push(aug);

	return [subArray].concat(augmentElements(array.slice(1), aug));
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
	//like compress(), except only affects 0's
	
	//base case - empty array
	if (array.length === 0) return [];

	//recursive case
	const rest = minimizeZeroes(array.slice(1));

	//if current element and rest's first element are BOTH 0, omit current element and just return rest
	if (array[0] === 0 && rest[0] === 0) {
		return rest;
	} else { //otherwise include current element
		return [array[0]].concat(rest);
	}
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]

// I have no idea what the test means by "should remove excess zeroes" - none of the test inputs have zeroes, and I didn't test for zeroes...
var alternateSign = function(array) {
	//base cases
	if (array.length === 0) return [];
	if (array.length === 1) return [Math.abs(array[0])]; //make sure a 1 element array is positive

	//recursive
	let prev = alternateSign(array.slice(0, array.length - 1));

	//make sure element to add has the opposite sign as the last element of the array constructed so far
	let toAdd = prev[prev.length - 1] >= 0 ? -Math.abs(array[array.length - 1]) : Math.abs(array[array.length - 1]);

	return prev.concat(toAdd);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
	//base case - empty string
	if (str === "") {
		return "";
	}

	const conversion = {
		"0": "zero",
		"1": "one",
		"2": "two",
		"3": "three",
		"4": "four",
		"5": "five",
		"6": "six",
		"7": "seven",
		"8": "eight",
		"9": "nine"
	};

	//check if first character needs to be converted
	//this could be a one-line ternary operator
	let first;
	if (conversion.hasOwnProperty(str[0])) {
		first = conversion[str[0]];
	} else {
		first = str[0];
	}

	//recursive case - return the first character/word plus the result of processing the rest of the string
	return first + numToText(str.slice(1));

};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
	//note that this has at least one bug / unhandled edge case
	//tagCount('html') returns 2, I think because it picks up the <!DOCTYPE HTML> thing in addition to the actual <html> tag
	//I tried switching from node.nodeName to node.tagName (with a hasOwnProperty check) and that gave the wrong result for at least one of the test cases
	//I really don't know much about interacting with the DOM yet so I'm going to leave it as it

	//make sure node is defined - set to the entire document if not passed a child node
	if (!node) node = document;

	let count = 0;

	//check if current node is tag
	if (node.nodeName.toLowerCase() === tag.toLowerCase()) {
		//console.log(node); // ->  logs the nodes that match the target tag - helpful while debugging
		count += 1;
	}

	//iterate over any child nodes and call tagCount() on them
	//https://developer.mozilla.org/en-US/docs/Web/API/Node#recurse_through_child_nodes
	if (node.hasChildNodes()){
		for (let child of node.childNodes) {
			count += tagCount(tag, child);
		}
	}

	return count;
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
	//this only works if the input array is sorted

	//make sure min and max are defined, so that the initial call doesn't have to give them
	//You could actually use default parameters for this because default params can refer to previous arguments
	if (!min) min = 0;
	if (!max) max = array.length; //not (array.length - 1) b/c the max is exclusive

	//search the array halfway between min and max
	//index can equal min, but not max (unless min and max are equal)
	let index = Math.floor((max - min) / 2) + min;
	let searched = array[index];

	if (searched === target) {
		return index; //base case - found
	} else if ((max - min) <= 1) {
		return null; //base case - not found and nowhere else to look
	} else if (searched < target) {
		return binarySearch(array, target, index, max); //recursive case - target in top half
	} else { 
		return binarySearch(array, target, min, index); //recursive case - target in bottom half
	}
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
	//base case
	if (array.length === 1) return array; 

	//divide and sort halves
	const midpoint = Math.floor(array.length / 2);
	
	let half1 = mergeSort(array.slice(0, midpoint));
	let half2 = mergeSort(array.slice(midpoint));

	//merge

	let sorted = [];

	//since half1 and half2 are each sorted, we just move upwards through them both and move the lower of the two terms to the sorted array

	//i tracks on half1, j tracks on half2
	let i = 0;
	let j = 0;
	
	//there's some special handling in case one half runs out first
	while(i < half1.length || j < half2.length) {
		let item1;
		let item2;

		//avoid indexing out of bounds
		if (i < half1.length) {
			item1 = half1[i];
		}
		if (j < half2.length) {
			item2 = half2[j];
		}

		//if both item1 and item2 are defined, push the smaller of the two
		if (item1 && item2) {
			if (item1 <= item2) {
				sorted.push(item1);
				i++;
			} else {
				sorted.push(item2);
				j++;
			}
		} else if (item1) { //if half2 runs out first
			sorted.push(item1);
			i++;
		} else { //if half1 runs out first
			sorted.push(item2);
			j++;
		}
	}

	return sorted;
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
