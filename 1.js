function reverseString(str) {
    let result = "";
    let i = str.length - 1;
  
    while (i >= 0) {
      result = result + str[i];
      i = i - 1;
    }
  
    return result;
  }
console.log(reverseString("hello"));