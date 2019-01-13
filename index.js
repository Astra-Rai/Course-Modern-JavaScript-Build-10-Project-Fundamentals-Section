//Switch

//How the switch statement works
/*
The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
*/


const paymentMethod = 'check';

switch(paymentMethod){
  
  case 'cash':
    
    console.log(`You payment method is: ${paymentMethod}`);
    break;   
    
  case 'check':
    console.log(`You payment method is: ${paymentMethod} we will verify funds...`);
    
    break;   

  case 'card':
    
    console.log(`You payment method is: ${paymentMethod} procesing...`);
    break;   
//The default keyword specifies the code to run if there is no case match: default:
  
    console.log('Please select a vaild payment method');
    break;   
}

//break keyword
/*
When JavaScript reaches a break keyword, it breaks out of the switch block.

This will stop the execution of more code and case testing inside the block.

When a match is found, and the job is done, it's time for a break. There is no need for more testing.






*/