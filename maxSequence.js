var maxSequence = function(arr){
  if (arr.length === 0) {
    return 0;
  }
  
  arr.sort(function(a,b){return a - b});
  console.log(arr);
  
  let newArr = [...new Set(arr)].reverse();
  console.log(newArr);
  
  // need to return 0 if all are negative
  let negative = true;
  let sum = 0;
  
  // checking if all negative
  for (num of newArr) {
    if (num > 0) {
      negative = false;
    }
  }
  
  
  if (negative) {
    return 0;
  } 
  else { 
    return sum;
  }
  
  

}