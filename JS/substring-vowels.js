function findSubstring(s, k) {
	let array = s.split("");
	let resultMax = 0;
	let maxVowels = 0;
	let result = "";

	if (
		!s.includes("a") &&
		!s.includes("e") &&
		!s.includes("i") &&
		!s.includes("o") &&
		!s.includes("u")
	)
		return "Not found!";

	for (let i = 0; i < array.length - k; i++) {
		const test = array.slice(i, k + i);
		maxVowels = 0;
		for (let i = 0; i < test.length; i++) {
			if (
				test[i] === "a" ||
				test[i] === "e" ||
				test[i] === "i" ||
				test[i] === "o" ||
				test[i] === "u"
			) {
				maxVowels = maxVowels + 1;
			}
			if (maxVowels > resultMax) {
				resultMax = maxVowels;
				result = test.join("");
			}
		}
	}
	// console.log(`${result}`);
	return result;
}

findSubstring("azerdii", 5);
