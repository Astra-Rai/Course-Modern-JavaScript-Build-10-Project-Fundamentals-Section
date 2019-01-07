//Functions
//IIFE
//Immediately-invoked function experession
//you don't have to call function, it run automatically 
/* Example 1
(function() {
  console.log('yo');
})();
*/

/*

Example 2
(function(technology) {
  console.log('Learning ' + technology)
  
//pass argument for parameter here  
})('JavaScript');
*/
//Property methods
//A function inside an object is called a method
const musicPlayer = {
  play: function(id) {
    console.log(`Playing song with ID: ${id}`);
  },
  
  pause: function(){
    console.log('Pause...');
  }
}
  musicPlayer.play(30);

  musicPlayer.pause();
  
  musicPlayer.remove = function(id) {
    console.log(`Removed from the playlist, ID: ${id}`);   
 }  

  musicPlayer.remove(20);
  

  
