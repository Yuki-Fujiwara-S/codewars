function solution(number){
  let sum = 0;
  
  for (let i = 1; i < number; i++) if (i%3 === 0 || i%5 === 0) sum += i;
  
  return sum;
}


//Different solution that is interesting

function solution(number){
  var n3 = Math.floor(--number/3), n5 = Math.floor(number/5), n15 = Math.floor(number/15);
  return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15+1)) /2;
}