# Acadgild_FrontEnd_Dev_Assign2.1

Acadgild 

Front End Web Development ES6 and Angular Course, 

Assignment 2.1

Assignment completed April 2017 by Michele Cannito Buch.


This repository consists of a stand-alone .js file, assign2_1_b.js, for assignment Parts 2, 3, and 4, 

and a set of files that work together for Part 1. 


The files for Part 1 are index2_1.html, assign2_1.css, index2_1_a.js, and an images folder which contains 3 pictures. 
It is important to open the html file in the browser to fully appreciate the work.

Note: Instruction quotes are from Acadgild text.

Part 1: 

Instructions: 

"1. Often we have nested functions in which we would like to preserve the context

of this from its lexical scope. An example is shown below:

function Person(name) {

 this.name = name;
 
}

Person.prototype.prefixName = function (arr) {

 return arr.map(function (character) {
 
 return this.name + character;
 
 }, this);
 
};

Using Arrow Functions, the lexical value of this isn't shadowed. So re-write the

above code using arrow function."


My approach: 

I created a web page with buttons to demonstrate each of the following:

a) I first changed the assignment to add an honorific (Dr. Miss, Mrs., etc. to the beginning of a name.) Then I got that code to work
without the arrow function.

b) I then rewrote a) to use the arrow function.

c) The code was very complicated, and I saw that using the forEach method made it much simplier. So I rewrote to use that.

d) I used similar arrow function code to change 3-letter words to 4-letter words by adding a final "e".

e) I then used arrow functions to do the original assignment of adding an ending character to a name. I used numbers for the character.


Solutions for Parts 2, 3, and 4 are in stand-alone  assign2_1_b.js file. Below are the instructions for each part.

Part 2:

Instruction:
"2. Create Object destructuring for user where user has: 

1. First Name, 2. Last Name, 3. Date of Birth, then assign this object in other object like:

let obj = { first: 'Avnesh', last: 'Shakya' };

let {first: f, last: l} = obj;

Then use this object in other function to display full name with date of birth."

Part 3:

Instruction:

"3. Create Array destructuring (which works for all iterable values) where you have
all your friends name then console one by one all separately.

var foo = ["one", "two", "three"];

var [one, two, three] = foo;

console.log(one); // "one"   "

Part 4:

Instruction:

"4. Replace IIFEs with Blocks, For example:

(function () { var food = 'Meow Mix'; }() );

console.log(food); // Reference Error

So same create block object where define User’s detail and
try to excess from outside of block and inside also."

