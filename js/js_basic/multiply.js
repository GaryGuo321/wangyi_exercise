function multiply() {
	var total = 1;
	// 如果参数少于2个就返回0
	if (arguments.length < 2) {
		return 0;
	} else {
		for (var i = 0; i < arguments.length; i++) {
			total *= arguments[i];
		}
		return total;
	}
}
var product = multiply(-1, 3, 4);
console.log(product); //-12
var product1 = multiply(1, 2, 3, 4, 5);
console.log(product1); //120
var product2 = multiply(1);
console.log(product2); //0
var product3 = multiply(3, 4);
console.log(product3); //12