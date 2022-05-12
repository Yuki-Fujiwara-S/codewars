String.prototype.toJadenCase = function () {
  let str = "";
  for (let i = 0; i < this.length; i++) {
    if (this[i - 1] === " " || i === 0) {
      str += (this[i].toUpperCase());
    } else {
      str += (this[i])   
    } 
  }
  return str;
};

// Refactored solution

String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}