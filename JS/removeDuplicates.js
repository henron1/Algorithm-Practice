// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// function removeDuplicates(nums) {
// 	if (nums.length === 0) return 0;
// 	let i = 0;
// 	for (let j = 1; j < nums.length; j++) {
// 		if (nums[j] != nums[i]) {
// 			i++;
// 			nums[i] = nums[j];
// 		}
// 	}
// 	return i + 1;
// }

const nums = [1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 8, 9];
var findDuplicates = function(nums) {
	var res = [],
		index,
		i;

	for (i = 0; i < nums.length; i++) {
		index = Math.abs(nums[i]) - 1;

		if (nums[index] < 0) res.push(index + 1);
		else nums[index] *= -1;
	}

	console.log(res);
};
