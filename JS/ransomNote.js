function constructNote(magazine, note) {
	// Write your code here
	const noteIsPossible = note.every(word => {
		const indexofWord = magazine.indexOf(word);
		// checkint to see if it it's in the array
		if (indexofWord > -1) {
			// take out the word and return yes!
			magazine.splice(indexofWord, 1);
			return "Yes";
		}
	});
	return noteIsPossible;
}
