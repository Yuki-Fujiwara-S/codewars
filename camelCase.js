function toCamelCase(str){
  let dashArr = [];
  for (let i = 0; i < str.length; i++) {
    if(str[i]==="-" || str[i]==="_") {
      dashArr.push(i);
    }
  }
  
  console.log(dashArr)
  let newStr = "";
 
  let startNum = 0;
    for (let index of dashArr) {      
      newStr += str.slice(startNum, index) + str[index + 1].toUpperCase()
      startNum += index+2;
    }
  
  newStr += str.slice(dashArr.reverse()[0] + 2);
  
  console.log(newStr)
  
  return newStr;
  
}