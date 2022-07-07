function generateHashtag (str) {
  let rightArr = str.trim().split("");
  console.log(rightArr);
  
  if (rightArr.length === 0) {
    return false;
  }
  
  rhs = rightArr.map(elm => 
    elm[0].toUpperCase() + elm.slice(1)
  );
  
  let result = "#" + rhs.join("");
  
  if (result.length > 140) {
    return false;
  }
  