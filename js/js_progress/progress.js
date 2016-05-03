// 实现type函数用于识别标准类型和内置对象类型
function type(val) {
	var str = Object.prototype.toString.call(val);
	return str.slice(8, -1);
}
var t = type(/\d/);
console.log(t); //RegExp

// Object.create兼容实现
if (!Object.create) {
	Object.create = function(o) {
		function F() {};
		F.prototype = o;
		return new F();
	}
}
// 兼容低版本浏览器的bind方法的代码实现
if (!Function.prototype.bind) {
	Function.prototype.bind = function(context) {
		var self = this;
		var args = Array.prototype.slice.call(arguments);
		return function() {
			return self.apply(context, args.slice(1));
		}
	};
}
// 请实现一个函数，参数为n，返回结果为以n为下标的斐波那契数
function fibonacci(n) {
	var f0 = 0,
		f1 = 1;
	if (n == 1) {
		return f0;
	} else if (n == 2) {
		return f1;
	} else {
		// n>=3时
		for (var i = 0; i < (Math.ceil(n / 2) - 1); i++) {
			// 每一次循环输出两个值，所以只要循环n/2次，-1是因为默认定义了第一个和第二个的值
			f0 = f0 + f1;
			f1 = f1 + f0;
		}
	}
	// 如果n是奇数输出f0, 偶数输出f1
	if (n % 2 == 0) {
		return f1;
	} else {
		return f0;
	}
}
console.log(fibonacci(1)); //0
console.log(fibonacci(2)); //1
console.log(fibonacci(3)); //1
console.log(fibonacci(4)); //2
console.log(fibonacci(5)); //3
console.log(fibonacci(6)); //5
console.log(fibonacci(7)); //8
console.log(fibonacci(8)); //13
console.log(fibonacci(9)); //21
console.log(fibonacci(10)); //34