// Write a function integerPairs to find and print out all pairs of integers within an input array which sum up to a specified input value k.

// There are multiple ways to do this, depending upon whether you want to favor runtime or space.

// Example:

// input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11

// expected output: '6 5', '7 4', '8 3', '9 2', '10 1'
// Analyze the time and space complexity of your solution.

function integerPairs(nums, target) {
	const result = [];
	for (let i = 0; i < nums.length - 1; i++) {
		let firstNumber = nums[i];
		for (let j = 1; j < nums.length; j++) {
			let secondNumber = nums[j];
			if (nums[firstNumber] + nums[secondNumber] === target) {
				result.push(`'${nums[firstNumber]}, ${nums[secondNumber]}'`);
				j++;
			}
		}
	}
	return result;
}

console.log(integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
