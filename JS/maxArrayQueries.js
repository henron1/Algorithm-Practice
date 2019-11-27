function maxArrayQueries(n, queries) {
	let arr = [];
	let max = 0;

	for (let i = 0; i < n; i++) {
		arr[i] = 0;
	}
	// for each sum operation in queries
	for (let j = 0; j < queries.length; j++) {
		// update array with number to add at index=queries[i][0]  and number to remove at index=queries[i][0]+1 => this will let us create each element of the final array by summing all elements before it. The aim of this trick is to lower time complexity
		arr[queries[j][0] - 1] += queries[j][2];
		if (queries[j][1] < arr.length) {
			arr[queries[j][1]] -= queries[j][2];
		}
	}

	for (let k = 1; k < n; k++) {
		arr[k] += arr[k - 1];
	}

	for (let l = 0; l < arr.length; l++) {
		max = Math.max(max, arr[l]);
	}
	return max;
}

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
let q = [
	[1, 5, 3],
	[4, 8, 7],
	[6, 9, 1]
];

console.log(maxArrayQueries(m, q));
