function solution(number){
  // convert the number to a roman numeral
  const numberArr = number.toString().split("");
  
  if (numberArr.length === 1) {
    return helper(number);
  }
  if (numberArr.length === 2) {
    let rhs = helper(Number(numberArr[1]));
    return 'X'.repeat(numberArr[0]) + rhs;
  }
  if (numberArr.length === 3) {
    let rhs = helper(Number(numberArr[1]));
    return 'C'.repeat(numberArr[0]) + rhs;
  }
  if (numberArr.length === 4) {
    let second = helper(Number(numberArr[1]));
    let third = helper(Number(numberArr[2]));
    let fourth = helper(Number(numberArr[3]));
    return 'M'.repeat(numberArr[0]) + second + third + fourth;
  }
}

function helper(number) {
  switch (number) {
      case 0:
       return '';
      case 4: 
        return 'IV';
       case 5: 
        return 'V';
      case 9:
        return 'IX';
      case 10:
        return 'X';
      default:
        return 'I'.repeat(number);
  }
}