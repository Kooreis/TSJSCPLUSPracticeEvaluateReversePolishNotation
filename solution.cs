else {
            let num2 = stack.pop();
            let num1 = stack.pop();
            switch (token) {
                case "+":
                    stack.push(num1 + num2);
                    break;