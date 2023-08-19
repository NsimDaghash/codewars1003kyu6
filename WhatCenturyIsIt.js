/*
What century is it

Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"
*/

function whatCentury(year) {
  // Convert the input year string to a number
  const yearNumber = parseInt(year);

  // Calculate the century
  const century = Math.ceil(yearNumber / 100);

  // Determine the suffix for the century
  let suffix;
  if (century % 10 === 1 && century !== 11) {
    suffix = "st";
  } else if (century % 10 === 2 && century !== 12) {
    suffix = "nd";
  } else if (century % 10 === 3 && century !== 13) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  // Combine the century and suffix
  return century + suffix;
}
