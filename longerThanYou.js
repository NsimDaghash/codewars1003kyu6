/*

I'm longer than you!

Create a function longer that accepts a string and sorts the words in it based on their respective lengths in an ascending order. If there are two words of the same lengths, sort them alphabetically. Look at the examples below for more details.

longer("Another Green World") => Green World Another
longer("Darkness on the edge of Town") => of on the Town edge Darkness
longer("Have you ever Seen the Rain") => the you Have Rain Seen ever
Assume that only only Alphabets will be entered as the input. Uppercase characters have priority over lowercase characters. That is,

longer("hello Hello") => Hello hello
*/

function longer(s) {
  const words = s.split(" ");

  words.sort((a, b) => {
    // If lengths are equal, sort alphabetically with priority for capital letters
    if (a.length === b.length) {
      if (a[0].toUpperCase() === a[0] && b[0].toLowerCase() === b[0]) {
        return -1; // Place a before b
      } else if (a[0].toLowerCase() === a[0] && b[0].toUpperCase() === b[0]) {
        return 1; // Place b before a
      } else {
        // If both start with the same type of letter, sort alphabetically
        return a.localeCompare(b);
      }
    } else {
      // Otherwise, sort by length in ascending order
      return a.length - b.length;
    }
  });

  return words.join(" ");
}
