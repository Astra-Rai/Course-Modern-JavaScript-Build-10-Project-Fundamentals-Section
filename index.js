//conver numbers to stringsd
//because in diong something like this, you'll have all the methods avaible for strings in numbers




//Example 1
//when declaring multiple variable at one time, remember to use a coma, not a semi colon
//let number = 90210,
//    output;

//what if we wanted to evaluate the length of the number
//you can use the .length property, but first, you must covert 90210 to a string

//output = number;// -> 90210
//convert number to string
//output = String(number );// ->"90210"
//now that number is converted to string, use length property to evaulate length of "90210"
//console.log(output.length);// -> 5


///Example 2
//boolean to a string
//let output;
//output = true;
//output = String(true); //->"true" 
//console.log(output); // -> true
//console.log(typeof output)// boolean

//let output;
//output = String(true);

//output = new Date();
//this allows us to use methods for stings with the date data
//output = String(output);

//check if data has a year of 2019
//console.log(output.includes('2019'));// -> true
//console.log(typeof output);// -> string

//convert an array to string
//let output;
//output;

//output = [1,2,3,4];
//console.log(output);// -> [1,2,3,4]
//output = String( [1,2,3,4]);
//console.log(output); // -> "1,2,3,4"

//console.log(output.toString());// ->"1,2,3,4"

//trying to use toString() for number, yield error. 
//example 20.toString(), error
//toString(), is more used when you have object

//can use for boolean types
//output = true.toString();
//console.log(output); // -> true


let output;
output = {name: 'Juan'}.toString(); //-> "[object Object]"
console.log(output);