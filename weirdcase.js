function toWeirdCase(string){
  const strArr = string.split(' ');
  let newArr = [];
  for (let i = 0; i < strArr.length; i++) {
    newArr.push(convertWord(strArr[i]) + " ");
  }
  
  return newArr.join("").trim();
}

function convertWord(word){
  const wordArr = word.split("");
  let newArr = [];
  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      newArr.push(wordArr[i].toUpperCase());
      } else {
      newArr.push(wordArr[i].toLowerCase());
      }
  }
  return newArr.join("");
}