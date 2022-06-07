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


// alternate solution
function toWeirdCase(string){
  return string.split(' ').map(function(word){
    return word.split('').map(function(letter, index){
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}


// anothersolution

function toWeirdCaseCharacter(chr, index)
{
  return index % 2 ? chr.toLowerCase() : chr.toUpperCase();
}

function toWeirdCaseWord(word){
  return word.split("").map(toWeirdCaseCharacter).join("");
}

function toWeirdCase(string){
  return string.split(" ").map(toWeirdCaseWord).join(" ");
}