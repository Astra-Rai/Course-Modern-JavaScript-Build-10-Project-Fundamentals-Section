//for loop for shopping cart

const shoppingCart = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];

//Access items in shopping cart
//Use for loop to loop through array
////loop will run for lenght of array by using .length property
for(let i =0; i < shoppingCart.length; i++){
  console.log(`Product: ${shoppingCart[i]}`);
}
/*example 1

for(let i = 0; i < 10; i++){
  
  if(i % 2 == 0){
    
    console.log(`${i} is even`);
  
  } else {
    
    console.log(`${i} is odd`);
  }

}

*/