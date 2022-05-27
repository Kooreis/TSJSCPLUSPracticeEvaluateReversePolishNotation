Here is a JavaScript solution for evaluating an arithmetic expression in Reverse Polish Notation:

```javascript
function evaluateRPN(tokens) {
    let stack = [];
    for (let token of tokens) {
        if (!isNaN(parseInt(token))) {
            stack.push(parseInt(token));
        } else {
            let num2 = stack.pop();
            let num1 = stack.pop();
            switch (token) {
                case "+":
                    stack.push(num1 + num2);
                    break;
                case "-":
                    stack.push(num1 - num2);
                    break;
                case "*":
                    stack.push(num1 * num2);
                    break;
                case "/":
                    stack.push(num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2));
                    break;
            }
        }
    }
    return stack.pop();
}

console.log(evaluateRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evaluateRPN(["4", "13", "5", "/", "+"])); // 6
console.log(evaluateRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // 22
```

This console application reads an array of strings that represent an arithmetic expression in Reverse Polish Notation (RPN), and returns the result of the expression. It uses a stack to store the numbers and performs the operations as they appear.