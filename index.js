/*function f1(a) {}
function f2(a,b) {}
function many(a, b, ...more) {}

console.log(f1.length);
console.log(f2.length);
console.log(many.length);
*/



/*"use strict";
function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }
  f.toString = function () {
    return currentSum;
  };
  return f;
}

console.log( sum(1) (2));
//console.log( sum(1) (2) (3));
console.log( sum(5)(-1)(2));
console.log( sum(6)(-1)(-2)(-3));
console.log( sum (0)(1)(2)(3)(4)(5));
*/


/*let a = "Hello world";
function first() {
  console.log('Inside first function');
  second();
  console.log('Again inside first function');
}
function second() {
  console.log('Inside second function');
}
first();
console.log('Inside Global Execution Context');
*/


/*
let a = 2 + 2;

switch (a) {
 case 3:
   print("Маловато");
   break;

case 4:
  print ("В точку");
  break;
case 5:
  print("Перебор");
  break;
default:
  print("Нет таких знвчений");

}
*/

/*'use strict';

let user =  "John";
let age = 25;
let message = "Hello";

console.log(user);
console.log(age);
console.log(message);
*/


/*let $ = 'Djon' ;
let _ = ' name of ';
console.log(_ + $);
*/

/*let step;
for (step = 0; step < 5; step++) {
  console.log(step);
}

*/
'use strict';
let year = prompt ("which year 2015?", "");
if (year == 2015){
  console.log('Yes');
}
else {
  console.log('No');
}




const OPERATIONS = {
  sum: "+",
  substruction: "-",
  multiplication: "*",
  division: "/"
};

function calculate({a, b, operation}){
  let result = null;

  switch (operation) {
      case OPERATIONS.sum:
          result = sum(a, b);
          break;
      
      case OPERATIONS.substruction:
          result = substraction(a, b);
          break;
      
      case OPERATIONS.multiplication:
          result = multiplication(a, b);
          break;

      case OPERATIONS.division:
          result = divison(a, b);
          break;

      
      default:
          break;
  }
  
 
  return result;
}