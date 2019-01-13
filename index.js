//switch

//assigning a variable from the switch case
//create an array, elements three cars
const cars = ['Camero', 'Mustang', 'Challenger'];

//use a variable that can change which case you select
//the case you select represents on of the elments in teh array of cars

const selecter = 1;
//use this as a placeholder
//the variable named car will hold the element of the array that is selected by the const selector variable
let car;

switch(selected){
    
  case 0:
    //cars[0], camero
    car = cars[0]; 
    break;
  case 1: 
    //cars[1], mustang
    car = cars[1];
    break;
    //cars[2], challenger
  case 2:
    car = cars[2];
    break;
}

//print the selected car
console.log('Your selected car is ${car}');