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
