function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)

	A = A.filter((x) => x >= 1).sort((a, b) => a - b);
	let x = 1;
	for (let i = 0; i < A.length; i++) {
		if (x < A[i]) {
			return x;
		}
		x = A[i] + 1;
	}
	return x;
}

console.log(solution([1, 2, 4, 3, 5, 6, 8]));
