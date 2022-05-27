Here is a TypeScript solution for evaluating an arithmetic expression in Reverse Polish Notation:

```typescript
function evaluateRPN(tokens: string[]): number {
    let stack: number[] = [];
    let operators: string[] = ["+", "-", "*", "/"];

    for (let token of tokens) {
        if (operators.includes(token)) {
            let num2 = stack.pop() as number;
            let num1 = stack.pop() as number;
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
                    stack.push(num1 / num2);
                    break;
            }
        } else {
            stack.push(Number(token));
        }
    }

    return stack.pop() as number;
}

let tokens: string[] = ["2", "1", "+", "3", "*"];
console.log(evaluateRPN(tokens)); // Output: 9
```

This TypeScript solution uses a stack to store the numbers in the Reverse Polish Notation expression. It iterates through the tokens in the expression. If the token is an operator, it pops the top two numbers from the stack, performs the operation, and pushes the result back onto the stack. If the token is a number, it pushes it onto the stack. At the end, the stack should contain only one number, which is the result of the expression.