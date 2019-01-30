



//Looping through an array with while

const shoppingCart = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];

let i = 0;
  
while(i < shoppingCart.length) {
  console.log(`Product: ${shoppingCart[i]}`);
  i++;
}

//Do While Loop
//Runs at least once, no matter the condition
/*
let i = 5;
do {
//increment the variable i by 1 as while i is less than the number 10   
  console.log(`Number: ${i}`);
  i++;
} while (i < 10);
*/