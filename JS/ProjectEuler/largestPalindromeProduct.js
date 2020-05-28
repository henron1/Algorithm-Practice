// 9009 = 91 x 99
// find largest palindrome made from the product of two n-digit numbers

// build function to check is palindrome


function largestPalindromeProduct(n) {
    const palindromes = [];
    const number = Array(n).fill(9).join('')

    for (let i = number; i >= 1; i--) {
        for (let j = number; j >= 1; j--) {
            const result = i * j;
            if (isPalindrome(result)) {
                palindromes.push(result)
            }
        }
    }
    return Math.max(...palindromes)
}

function isPalindrome(number) {
    return number.toString() === number.toString().split('').reverse().join('')
}
console.log(largestPalindromeProduct(2))
console.log(largestPalindromeProduct(3))
console.log(largestPalindromeProduct(4))