function multiplesOf3and5(number) {
    // Good luck!
    let counter = 0
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            counter += i
        }
    }
    return counter;
}
console.log(multiplesOf3and5(1000))
