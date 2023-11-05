const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	   return num1 -num2
};

const sum = function(numm) {
	let nums = numm;
  let sum = 0
  console.log(nums[0])
  for (let i  = 0; i < nums.length; i++){
    sum += nums[i];
  }
  return sum;
};

const multiply = function(num) {
  let multiply = 1
  let nums = num; 
  for (let i = 0; i < num.length; i++){
      multiply *= nums[i] 
   }
   return multiply;
};

const power = function(num1, num2) {
  let power = 1;

    for (let i = 0; i < num2; i++){
     power *= num1;  
    }
    return power;
  }

const factorial = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = n; i > 1; i--) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
