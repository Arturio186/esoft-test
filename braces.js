function isValidExpression(string) {
    const braces = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    const openBraces = Object.keys(braces)

    const stack = [];

    for (let i = 0; i < string.length; i++) {
        char = string[i]

        if (openBraces.indexOf(char) !== -1) {
            stack.push(char);
        }
        else {
            const lastBrace = stack.pop();

            if (char !== braces[lastBrace]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}


console.log(isValidExpression("()")); 
console.log(isValidExpression("()(((()")); 
console.log(isValidExpression("()[]{}")); 
console.log(isValidExpression("(]")); 
console.log(isValidExpression("([)]")); 
console.log(isValidExpression("{[]}"));
