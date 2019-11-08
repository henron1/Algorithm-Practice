function alternatingCharacters(s) {
	let minDeletions = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === s[i + 1]) minDeletions++;
	}
	return minDeletions;
}
