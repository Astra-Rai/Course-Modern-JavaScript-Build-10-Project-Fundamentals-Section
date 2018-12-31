const months = new Array('Jan', 'Feb', 'March', 'April', 'May', 'June');

//remov last items from array 
//months.pop();
//returns ["Jan", "Feb", "March", "April", "May"]
//remove first element of array
//months.shift();
//returns 
//["Feb", "March", "April", "May", "June"]
//remove element from middle of array
//splice paramenters, first position you to remove, second arguement, how many elements to remove (nothing..null), 
//remove one item, last parameter is what will be added.
//below the thrid element, is where removal starts, only one element is removed , and after that element, the text, ''yo is added'
months.splice(3,1,'yo');
console.log(months);