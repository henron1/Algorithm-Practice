function constructNote(magazine, note) {
	// Write your code here
	const noteIsPossible = note.every(word => {
		const indexofWord = magazine.indexOf(word);
		if (indexofWord > -1) {
			magazine.splice(indexofWord, 1);
			return "Yes";
		}
	});
	return noteIsPossible;
}
