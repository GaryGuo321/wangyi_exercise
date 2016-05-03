//[0-999]
var number = Math.floor(Math.random() * 1000);
console.log(number);
//[1-1000]-1 -> [0-999]
var number1 = Math.ceil(Math.random() * 1000) - 1;
console.log(number1);
//parseInt不进行四舍五入[0-999]
var number2 = parseInt(Math.random() * 1000);
console.log(number2);