
//objects, have key: value pairs
//define an object using const or let
//curely braces indicate objects in javascript

const person = {
  firstName: 'Juan',
  lastName: 'Del la toree',
  job: 'Web Developer',
  email: 'email@gmail.com',
  age: 31,
  favoriteMusic: ['Trace', 'Rock', 'Grunge'],
//this s an object within an object
  living: {
        city: 'Guadalajara',
        country: 'Mexico'
  },
 //a function is called a method when it's inside an object
  
  bornYear: function() {
//new Date ()
//new Date()is a constructor, it creates a new date object with the current date and time:      
// new Date.getFullYear
//  The getFullYear() method returns the year (four digits for dates between year 1000 and 9999) of the specified date
//the keyword, this will allow us to access the value associated with
//the key named "age"..this.age, return the same data as person.age   
      return new Date().getFullYear() - person.age;
    },
//console.log(person.bornYear()); //->1988  
  
  //getAge: function() {
   // return 31;
//function name, colon space, keyword funciton()
  //is this how to name functions within arrays
  getJob: function (){
    return this.job;
  }

}

//console.log(person.bornYear() );

//you can access the value of a key, by dot notation
//console.log(person.living.country);// -> "Mexico"
//an alternative to accessing values is brackets
//make sure to wrap key name in single quotes
//console.log(person['email']);// -> "email@gmail.com"

//console.log(person.getJob());