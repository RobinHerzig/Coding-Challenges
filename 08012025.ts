// Evaluate Reverse Polish Notation. (Stack)

function evalRPN(tokens: string[]): number {
  const stack: string[] = [];

  for (const token of tokens) {
    // If number, push to stack.
    if (Number.isInteger(Number(token))) {
      stack.push(token);
      continue;
    }

    // If mathematical expression, pop most recent two values and push result to stack.
    const val1 = Number(stack.pop());
    const val2 = Number(stack.pop());
    let val3 = 0;

    if (token === "+") {
      val3 = val2 + val1;
    } else if (token === "-") {
      val3 = val2 - val1;
    } else if (token === "*") {
      val3 = val2 * val1;
    } else if (token === "/") {
      val3 = Math.trunc(val2 / val1);
    }

    stack.push(String(val3));
  }

  return Number(stack[0]);
}

// console.log(evalRPN(["2", "1", "+", "3", "*"]), 9); // (2 + 1) * 3
// console.log(evalRPN(["4", "13", "5", "/", "+"]), 6); // 4 + (13 / 5)
// console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]), 22); // (((6 / ((9 + 3) * -11)) * 10) + 17) + 5
// https://leetcode.com/problems/evaluate-reverse-polish-notation/

// tokens: string[]. 1 <= tokens.length <= 10^4. tokens[i] equals "+", "-", "*", "/" or integer between [-200, 200].
// Evalute the expression and return the final calculation.
// - Division truncates towards 0.
