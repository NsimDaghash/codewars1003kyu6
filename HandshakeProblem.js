/*
Handshake problem

Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.

However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).

*/
/*
explination :

You can solve this problem using a mathematical formula. The number of handshakes in a group of n people where each person shakes hands with every other person exactly once can be calculated using the combination formula C(n, 2), which represents "n choose 2." This formula is used to calculate the number of ways to choose 2 items from a set of n items without replacement.

The formula for C(n, k) is:
C(n, k) = n! / (k!(n-k)!)

In your case, k is 2 because we want to choose pairs of people, and n is the number of people needed to perform the handshakes.

So, to find the minimal number of people needed to perform a given number of handshakes, you need to solve for n in the equation:

C(n, 2) = given_number_of_handshakes
*/

function getParticipants(handshakes) {
  // Initialize n to 0
  let n = 0;

  // Keep increasing n until C(n, 2) is greater than or equal to handshakes
  while ((n * (n - 1)) / 2 < handshakes) {
    n++;
  }

  return n;
}
