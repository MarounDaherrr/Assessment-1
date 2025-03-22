function countVowels(str) {
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      let letter = str[i];
      if (
        letter === "a" || letter === "e" || letter === "i" ||
        letter === "o" || letter === "u" ||
        letter === "A" || letter === "E" || letter === "I" ||
        letter === "O" || letter === "U"
      ) {
        count = count + 1;
      }
    }
  
    return count;
  }
console.log(countVowels("typescript"));