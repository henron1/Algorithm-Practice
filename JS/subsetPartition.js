const partitionKSubsets = (nums, k) => {
	// if k can't be divided by k or if greater than the sum/k return false
	const sum = nums.reduce((total, num) => total + num);
	if (sum % k !== 0 || nums.some(num => num > sum / k)) {
		return false;
	}
	//track our used numbers
	const alreadusedyUsed = new Set();

	return (function search(start, target) {
		// if all the numbers are used then return true
		if (alreadusedyUsed.size == nums.length) {
			return true;
		}

		// subset sum is too big so return false
		if (target < 0) {
			return false;
		}

		// if I found one subset, keep searching untill all numbers are used
		if (target === 0) {
			return search(0, sum / k);
		}

		// loop through to try unused numbers
		for (let i = start; i < nums.length; i++) {
			if (!alreadusedyUsed.has(i)) {
				alreadusedyUsed.add(i);
				if (search(i + 1, target - nums[i])) {
					return true;
				}
				alreadusedyUsed.delete(i);
			}
		}
		return false;
	})(0, sum / k);
};

// Max of Array Queries
// Problem Statement
// You are given a 1-indexed array of zeros as well as a list of queries. These queries have the following form:

//   start end    k
//    1     5     3
//    4     8     7
//    6     9     1
// For each query, the value k must be added to all of the values in the array between the start and end indices, inclusive. Then, once all of the queries have been applied to the array, your function should return the maximum value in the array.

// For example, given the above listed queries and an array of length 10, the queries should be applied to the array like so:

//   indices->                         1 2 3  4  5 6 7 8 9 10
//                                   [0,0,0, 0, 0,0,0,0,0, 0]
//   add 3 to elements 1 thru 5->  [3,3,3, 3, 3,0,0,0,0, 0]
//   add 7 to elements 4 thru 8->  [3,3,3,10,10,7,7,7,0, 0]
//   add 1 to elements 6 thru 9->  [3,3,3,10,10,8,8,8,1, 0]
// The largest value in the array after all the queries have been applied is 10, so that's what our function needs to return.

function maxArrayQueries(n, queries) {
	let filledArray = new Array(n).fill(0);

	for (let i = 0; i < queries.length; i++) {
		for (let j = queries[i][0] - 1; j < queries[i][1]; j++) {
			filledArray[j] += queries[i][2];
		}
	}

	console.log(filledArray);

	return Math.max(...filledArray);
}

let m = 10;
let q = [[1, 5, 3], [4, 8, 7], [6, 9, 1]];

console.log(maxArrayQueries(m, q));

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
