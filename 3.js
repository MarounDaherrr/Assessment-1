function findMissingNumber(arr) {
    let n = arr.length + 1;
    let total = 0;
  
    for (let i = 1; i <= n; i++) {
      total = total + i;
    }
  
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
  
    return total - sum;
  }
console.log(findMissingNumber([1, 2, 4, 5, 6])); // 3)