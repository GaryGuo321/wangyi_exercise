function People(name, age) {
	this.name = name;
	this.age = age;
}
People.prototype.introduce = function() {
	return "I am " + this.name + ", I am " + this.age + " years old! ";
}

var jerry = new People("Jerry", 2);
var tom = new People("Tom", 12);
console.log(jerry.introduce()); //I am Jerry, I am 2 years old! 
console.log(tom.introduce()); //I am Tom, I am 12 years old!