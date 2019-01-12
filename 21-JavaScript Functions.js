//function declaration

/*
Notes: 

Function parameters are the names listed in the function definition.

Function arguments are the real values passed to (and received by) the function.

*/

/*
Example 1


function helloVisitor(){
  //the code inside the function is wrapped by curely braces {}
  console.log('Hello & Welcome to our website');
}

//this is how you call the function
helloVisitor();

//argument is a value from outside of the function that is passed through the paramenter of the function 

*/
/*Example 2
function helloVisitor (name) {
  console.log(`Hello ${name}, welcome to our website `);    
}
//call the function and pass an argument through the parameter, name. A parameter is like a varible in a method function

helloVisitor('Astra Rai');
//output: "Hello Astra Rai, welcome to our website "
/*
Notes:

A parameter is a variable in a method definition. When a method is called, the arguments are the data you pass into the method's parameters. Parameter is variable in the declaration of function. Argument is the actual value of this variable that gets passed to function.
*/
/*Example 3
function helloVisitor(firstName, lastName){
  console.log(`Hello ${firstName} ${lastName}, welcome to our class`);
}

helloVisitor('Astra', 'Rai')
//output: "Hello Astra Rai, welcome to our class"

*/

//Note, if you have try to pass less arguments than that of the function parameter, return is undefined

//to avoid this error, you can fix using a default parameter.
//change parameters from :
//(firstName, lastName)...ti
//(firstName = '', lastName = '')

//example of a function with default parameters
function helloVisitor(firstName = 'Visitor ', lastName = 'De la torre') {
  console.log(`Hello, ${firstName} ${lastName} & Welcome to our website`);
}

helloVisitor('Juan');
//Output: "Hello, Juan De la torre & Welcome to our website"
//when you want to make something else return with the vaule, you use return, example

//create a funciton that adds two numbers
function addition(number1, number2){
  return number1 + number2;
}

// this will not automatically print to the console,addition(1,2);
//no

//make a variable to hold what's returned by the function
//varoab;e cam be reused
let result;

result = addition(1,2);//3
result = addition(4,2);//6
//send the value to the console.
console.log(result);