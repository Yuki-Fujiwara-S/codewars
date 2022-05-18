function isPangram(string){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (letter of alphabet) {
    if (!string.includes(letter) && !string.includes(letter.toUpperCase())) {
      return false;
      }
  }
  return true;
}

//alternate solution
function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}
