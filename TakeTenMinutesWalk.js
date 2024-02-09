/*
Take a Ten Minutes Walk


You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, 
so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. 
Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

*/

function isValidWalk(walk) {
  // Check if the array has exactly 10 elements
  if (walk.length !== 10) {
    return false;
  }

  // Initialize counters for each direction
  let vertical = 0;
  let horizontal = 0;

  // Iterate through the walk array and update counters
  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        vertical++;
        break;
      case "s":
        vertical--;
        break;
      case "e":
        horizontal++;
        break;
      case "w":
        horizontal--;
        break;
      default:
        // Invalid direction
        return false;
    }
  }

  // Check if you return to the starting point (0,0) and the total time is 10 minutes
  return vertical === 0 && horizontal === 0;
}
