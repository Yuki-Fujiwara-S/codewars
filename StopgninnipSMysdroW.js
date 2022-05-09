function spinWords(string){ 
  mappedArr = string.split(" ").map(function(word) {
    if (word.length >= 5){
      return word.split("").reverse().join("");
    } else {
      return word;
    }
  })
  return mappedArr.join(" ");
}