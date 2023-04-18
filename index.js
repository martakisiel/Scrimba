let name = "Linda"
let greeting = "Hi there"

// Create a function that logs out "Hi there, Linda!" when called

function greetings(){
    let greet= greeting + ", " + name + "!"
    return greet
}

console.log (  greetings())
alert(greetings())


let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points(){

    myPoints += 3 
    
}

console.log (myPoints)
function sub1Point(){
    myPoints -= 1
}
add3Points()
add3Points()
add3Points()
sub1Point()
sub1Point()
console.log(myPoints)

// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

function sthWentWrong(){
    let message = document.getElementById("error")

    message.textContent = 'Something went wrong, please try again'
}
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let sum = document.getElementById("sum-el")

function add(){
    let addE=num1+num2
    sum.textContent = 'Result=' + addE
 
    }

function subtract(){
    let subE= num1-num2
    sum.textContent = 'Result=' + subE
}

function divide(){
    let divE = num1/num2
    sum.textContent = 'Result=' + divE
}

function multiply(){
    let multiE = num1*num2
    sum.textContent = 'Result=' + multiE
}

