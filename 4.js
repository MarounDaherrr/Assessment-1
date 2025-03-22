function firstNonRepeatingChar(str) {
    for (let i = 0; i < str.length; i++) {
      let letter = str[i];
      let count = 0;
  
      for (let j = 0; j < str.length; j++) {
        if (str[j] === letter) {
          count = count + 1;
        }
      }
  
      if (count === 1) {
        return letter;
      }
    }
  
    return null;
  }
console.log(firstNonRepeatingChar("swiss")); // "w"
console.log(firstNonRepeatingChar("racecar")); // "e"