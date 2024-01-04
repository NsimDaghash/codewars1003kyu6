/*
Hollow Triangle

The final idea is for the hollow triangle is to look like this if you decide to print each element of the list:

hollow_triangle(6) will result in:
_____#_____              1
____#_#____              2
___#___#___              3
__#_____#__              4
_#_______#_              5
###########              6 ---- Final Height

hollow_triangle(9) will result in:
________#________        1
_______#_#_______        2
______#___#______        3
_____#_____#_____        4      
____#_______#____        5
___#_________#___        6
__#___________#__        7
_#_____________#_        8
#################        9 ---- Final Height
Pad spaces with underscores i.e _ so each line is the same length.Goodluck and have fun coding !

*/

function hollowTriangle(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n * 2 - 1; j++) {
      if (j === n - i + 1 || j === n + i - 1 || i === n) {
        line += "#";
      } else {
        line += "_";
      }
    }
    result.push(line);
  }

  return result;
}
