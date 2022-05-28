function evaluateRPN(tokens) {
    let stack = [];
    for (let token of tokens) {
        if (!isNaN(parseInt(token))) {
            stack.push(parseInt(token));
        }