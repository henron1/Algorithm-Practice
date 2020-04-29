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
		// Get the string without the star
		query = query.substr(0, query.length - 1);
		for (var i = 0; i < words.length; i++) {
			// Check index
			if (!words[i].indexOf) continue;
			// Check if the string is at the start of each item
			if (words[i].indexOf(query) === 0) {
				// If it is, add the item to the answer array
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
