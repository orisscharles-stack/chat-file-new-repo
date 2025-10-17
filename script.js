// This prints to the console
console.log("Hello Charles! Welcome to JavaScript");

// Let's make some variables
let name = "Charles";
let age = 17;
console.log("My name is " + name + " and I am " + age + " years old.")
// Let's do math
let x = 10;
let y = 5;
let sum = x + y;
console.log("The sum is: " + sum);




////////////////////////////////////UNDERSTANDING VARIABLES AND DATA TYPES ////////////////////////////////////////////////////////////


//Numbers: without quotes
let price = 50;
let discount = 10;
let total = price - discount
console.log("Total price is: " + total)

//Strings: words: always with quotes
let greeting = "Hello,";
let person = "Charles.";
let talk = "How are you doing?"
console.log(greeting + " " + person + " " + talk)

//Booleans
let isLoggedin = true
console.log("User logged in? " + isLoggedin)

//typeof tells you the type
console.log(price)     //number
console.log(person)      //string
console.log(isLoggedin)     //boolean


//Learning reuseable actions
function greetUser(name) {
  console.log("Hello " + name + ", welcome back!");
}
greetUser("Charles")
greetUser("Tomi")


let number = 17;

if (number >= 18) {
  console.log("You are an adult")
}
else {
  console.log("You are a minor")
}

function changeText() {
  document.getElementById("greet").innerText = "This text was changed by javascript";
  console.log("Button was clicked")
}



//////Operators////////
//Arithmetic operators
let a = 10;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b); /////multiplication
console.log(a / b);//division
console.log(a % b); //1 (10 divided by 3 = 9 remainder 1)
console.log(2 ** 3);///2 to the power of three
console.log(a * 2);



////Comparison operators   (booleans)
//=== strict equals (value and type)
//== loose equals 
//!== strict not equals

console.log (5 === 5)
console.log (5 === '5')
console.log (5 == '5')
console.log (4 > 3)
console.log (4 < 3)


let loggedIn = true;
let isAdmin = false;
console.log(loggedIn && isAdmin);
console.log(loggedIn || isAdmin);
console.log(!isAdmin)
console.log(loggedIn && isLoggedin)


//String Operators

//(+)concatination (join strings)
console.log("Hello " + name + "!");

console.log(`Hello ${name}!`)//much logical and better


console.log(typeof 3);
console.log(typeof "hi")
console.log(+ "42")

////"let age" has already been used at the top
let canVote = age >=18 ? "yes" : "no";
console.log(canVote)



//////short practice
console.log(10 + 5) * 2 - 4
console.log(27 % 10)
