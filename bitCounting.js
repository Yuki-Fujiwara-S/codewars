var countBits = function(n) {
  let binary = (n >>> 0).toString(2);
  let count = 0;
  for(let elm of binary){
    if (elm == 1) {
      count++;
    }
  }
  
  return count;
};