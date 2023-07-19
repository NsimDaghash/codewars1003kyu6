/*
Arabian String

You must create a method that can convert a string from any format into PascalCase. This must support symbols too.

Don't presume the separators too much or you could be surprised.

For example: (Input --> Output)

"example name" --> "ExampleName"
"your-NaMe-here" --> "YourNameHere"
"testing ABC" --> "TestingAbc"
*/

function camelize(str) {
  //...  // Step 1: Remove leading and trailing spaces
  str = str.trim();

  // Step 2: Identify separators and symbols using a regular expression
  const separatorsRegex = /[\s\-_]+/g;
  const separators = str.match(separatorsRegex);

  // Step 3: Split the string into words using the identified separators
  const words = str.split(separatorsRegex);

  // Step 4: Convert each word to PascalCase
  const pascalCaseWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Step 5: Join the words back together without separators
  return pascalCaseWords.join("");
}
