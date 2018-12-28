//example, maybe you want to check email for @, you can use indexOf
const email = 'email@email.com'
//const learning ='Learning JavaScript is great';
let output;
output = email.indexOf('@');
if(output > 0) {
  console.log('Valid Email');
} else {
  console.log('Invalid email');  
}

//length, example, how twitter knows length of what you put in window

//output = learning.length;

//concat, output will be Learning JavaScript is great and fun
//output = learning.concat(" ", "and fun!");

//check for index position of start of a word, 9

//output = learning.indexOf('JavaScript');

//console.log(output);

//lets check for email validation
//if there is a vaild email address the @ is included, it will have an index number