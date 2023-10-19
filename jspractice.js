// Using the "this" keyword
// this is an object
// below we will create an object and return values using the this keyword
// "this" refers to the object it is in.. this object.
// "this" is not a variable, it is a keyword.
// When used in strict mode, "this" is undefined.

//const person1 = {
//    firstname1: "Kyle",
//    lastname1: "Nunn",
//    id1: 3232,
//    fullname1: function () {
//        return this.firstname1 + " " + this.lastname1;
//    }
//};

//document.getElementById("demo1").innerHTML = person1.fullname1();





// The call() and apply() methods are predefined JavaScript methods
// The call() method is just like a phone-a-friend. One object calls the other and is like "Hey what's up man, can I borrow an element?"

//////////

const person1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const person2 = {
    firstName: "Kyle",
    lastName: "Nunn",
}

let x = person1.fullName.call(person2);
document.getElementById("demo11").innerHTML = x;


////////////
// bind() method
// With the bind() method, and object can borrow a method from another object


const foreign = {
    make: "Lambo",
    model: "Huracan",
    fullcar: function () {
        return this.make + " " + this.model;
    }
}

const foreignkey = {
    make: "Lambo",
    model: "Aventador",
}

let fullcar = foreign.fullcar.bind(foreignkey);

document.getElementById("demo12").innerHTML = fullcar();


//////////
// Taking a look at Arrow functions.

let myFunction = (a, b) => a * b;
document.getElementById("demo13").innerHTML = myFunction(10, 12);


// Before the arrow function was introduced
let hello = "";

hello = function () {
    return "Hello World";
}
document.getElementById("demo14").innerHTML = hello();


// After the arrow function was introduced

let hi = "";

hi = () => {
    return "Hi, World!";
}
document.getElementById("demo15").innerHTML = hi();

// Even short arrow function - if the function has only one statement
// The below script only works if you have one statement.

let sup = () => "Sup bro";
document.getElementById("demo16").innerHTML = sup();

// This example shows an arrow function with a parameter
//let hello = "";
//hello = (val) => "Hello " = val;
//document.getElementById("demo17").innerHTML = hello("Everybody!");

let hola= "";

hola = (val) => "Arrivederchi " + val;

document.getElementById("demo17").innerHTML = hola("Universe!");

////////
// Looking at "this" with regular function

let hello11 = "";
hello11 = function () {
    document.getElementById("demo18").innerHTML += this;
}

/// The window object calls the function
window.addEventListener("load", hello11);

// A button object calls the function
document.getElementById("btn11").addEventListener("click", hello11);

///// Looking at "this" with an arrow function
let hello12 = "";
hello12 = () => {
    document.getElementById("demo19").innerHTML += this;
}

window.addEventListener("load", hello12);
document.getElementById("btn12").addEventListener("click", hello12);


////////////////
// Using the keyword Class to create a class. Alwyas adding method named constructor() to the class.
//class ClassName {
//    constructor {... }
//}

//// Class example
// It is important to note that Class is not an object but rather a template for an object.
// When you have a class, you can use the class to create objects.

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const myCar1 = new Car("Audi", 2015);
const myCar2 = new Car("VW", 2017);

document.getElementById("demo21").innerHTML =
    myCar1.name + "<br>" + myCar2.name;

// Above where it says "Class example", while that code was running, the demo21 script would not run and show up in HTML doc.
// The example above uses the car Class to create two car Objects.
// The constructor method is called automatically when a new object is created.
// The constructor mehod is used to initialize object properties


class Player {
    constructor(player, year1) {
        this.player = player;
        this.year1 = year1;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.year1;
    }
}

const myPlayer = new Player("Harper", 1992);
document.getElementById("demo22").innerHTML =
    "Bryce Harper is  " + myPlayer.age() + " years old.";

// You can also send parameters to Class Methods.
class Vehicle {
    constructor(name1, year2) {
        this.name1 = name1;
        this.year1 = year1;
    }
    age1(x) {
        return x - this.year1;
    }
}

const date1 = new Date();
let year1 = date1.getFullYear();

const myVehicle = new Vehicle("VW", 2005);
document.getElementById("demo23").innerHTML =
    "My car is " + myVehicle.age1(year1) + " years old.";

////////
// Taking a look at Modules
// There are two types of Modules: Named Modules and Default Modules
// Going to create a file names person.js
// We will call the export function for each individual object then we will do them all at once at the bottom, a much faster approach.

// We are going to create a another JavaScript file, message.js for default export demonstration purposes.
////

//Importing with Named Export
import { name, type } from "./person.js";
let text = "My name is " + name + "and I am a " + type;
document.getElementById("demo24").innerHTML = text;

//Importing with Default Export

//////////

// JSON stands for JavaScript Object Notation
// JSON is a format for storing and transporting data.
// JSON is often used when data is sent from the server to the webpage.
// JSON is language independent
// JSON data is written in name object pairs, just like Object properties
// JSON names require double quotes, JavaScript names do not.
// JSON arrays are put inside square brackets, but just like JS, ararys can contain objects.

// JSON Example

//{
//    "employees" = [
//        { "firstname3": "Kyle", "lastname3": "Nunn" },
//        { "firstname3": "Ryan", "lastname3": "Scanlon" },
//        { "firstname3": "Ben", "lastname3": "Goins" },
//    ]
//}

// Converting a JSON text into a JavaScript Object
// For simplicity, this can be demonstrated using a string as input.
// First, create a JavaScript string containing JSON syntax:

let text2 = '{"employees1" :[' +
    '{ "firstname3": "Kyle", "lastname3": "Nunn" },' +
    '{ "firstname3": "Ryan", "lastname3": "Scanlon" },' +
    '{ "firstname3": "Ben", "lastname3": "Goins" }]}';

    // Now we'll use the JavaScript function JSON.parse() to convert the string into a JavaScript object.

const obj = JSON.parse(text2);

// Finally, we can use the JavaScript Object on our page:
// Let's go with Scantron.

document.getElementById("demo25").innerHTML =
    obj.employees1[1].firstname3 + " " + obj.employees1[1].lastname3;

///////////
// Debugging
// Normally, active debugging capabilities in the browser with the F12 key and select "Console in the debugger menu"
// If the browser supports debugging, we can use console.log()
// On a Mac, we can access debugging by pressing the fn key and then the volume up key.


// Syle Guide
// It is good to use camelCase for variables and functions, also called identifier names.
// All names start with a letter. A letter. A letter. Not a number. A letter.
// Always put spaces around operators and after commas.
// Always use two spaces of indentation for code blocks. <br />
// DO NOT use tabulators for indentations. Different editors interpret tabs differently.
// Always put semi colon after simple statements.

const veggies = ["Carrot", "Squash", "Kale"];

// General Rules for complex (compound) statements
// Put opening bracket at end of the first line
// One space before the first bracket
// Do not end a complex statement with a semi colon
// Complex statement example: Functions, Loops, Conditionals.

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

for (let i = 0; i < 5; i++) {
    x += i;
}

if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}


///////
//  Object Rules

//  Place opening bracket on the same line as the object name.
//  Use a colon plus one space between each property and its value. 
//  Use quotes around string values, not numeric values. 
//  Do <b> NOT </b> add a comma after the last property value pair. 
//  Place the closing bracket on a new line, without leading spaces.
//  Always end an object definition with a semicolon. 


//  Line Length

//  Best to keep JavaScript line lengths to under 80.
//  Above 80, it is best to break it after a comma or an operator.


// JavaScript Best Practices

// Avoid global variables - easily get confused once code starts getting into the thousands.
// Avoid new
// Avoid ==
// Avoid eval()
// Always declear variables with let, var, or const - no matter what.

// Place declarations on the top
// It is a best practice to put declarations on the top
// Makes for cleaner code and readability
// The same goes for loop variables!

// Declare at the beginning
let firstName, lastName, price, discount, fullPrice;

// Use later
firstName = "John";
lastName = "Doe";

price = 19.90;
discount = 0.10;

fullPrice = price - discount;

// Some concept with declarations applies to loop variables:
for (let i = 0; i < 5; i++) {

// It is also good practice to not only declare variables at the beginning of the JS file, but also initiate them with a type and value.
// Initializing variables provides an idea of the intended use (and intended data type).
// Do NOT use new Object() of any kind!
// Declare Arrays and Objects with the const declaration.

/// Important: Using Parameter Defaults
//  Undefined values can break a file of code.
//  It is best to assign default values to arguments:

    function myFunction(x, y) {
        if (y === undefined) {
            y = 0;
        }
    }










































