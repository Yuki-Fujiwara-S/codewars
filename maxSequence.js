var maxSequence = function(arr){
  if (arr.length === 0) {
    return 0;
  }
  
  arr.sort();
  console.log(arr);
  
  let newArr = [...new Set(arr)].reverse();
  console.log(newArr);
  
  // return with if statement

}