// complete this js code
function Person(name, age) {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}

	function greet(){
		console.log("Hello, my name is ",this.name," I am ",this.age," years old.")
	}
}

function Employee(name, age, jobTitle) {
	constructor(name,age,jobTitle){
		this.name = name;
		this.age = age;
		this.jobTitle = jobTitle;
	}

	function jobGreet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`)
	}

	__proto__ : Person;
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
