// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it.
//If there is no such character, return '_'.

function firstNotRepeatingCharacter(s) {
	for (i = 0; i < s.length; i++) {
		if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
			return s[i];
		}
	}
	return "_";
}
