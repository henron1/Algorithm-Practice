var inOrderTraversal = function(root, stack = []) {
	if (root !== null) {
		inOrderTraversal(root.left, stack);
		stack.push(tree.value);
		inOrderTraversal(root.right, stack);
	}
	return stack;
};

var inOrderTraversal = function(root, stack = []) {
	if (root !== null) {
		inOrderTraversal(root.left, stack);
		stack.push(tree.value);
		inOrderTraversal(root.right, stack);
	}
	return stack;
};

// Create a function that prints out a calendar.
// Do not use any built-in calendar functions :)

// Givens:
// * The number of days in the month
// * The start day of the month

function printCal(numberOfDays, startDay) {
	let output = [["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]];
	let day = 1;
	// add days of the month
	while (day <= numberOfDays) {
		let emptyWeek = Array(7).fill("  ");

		while (startDay < 7 && day <= numberOfDays) {
			emptyWeek[startDay] = day < 10 ? ` ${day}` : day;
			startDay++;
			day++;
		}
		output.push(emptyWeek);
		startDay = 0;
	}
	// print output
	for (let arr of output) {
		console.log(arr.join(" "));
	}
}

// array that holds our days of the week and our resulting arrays
// create an array for our empty days
// counter that keeps track of the days written
// while start day is less than 7 && day <= number of days
// set value for day in that array
// ++ startday
// ++ day
// push the week into the results array
// start day = 0

// iterate through output and join(" ")

// This function should print something like the following:

// Su Mo Tu We Th Fr Sa
//                    1
// 2  3  4  5  6  7  8
// 9 10 11 12 13 14 15
// 16 17 18 19 20 21 22
// 23 24 25 26 27 28 29
// 30 31

printCal(31, 3);
