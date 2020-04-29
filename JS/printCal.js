// Create a function that prints out a calendar.
// Do not use any built-in calendar functions :)

// Givens:
// * The number of days in the month
// * The start day of the month

// function printCal(numberOfDays, startDay) {
// 	let output = [["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]];
// 	let day = 1;
// 	// add days of the month
// 	while (day <= numberOfDays) {
// 		let emptyWeek = Array(7).fill("  ");

// 		while (startDay < 7 && day <= numberOfDays) {
// 			emptyWeek[startDay] = day < 10 ? ` ${day}` : day;
// 			startDay++;
// 			day++;
// 		}
// 		output.push(emptyWeek);
// 		startDay = 0;
// 	}
// 	// print output
// 	for (let arr of output) {
// 		console.log(arr.join(" "));
// 	}
// }

// array that holds our days of the week and our answerulting arrays
// create an array for our empty days
// counter that keeps track of the days written
// while start day is less than 7 && day <= number of days
// set value for day in that array
// ++ startday
// ++ day
// push the week into the answerults array
// start day = 0

// iterate through output and join(" ")

// Su Mo Tu We Th Fr Sa
//                    1
// 2  3  4  5  6  7  8
// 9 10 11 12 13 14 15
// 16 17 18 19 20 21 22
// 23 24 25 26 27 28 29
// 30 31

// printCal(31, 3);

// function isMatch(s, p) {
// 	const m = s.length;
// 	const n = p.length;
// 	let i = 0;
// 	let j = 0;
// 	const stack = [];
// 	while (i < m) {
// 		if (s[i] === p[j] || p[j] === "?") {
// 			i += 1;
// 			j += 1;
// 		} else if (p[j] === "*") {
// 			stack.push([i + 1, j]);
// 			j += 1;
// 		} else if (stack.length) {
// 			[i, j] = stack.pop();
// 		} else {
// 			return false;
// 		}
// 	}
// 	while (j < n) {
// 		if (p[j] !== "*") {
// 			return false;
// 		}
// 		j += 1;
// 	}
// 	return true;
// }

var tests = ["test3", "HUGEtest", "test99", "test-pleasework", "wowtest-cool"];

function isMember(words, query) {
	// return false if words empty
	if (typeof words === "undefined" || words.length === 0) return false;
	// If the string is empty return false
	if (typeof query === "undefined" || query.length === 0) return false;

	// Init an array to hold the final answer.
	var answer = [];

	// Find index where the * starts in the string
	var starIdx = query.indexOf("*");

	// If the star is the first character
	if (starIdx === 0) {
		// Get the string without the star
		query = query.substr(1);
		for (var i = 0; i < words.length; i++) {
			// Check if each item contains an indexOf function
			if (!words[i].indexOf) continue;
			// see if string is at end of each itemis at the end of each item.
			if (words[i].indexOf(query) === words[i].length - query.length) {
				// If it is, add the item to the answer array.
				answer.push(words[i]);
			}
		}
	}
	// Otherwise, if the star is the last character
	else if (starIdx === query.length - 1) {
		// Get the string without the star.
		query = query.substr(0, query.length - 1);
		for (var i = 0; i < words.length; i++) {
			// Check index
			if (!words[i].indexOf) continue;
			// Check if the string is at the beginning of each item
			if (words[i].indexOf(query) === 0) {
				// If it is, add the item to the answer array.
				answer.push(words[i]);
			}
		}
	}
	// if nothing above is satisfied
	else {
		for (var i = 0; i < words.length; i++) {
			// Check index
			if (!words[i].indexOf) continue;
			// Check if the string is anywhere in the elements
			if (words[i].indexOf(query) !== -1) {
				// If it is, add the item to the answer array
				answer.push(words[i]);
			}
		}
	}

	return answer;
}

console.log(isMember(tests, "test*"));
console.log(isMember(tests, "*test"));
console.log(isMember(tests, "test"));
