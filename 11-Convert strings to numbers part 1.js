//convert stings into numbers
//it will be assumed that the variable type for for number2 and number3 is const

const number1 = '50',
      number2 = 10,
      number3 ='Nine';
      


//remember, when you have the value with the string, and use the + plus sign, the values will be concatenated.

//output will be 5010
//console.log(number1 + number2);

//conver number1 into a number by using th efunction Number
//output 60, number1 ='50' is converted to a string
console.log(Number(number1) + number2);
//use parseInt to convert Sing to number
console.log(parseInt(number1) + number2);
//outputNAN
console.log(parseInt(number3) + number2);

//if you use a minus sign and not a plus, javascript will automatically conver the sting to a number

//therefore ouput below is 40 
console.log(number1 - number2);