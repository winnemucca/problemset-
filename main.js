

var letterCapitalize = function(s) {
  return s
  	.split(' ')
  	.map(function(word) { 
	  	return word[0].toUpperCase() 
	  	+ word.slice(1);
	  })
	  .join(' ');
}
console.log(letterCapitalize('rectangle'));
console.log(letterCapitalize('rectangles suck'));

var wordCount = function(word) {
	var seperate= word.split(' ');
	return seperate;
}
console.log(wordCount('hot dog'));

function primeTime(num) {
    if(num < 2) {
    	return false;
    }
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}
console.log(primeTime(8));
console.log(primeTime(7));


// var wordCount = function(string) {
// 	var seperate = string.split('');
// 	return seperate.length;

// }
// console.log(wordCount('Never eat shredded wheat'));

// var numbers = [1,5,8, 4,7,10,2,6 ];
// numbers.sort(function(first,second) {
// 	return first - second;
// });
// console.log(numbers);

// numbers.sort();
// console.log(numbers);

// var person = {
// 	name: "nick",
// 	sayName: function () {
// 		console.log(this.name);
// 	}

// };
// // this is wrong not sure why
// person.sayName();


// //Define a functional object to hold persons in JavaScript
// var Person = function(name, age) {
//     this.name = name;
//     this.age = age;
// };

// //Add dynamically to the already defined object a new getter
// Person.prototype.getName = function() {
//     return this.name;
// };

// //Create a new object of type Person
// var john = new Person("John", 33);

// var bob = new Person("Bob", 44);

// //Try the getter
// alert(john.getName());

// //If now I modify person, also John gets the updates
// Person.prototype.sayMyName = function() {
//     alert('Hello, my name is ' + this.getName());
// };

// Person.prototype.sayMyAge= function(){
// 	alert("hello, i am " + this.age);
// }

// //Call the new method on john
// john.sayMyName();

// var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
// for (var i=0; i <animals.length-1; i++){
// 	console.log(animals[i]);
// }

// var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
// for (var i=0; i <animals.length; i+=2){
// 	console.log(animals[i]);

// };

// var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
// for (var i=0; i <animals.length; i++){
// 	var turn = animals.reverse();
// 	console.log(turn[i]);

// };


//this is a great sample problem
//if the value is o print it else print it twice
// var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
// for (var i=0; i <animals.length; i++){
	

// 	if(i===0 || i===4){
// 		// console.log(animals[i])
// 	}	
// 		else
// 		{
// 		console.log(animals[i]);
// 		console.log(animals[i]);
// 		}

// };
// 	var firstReverse = function(string) {

// 		return string.split('').reverse().join('');
// 	}
// 	console.log(firstReverse('happy'));



// 	var firstReverse = function(string) {
// 		var change = string.split(''); 
// 		return change.reverse().join('');
		
// 		// return string.split('').reverse().join('');
// 	}
// 	console.log(firstReverse('happy'));

	


// 	function swapCase (string) {
// 	var chars = string.split('')
// 	for (var i = 0; i < chars.length; i++) {
// 		if(chars[i].toUpperCase() === chars[i]) {chars[i] = chars[i].toLowerCase()}
// 		else{chars[i] = chars[i].toUpperCase()}
// 	};
// 	return chars.join('')
// }
// console.log(swapCase("A String With First Letter Capitalized Was Entered."))



// var students = [{
//  name: 'Liz',
//  age: 25,
//  city: 'Boulder'
// },{
//  name: 'Meghan',
//  age: 27,
//  city: 'Denver'
// },{
//  name: 'Trent',
//  age: 32,
//  city: 'Boulder'
// },{
//  name: 'Chelsea',
//  age: 24,
//  city: 'Boulder'
// },{
//  name: 'Amir',
//  age: 18,
//  city: 'Denver'
// }];
// for(var i =0 ; i < students.length; i++) {
// 	console.log(students[i].name + " is " + students[i].age);
// }

// for(var i =0; i < students.length; i++) {
// 	if(students[i].city === 'Boulder') {
// 		console.log(students[i].name + ' is from ' +students[i].city)
// 	}
// }

// for(var i = 0; i < students.length; i++) {
// 	if(students[i].age > 25) {
// 		console.log(students[i].name + ' is older than 25');
// 	}
// }


// function letterCapitalize (str) {
// 	return str
// 	.split(' ')
// 	.map(function(word) {
// 		return word[0].toUpperCase() + word.slice(1);
// 	})
// 	.join(' ');

// }
// console.log(letterCapitalize('hip hop'));


// // var letterCapitalize = function(s) {
// //   return s
// //   	.split(' ')
// //   	.map(function(word) { 
// // 	  	return word[0].toUpperCase() + word.slice(1);
// // 	  })
// // 	  .join(' ');
// // }
// // console.log(letterCapitalize('rectangle'));

// var fruits = ["Apple", "Orange", "Pineapple", "Cranberry", "Pomegranate"];
// var fruitJuice = fruits.map(function(fruit) {
//   return "\n" + fruit + " juice";
// });
// alert(fruitJuice);

// var vegetables = function (str) {
// 	return str
// 	.map(function (word) {
// 		return word.toUpperCase();
// 	})
// } 
// console.log(vegetables(["tomato", "carrot", "broc", "lettuce"]));

// var wordCount = function(str) {
// 	var each = str.split(' ');

// 	return each.length;
// }
// console.log(wordCount("never eat shredded wheat"));


	// var lastLetter = function(str) {
	// 	return str.charAt(str.length-1);
		
	// }
	// console.log(lastLetter('hello'));


	// function toArray (a,b,c) {
	// 	return [a,b,c];
	// }

	// console.log(toArray(1,4,5));

	// function startsWithA (string) {
	// 	return string.charAt(0).toUpperCase() === 'a'.toUpperCase();
	// }
	// console.log(startsWithA('apple'));
	// console.log(startsWithA('banana'));

// ************************************************* not the correct answer but good review
	// var sun = function (string) {
	// 	var want = [];
	// 	for (var i = 0; i < string.length; i++) {
	// 		if(string[i] == 's' || string[i] == 'u' || string[i] =='n') {
	// 			want.push(string[i]);
	// 		}
	// 	}
	// 	var filter = want.join('');
	// 	if(filter == 'sun') {
	// 		return true;
	// 	}
	// 	return false;

	// }
	// console.log(sun('sunny'));
	// console.log(sun('asunder'));
	// console.log(sun('supper'));

	// var sun = function (string) {
	// 	if(string.indexOf('sun') != -1) {
	// 		return true;
	// 	}
	// 	return false;

	// }
	// console.log(sun('asunder'));
	// console.log(sun('apple'));
	// console.log(sun('sunny'));



	// var tiny = function (number) {
	// 	if(number <=1) {
	// 		return true;
	// 	}
	// 	return false;
	// }
	// console.log(tiny(0.3));
	// console.log(tiny(1.5));
	// console.log(tiny(-5));




