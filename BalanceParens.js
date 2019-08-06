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

function balancedParens(string) {
    // Create a dictionary/object; key is open parens, value is close parens
    const openers = { 
      '(': ')',
      '[': ']',
      '{': '}'
      };
    // Create stack and check if open: add to stack; if close: check value of stack
    const stack = [];
    // Run for loop on values of the string
    for (let i = 0; i < string.length; i++) {
      if (openers[string[i]]) {
        stack.push(string[i]);
      // If stack has open parens, pop off stack
      } else if (stack[stack.length - 1] === '(') {
        stack.pop();
      // Else return false
      } else {
        return false;
      }
    }
    // return true
    return stack.length == 0;
  }
  