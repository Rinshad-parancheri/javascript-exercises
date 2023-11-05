const fibonacci = function(n) {
  let sum = [0, 1]
  if (n == 1 || n == 2){
    return 1;
  }else if (n < 0){
    return 'OOPS'
}
  for (let i = 2; i <= n; i++){

      sum[i] = sum[i - 1] + sum[i -2];
 }
 return sum[n];
    
};

// Do not edit below this line
module.exports = fibonacci;
