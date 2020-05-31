// Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

function sumSquareDifference(n) {
	// Good luck!
	let sums = 0;
	let squares = 0;
	for (let i = 1; i <= n; i++) {
		sums += Math.pow(i, 2);
	}
	for (let j = 1; j <= n; j++) {
		squares += j;
	}
	console.log(sums);
	console.log(squares);
	return Math.pow(squares, 2) - sums;
}
