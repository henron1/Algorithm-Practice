function reverseString(str) {
	revString = "";
	for (let i = str.length - 1; i >= 0; i--) {
		revString = revString + str[i];
	}
	return revString;
}

reverseString("hello");

function reverseString(str) {
	return str
		.split("")
		.reverse()
		.join("");
}

reverseString("hello");

function reverseString(str) {
	let revString = "";

	for (let char of str) {
		revString = char + revString;
	}
	return revString;
}

reverseString("hello");

function reverseString(str) {
	let revString = "";
	str.split("").forEach(char => (revString = char + revString));
	return revString;
}

reverseString("hello");

function reverseString(str) {
	// reduce takes in a function and a second parameter of what you want to start with. In this case it's an empty string.
	return str.split("").reduce((revString, char) => {
		return char + revString;
	}, "");
}

reverseString("hello");

// with reduce, like other HOM map and filter it actually returns another array. you can actually return from it unlike forEach.
