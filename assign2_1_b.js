/*
Michele Cannito, Acadgild ES6 & Angular Course, Session 2, Assignment 1; April 2017

PART 2
Instructions:
Create Object destructuring for user where user has: 
1. First Name, 2. Last Name, 3. Date of Birth, 
then assign this object in other object like:
let obj = { first: 'Avnesh', last: 'Shakya' };
let {first: f, last: l} = obj;
Then use this object in other function to display full name with date of birth.
*/
let detective = {firstName: "Sherlock", lastName: "Holmes", dateOfBirth: "January 6, 1854"};
let {firstName: fn, lastName: ln, dateOfBirth: dob} = detective;

function writeName(person) {
	console.log(fn + " " + ln + ", " + dob);
}
writeName(detective);

/*
PART 3
Instructions:
Create Array destructuring (which works for all iterable values) where you have
all your friends name then console one by one all separately.
var foo = ["one", "two", "three"];
var [one, two, three] = foo;
console.log(one); // "one"
*/
var friends = ["Randy", "Tom", "Glen"];
var [f1, f2, f3] = friends;
console.log(f1);
console.log(f2);
console.log(f3);
/*
PART 4
Instructions:
Replace IIFEs with Blocks, For example:
(function () { var food = 'Meow Mix'; }() );
console.log(food); // Reference Error
So same create block object where define User’s detail and
try to excess from outside of block and inside also.
*/
{
	const pet = "Cat";
	const food = "Meow Mix";
	var tryThis = {
		pet: pet,
		food: food
	}
	//Access food within {} = no error:
	console.log(`const food within curly braces value is ${food}`);
	//Can also access food within {} this way:
	console.log(tryThis.food);
}
//Access food outside of {} will give an error:
//console.log(food); //ReferenceError
//Can access food outside of {} this way:
console.log(tryThis.food);
//Said another way--
//console.log(`const food outside curly braces value is ${food}`);  //ReferenceError
console.log(`The correct way to reference outside the curly braces is ${tryThis.food}`);