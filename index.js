// // //Constructor pattern
// // function Counter() {
// //   var count = 0;

// //   this.increment = function incrementCounter() {
// //     count++;
// //     console.log(count);
// //   };

// //   this.decrement = function incrementCounter() {
// //     count--;
// //     console.log(count);
// //   };

// //   this.returnCount = function () {
// //     return count;
// //   };
// // }

// // const counter1 = new Counter();
// // counter1.increment(); //1
// // counter1.increment(); //2
// // console.log(counter1.count);

// // const counter2 = new Counter();
// // counter2.increment(); //1
// // console.log(counter2.returnCount()); //1

// // // //Factory pattern
// // function person(name, age) {
// //   return {
// //     name,
// //     age,
// //     incrementAge: function () {
// //       return this.age++;
// //     },
// //     decrementAge: function () {
// //       return this.age--;
// //     }
// //   };
// // }

// // const person1 = person('Aslam', 20);
// // console.log(person1);
// // console.log(typeof person);
// // console.log(person1.name);

// // // a();
// // // //FUnction statement FUnction declaration
// // // function a() {
// // //   console.log('Aslam');
// // // }

// // // //Function expression
// // // var b = () => {};

// function abc() {
//   console.log(abc.xyz);
// }

// abc();
// abc.xyz = 1;
// abc();

// const array = [1, 2, 3, 4];
// array[100] = 500;
// console.log(array);

// console.log(typeof typeof 100);

// const arr = [...'Aslam'];
// console.log(arr);

// console.log(parseInt('10+2'));
// console.log(parseInt('7FM'));
// console.log(parseInt('M7F'));

// console.log(isNaN('Aslam'));

// console.log(
//   [1, 2].map((num) => {
//     if (num > 0) return;

//     return num * 2;
//   })
// );

// function a(x, b) {
//   'use strict';

//   x = 100;
//   b = 200;

//   console.log(x + b);
// }
// a();

// const radius = [1, 2, 3, 4];

// const area = function (radius) {
//   return Math.PI * radius * radius;
// };

// const circumference = function (radius) {
//   return Math.PI * 2 * radius;
// };

// const diameter = function (radius) {
//   return 2 * radius;
// };

// const calculate = function (radius, logic) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }

//   return output;
// };

// Array.prototype.calculate = function (logic) {
//   const output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(logic(this[i]));
//   }

//   return output;
// };

// console.log(radius.map(area));
// console.log(radius.calculate(area));

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

// const arr = [5, 1, 3, 2, 6];

// const output = arr.filter((x) => x % 2 !== 0);
// console.log(output);

//sum or max

// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }

//   return sum;
// }

// console.log(findSum(arr));

// const output = arr.reduce((acc, curr) => {
//   if (curr > acc) {
//     acc = curr;
//   }
//   return acc;
// }, arr[0]);

// console.log(output);

const users = [
  { firstName: 'Aslam', lastName: 'Midde', age: 26 },
  { firstName: 'Zaheer', lastName: 'Midde', age: 26 },
  { firstName: 'Nayabbi', lastName: 'Midde', age: 27 },
  { firstName: 'Basha', lastName: 'Midde', age: 30 }
];

// const output = users.map((user) => user.firstName + ' ' + user.lastName);
// console.log(output);

const output = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

const output2 = users
  .filter((user) => {
    return user.age > 26;
  })
  .map((x) => x.firstName);
console.log(output2);

console.log(output);

const output3 = users.reduce((acc, curr) => {
  if (curr.age > 26) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(output3);
