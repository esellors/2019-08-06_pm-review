// // discuss: let, const, var, scope

// discuss: comparison operators (equality, relational)

// // function: calculator, if statements
// function calculator(num1, num2, operation) {
//   if (typeof num1 !== "number" || typeof num2 !== 'number') {
//     return "Please enter numbers"
//   }
//   if (operation === '+') {
//     return num1 + num2;
//   } else if (operation === '*') {
//     return num1 * num2;
//   } else if (operation === '/') {
//     return num1 / num2;
//   } else if (operation === '-') {
//     return num1 - num2;
//   } else {
//     return console.log('Please choose a correct operation')
//   }
// }

// console.log(calculator(12, 'a', '+'));

// function: cupcake maker

// function: returning function (calculator revisited)

function carMaker(type) {
	let vehicle = type;

	return function(color, year) {
		return `Your ${type} is year ${year} and ${color}!`;
	};
}

let truck = carMaker('truck');
let motorcycle = carMaker('motorcycle');

// truck('green', 2015)
motorcycle('black and yellow', 2020);
