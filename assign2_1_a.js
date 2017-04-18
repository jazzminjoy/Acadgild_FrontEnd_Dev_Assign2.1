// Michele Cannito Acadgild Front End Web Dev, Session 2, Assignment 1a
// Demo Button
function myFunction() {
   document.getElementById("demo").innerHTML = 
   "This text was added when you clicked the button.";
}

// This function is used by all 3 methods (original, forEach, Arrow)
function Person(name) {
		this.name = name;
		return this.name;
}

// Session 2, Assignment 1, Part 1, Original Code (slighltly modified)
function function1a(){
	
	Person.prototype.prefixName = function(arr) {
		return arr.map(function (honorific) {
			return ("<br>" + honorific + " " + this.name);
		}, this);
	};
			
	var p1 = new Person("Cannito");
	document.getElementById("part1a").innerHTML = 
	(p1.prefixName(["Dr.", "Ms.", "Mrs.", "Miss", "Mr."]));
};

// Session 2, Assignment 1, Part 1, forEach Method
function function1b(){

// Variables used in forEach method 	
	var honorifics = ["Dr.", "Ms.", "Mrs.", "Miss", "Mr."];
	var p2 = new Person("Buch");
	var newArray = [];

// Simplify code with forEach method
	honorifics.forEach(function(honorific) {
		newArray.push("<br>" + honorific + " " + p2.name);
	});

	document.getElementById("part1b").innerHTML = newArray;	
};

// Session 2, Assignment 1, Part 1, Arrow Function Method
function function1c(){
	
	var p3 = new Person("Cannito Buch");
// Arrow Method	Attempt -- yay, finally works!
	Person.prototype.prefixName = (arr) => {
		return arr.map( (character) => {
			return ("<br>" + character + " " + p3.name);
		}, this);
	}
//
	document.getElementById("part1c").innerHTML = 
	//p3.name;
	(p3.prefixName(["Dr.", "Ms.", "Mrs.", "Miss", "Mr."]));
}; 	

// Extra Credit -- Reuse forEach method (slightly modified)
// with different input to add final "e" to CVC (Consonant - Vowel -
// Consonant) wirds to make new long vowel words.

function function1d(){

	var words = ["Cap", "Tap", "Hug", "Pin", "Can", "Mat", "Win", 
	"Man", "Rat", "Fat", "Van"];
	var p4 = new Person("e");
	var newWords = [];

// Simplify code with forEach method
	words.forEach(function(word) {
		newWords.push("<br>" + word + " becomes " + word + p4.name);
	});

	document.getElementById("part1d").innerHTML = newWords;
}; 	

// Original Assignment
 
function function1e(){
/*	
	Person.prototype.prefixName = (arr) => {
		return arr.map( (character) => {
			return this.name + character;
		}, this);
	};
*/
	Person.prototype.prefixName = arr => {
		return arr.map( (character) => {
			return (p5.name + character);
		}, this);
	}

	var p5 = new Person("Michele");
	numArray = [1, 2, 3, 4, 5];
	charArray = ["A", "B", "C"]
	document.getElementById("part1e").innerHTML = 
	//"working..." + p5.name;
	(p5.prefixName(numArray));
//	(p3.prefixName(["Dr.", "Ms.", "Mrs.", "Miss", "Mr."]));
};
