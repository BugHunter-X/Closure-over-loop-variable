```javascript
const arr = [];
for (let i = 0; i < 5; i++) {
  // Create a new scope for each iteration using an IIFE
  (() => {
    const j = i; // Capture the current value of 'i'
    arr[i] = new Array(2).fill(() => j); // Use 'j' in the arrow function
  })();
}
console.log(arr[0][0]()); // Output: 0
console.log(arr[1][0]()); // Output: 1
console.log(arr[2][0]()); // Output: 2
console.log(arr[3][0]()); // Output: 3
console.log(arr[4][0]()); // Output: 4
```