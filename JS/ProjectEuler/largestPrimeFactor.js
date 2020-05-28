function largestPrimeFactor(number) {
    if (isPrime(number)) return number
    let largest = 1;
    for (let i = 1; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0 && isPrime(i)) {
            largest = i;
        }
    }
    return largest
}

function isPrime(number) {
    if (number % 2 === 0 && number !== 2) return false
    for (let i = 3; i < Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

