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