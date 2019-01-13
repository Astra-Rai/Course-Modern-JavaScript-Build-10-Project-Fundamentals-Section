//array of objects
//let cars is an array
let cars = [  
 //object is at Oth index of cars [ ] array 
    {
       model: 'Mustang',
       engine: 6.0 
    },
 //object is at 1st index of the cars [ ] array 
    {
       model: 'Camro',
       engine: 6.1
    },
 //object is at the second index of the cars [] array   
    {
        model: 'Challenger',
        engine: 6.1
    }
]
//use a for loop
//loop through array of obeject, cars
//output the model type of each car in the array of objects

for(let i = 0; i< cars.length; i++){
 //output the key, model, for each object listed in the array elements 
  console.log(cars[i].model);
}
//objects are made of key: value paris
//key:value
//model: 'Mustang'
//model: 'Camro'
//model: 'Challenger

//console.log(carsd[1].model);// -> "Camero"