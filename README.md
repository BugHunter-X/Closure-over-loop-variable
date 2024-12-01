## Closure over loop variable

This bug demonstrates a common issue when using closures within loops in Javascript. The arrow functions within the loop do not capture the current value of the loop variable `i`. Instead, they reference the same variable, which holds its final value (5) after the loop finishes.

### Bug Demonstration

The `bug.js` file contains code that illustrates this bug.

### Solution

The `bugSolution.js` file provides a solution to this bug by creating a new scope for each iteration of the loop. This ensures that each arrow function captures the correct value of the loop variable `i`.

This bug highlights the importance of understanding how closures work in Javascript and how to avoid common pitfalls when using them within loops.