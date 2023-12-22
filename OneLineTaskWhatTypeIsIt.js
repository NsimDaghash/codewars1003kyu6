/*

One Line Task: What type is it?

Prehistory
In JavaScript there are two operators that help us determine whether an operand belongs to a certain type or class, they are "typeof" and "instanceof", 
but both of these operators can fool us in some cases.

Task
You need to implement the function "f" which will determine the type of the passed argument without errors. 
The peculiarity of this task is the limitation on the number of characters in your solution, the length of your code must not exceed 45 characters.

Note
The "Symbol" and "RegExp" documentation will help you to solve this task, good luck :^)

Expected results
Input	Output
false	"Boolean"
new String("a")	"String"
"abc"	"String"
1_000	"Number"
BigInt(1)	"BigInt"
1_000n	"BigInt"
/\d+/	"RegExp"
undefined	"Undefined"
null	"Null"
{ a: 1 }	"Object"
[1, 2, 3]	"Array"
new Date()	"Date"
new Set()	"Set"
new Map()	"Map"

*/

f = (x) => Object.prototype.toString.call(x).slice(8, -1);

/// or :
f = (x) => ({}.toString.call(x).slice(8, -1));
