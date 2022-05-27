```cpp
#include <iostream>
#include <stack>
#include <string>
#include <sstream>
#include <vector>

std::vector<std::string> split(const std::string &s, char delim) {
    std::vector<std::string> elems;
    std::stringstream ss(s);
    std::string item;
    while (std::getline(ss, item, delim)) {
        elems.push_back(item);
    }
    return elems;
}

int evalRPN(std::vector<std::string> tokens) {
    std::stack<int> stack;
    for (int i = 0; i < tokens.size(); i++) {
        if (tokens[i] != "+" && tokens[i] != "-" && tokens[i] != "*" && tokens[i] != "/") {
            stack.push(std::stoi(tokens[i]));
        } else {
            int op1 = stack.top();
            stack.pop();
            int op2 = stack.top();
            stack.pop();
            if (tokens[i] == "+") {
                stack.push(op2 + op1);
            } else if (tokens[i] == "-") {
                stack.push(op2 - op1);
            } else if (tokens[i] == "*") {
                stack.push(op2 * op1);
            } else if (tokens[i] == "/") {
                stack.push(op2 / op1);
            }
        }
    }
    return stack.top();
}

int main() {
    std::string input;
    std::getline(std::cin, input);
    std::vector<std::string> tokens = split(input, ' ');
    std::cout << evalRPN(tokens) << std::endl;
    return 0;
}
```