function isPangram(string){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (letter of alphabet) {
    if (!string.includes(letter) && !string.includes(letter.toUpperCase())) {
      return false;
      }
  }
  return true;
}