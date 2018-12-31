const months = new Array('Jan', 'Feb', 'March', 'April', 'May', 'June');
//reverse
months.reverse();
//console.log(months);

//const array1 = [1,2,3],//note comma
  //    array2 = [9,8,7];//note semicolon not a comma

//output[1,2,3,9,8,7]
//console.log(array1.concat(array2));

//sort elements of array

//let fruits = ['bana', 'apple', 'orange'];
///sorts array above in alphabetical order
//console.log(fruits.sort());

//sorts array numbers in ascending order
//for descending order line 20, reads return number2-number1
const arrayNumbers = [3,1,100,4,7,25,14,6];
arrayNumbers.sort(function(number1, number2){
                   return number1-number2;
})

console.log(arrayNumbers);//


/*
note remember that an array of strings is different from storting and array of numbers. so if you want to store an array of numbers, remember to use the code between lines 21 - 23



*/