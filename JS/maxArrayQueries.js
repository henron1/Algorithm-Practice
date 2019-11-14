function maxArrayQueries(n, queries) {
	// Write your code here
	let arr = [];
	let max = 0;

	// init each element of arr to 0
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
