```javascript
const arr = [];
for (let i = 0; i < 5; i++) {
  arr[i] = new Array(2).fill(() => i);
}
console.log(arr[0][0]()); // Output: 5
console.log(arr[1][0]()); // Output: 5
console.log(arr[2][0]()); // Output: 5
console.log(arr[3][0]()); // Output: 5
console.log(arr[4][0]()); // Output: 5

```