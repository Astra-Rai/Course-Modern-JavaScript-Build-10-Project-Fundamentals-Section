
//create a new element
const newLink = document.createElement('a');
//console.log(newLink);
//add a class, returns: <a class = 'Link'></a>
newLink.className = 'link';

//add the href
newLink.href = '#';   
//newLink.href = 'www.google.com';
//add the next

newLink.appendChild( document.createTextNode('www.google.com') );
//Add the element to the HTML

//document.querySelector('#primary').appendChild(newLink);
console.log(newLink);