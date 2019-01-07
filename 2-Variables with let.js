//let and const
/*
//let learning = 'Modern JavaScript';
//let learning = 'JavaScript';
//console.log(learning);//Uncaught Syntax error: Identifier 'learning' has already been declared
//note tutorial noted error, my console printed the value in line 3 of code 'Modern JavaScript'. ?
*/

let opinion = 'JavaScript is the best';
opinion = 'JavaScript is not cool, fam';//the value of is reassigned, but let with the name learning is not redeclared. This answers question above on line 6
//console.log(opinion);//expected output is: JavaScript is not cool, fam

let car;
//console.log(car);//returns undefined because car let car is not initiated with a vaule

let product1 = 'Book';
let product2 = 'Shirt';

// above is writter as 
  //let product1, = 'Book',    <---notice the comma , here and not ; the variable type is assumed by type of the subsequent code in line21
        //product2 = 'Shirt'; the output for lines 24 and 25 console.log would be the same

//console.log(product1);// --> Book 
//console.log(product2);// --> Shirt