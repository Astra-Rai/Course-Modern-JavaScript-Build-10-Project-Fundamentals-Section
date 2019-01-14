//try, catch, finally notes, resoucec W3Schools


/*

The try/catch/finally statement handles some or all of the errors that may occur in a block of code, while still running code.

Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things.

The try statement allows you to define a block of code to be tested for errors while it is being executed.

The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

The finally statement lets you execute code, after try and catch, regardless of the result.

Note: The catch and finally statements are both optional, but you need to use one of them (if not both) while using the try statement.

Tip: When an error occurs, JavaScript will normally stop, and generate an error message. Use the throw statement to create a custom error (throw an exception). If you use throw together with try and catch, you can control program flow and generate custom error messag

*/

try {
    getClients();
} catch(error){
    console.log(error);
} finally {
//this prints no matter wah  
    console.log('Execute always no matter what');
}
//fuction, first downloading clients
function getClients() {
  console.log('Downloading.....');
//three seconds between the start of download and download being complete
  setTimeout(function() {  
    console.log('Complete');
  }, 3000);  
}
//run getClients functions
getClients();


/*
he window object allows execution of code at specified time intervals.

These time intervals are called timing events.

The two key methods to use with JavaScript are:

setTimeout(function, milliseconds)

*/