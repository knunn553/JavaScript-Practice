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





















