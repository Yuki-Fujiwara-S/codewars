function generateHashtag (str) {
  let rightArr = str.trim().split(" ");
  console.log(rightArr);
  
  if (!rightArr[0]) {
    return false;
  }
  
 rhs = rightArr.map(elm => 
    elm.charAt(0).toUpperCase() + elm.slice(1)
  );
  
  let result = "#" + rhs.join("");
  
  if (result.length > 140) {
    return false;
  }
  
  return result;
}