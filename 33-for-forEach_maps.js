//for loop example 1
/*


const todo = ['Homework', 'Food', 'Project', 'Learn JS'];
for(let i = 0; i<todo.length; i++){
  console.log(todo[i]);// --> Homework, Food, Project, Learn JS
}

*/

const todo = ['Homework', 'Food', 'Project', 'Learn JS'];
//name of array, using forEach, function, assignment is the variable
todo.forEach(function(assignment, index){
  //console.log(`${assignment}`);  // --> Homework, Food, Project, Learn JS
console.log(`${index} : ${assignment}`);
 /*
 0: Homework
 1: Food
 2: Project
 3: Learn JS
 
 
 */ 
 })

// Map
//An array of object

const shoppingCart = [
  {id: 1, product: 'Book'},
  {id: 2, product: 'Shirt'},
  {id: 3, product: 'Album'}  
];
//the fuction should return the key, product
const productName = shoppingCart.map(function(productName){
  //use dot nottion, sense it's an object, to gain access to the property
  return productName.product;
});  
  //extract product name from shoppin cart

console.log(productName);
/* map method
The map() method creates a new array with the results of calling a provided function on every element in the calling array.
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])
*/