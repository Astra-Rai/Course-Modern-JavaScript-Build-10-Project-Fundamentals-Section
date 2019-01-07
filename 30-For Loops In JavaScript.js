//for loop
//foor loop used to run a condition or statement until a condition is met

/*Example 1
//index, let i =0 
//condition, run loop as long as i is less than 10
//increment, start at 0 and increment by 1
//index, condition, increment 
for(let i = 0; i < 10; i++){
//remember use of string literals and variables
  console.log(`Number: ${i}`);
}
//output:
//Number: 1...
//Number: 9
*/

/*Example 2
//Let's read a value in the for loop
for (let i = 0; i <10; i++){
  //if index is 2,print Yes!!2!!
  if(i == 2){
    console.log('Yes!! 2!!');
    continue;
  }console.log(`Number: ${i}`);
  //continue stop the code above from running and not allow Number: 2 to be printed.
  //continue will allow the code to continue to loop; however,break will not. see example below
}
*/
for (let i = 0; i <10; i++){
  //if index is 2,print Yes!!2!!
  if(i == 2){
    console.log('Yes!! 2!!');
    break;
  }console.log(`Number: ${i}`);
  //continue stop the code above from running and not allow Number: 2 to be printed.
  //continue will allow the code to continue to loop; however,break will not. see example below
}
//break will stop the running the for loop when the condition if i ==2 is met