//functions


//function expression
//create a function with two parameters
//add two parameters
//store function in 
/*Ecample 1
const sum = function(number1, number2) {
  return number1 + number2;
}
console.log( sum(3,3) );
console.log( sum(4,8) );
console.log( sum(14,18) );
console.log( sum(24,28) );
//structure
//console.log(varible(parameter1, parameter));


Notes: Wikipedia
A third way is by declaring and defining a variable as being "constant". A global or static variable can be declared (or a symbol defined in assembly) with a keyword qualifier such as const , constant , or final , meaning that its value will be set at compile time and should not be changeable at runtime.
*/

//Example 2: What happens if you don't pass an arguments as function parameters?
//Answer, error: NAN
//Fix this by setting parameter default to equal zero


const sum = function(number1 = 0, number2){
  return number1 + number2; 
}

console.log( sum());//--> output: 0