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
