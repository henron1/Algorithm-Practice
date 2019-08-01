function balancedParens(string) {
    const checkParens = [];
    // Check if the given index of a string is an '('
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "(") {
            checkParens.push(string[i]);
        }
        // If there is a '(', check if there is a corresponding ')'
        if (string[i] === ")") {
            if (checkParens[checkParens.length - 1] === "(") {
              checkParens.pop()
            }
        }
    }
    // If checkParens === (), return true, else return false
    console.log(checkParens);
    if (checkParens.length) {
        return true;
    } else {
        return false;
    }
    // If checkParens.length == 0 true
}

console.log(balancedParens('()')) // true
console.log(balancedParens(')(')) // false
console.log(balancedParens('()(')) // False