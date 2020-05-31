// let thousandDigits = [7,3,1,6,7,1]
function largestProductinaSeries(n) {
	let maxProduct = 0;
	for (let i = 0; i < thousandDigits.length - n; i++) {
		const array = thousandDigits.slice(i, i + n);
		// const product = checkProduct(array);
		const product = array.reduce((acc, number) => (acc *= number), 1);
		console.log(array, product);
		if (product > maxProduct) {
			maxProduct = product;
		}
	}
	return maxProduct;
}

// function checkProduct(array) {
//   return array.reduce((acc, number) => acc *= number, 1)
// }

console.log(largestProductinaSeries(4));
