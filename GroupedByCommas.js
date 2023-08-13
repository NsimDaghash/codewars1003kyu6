/*
Grouped by commas

Finish the solution so that it takes an input n (integer) and returns a string that is the decimal 
representation of the number grouped by commas after every 3 digits.

Assume: 0 <= n < 2147483647

Examples
       1  ->           "1"
      10  ->          "10"
     100  ->         "100"
    1000  ->       "1,000"
   10000  ->      "10,000"
  100000  ->     "100,000"
 1000000  ->   "1,000,000"
35235235  ->  "35,235,235"
*/

function groupByCommas(n) {
  if (n < 1000) {
    return n.toString();
  }

  const parts = [];
  let numStr = n.toString();

  while (numStr.length > 3) {
    parts.unshift(numStr.slice(-3));
    numStr = numStr.slice(0, -3);
  }

  if (numStr.length > 0) {
    parts.unshift(numStr);
  }

  return parts.join(",");
}
