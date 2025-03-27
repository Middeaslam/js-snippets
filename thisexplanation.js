// 'use strict';

//this in global space
console.log(globalThis); //global object or window

//this inside a function

function x() {
  console.log(this); // value will be window when it is not in strict mode, undefined in strict mode
}

x(); //undefined prints

//this inside non-strict mode - (this substitution)

//If the value of this keyword is undefined or null this will be replaced with globalObject only in non strict mode

// this keyword value depends on how the function is called

window.x(); //this prints window

//this inside a object's methos

const student = {
  name: 'Aslam',
  printName: function () {
    console.log(this.name);
  }
};

student.printName(); // prints the name

//call apply bind

const student2 = {
  name: 'Zaheer'
};

student.printName.call(student2); // value of this is student2

//this inside arrow function

const obj = {
  a: 10,
  x: function () {
    console.log(this);
  }
};

obj.x();

const obj2 = {
  a: 20,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  }
};

obj2.x();

//this inside html elelments is reference to it tag

function a() {
  function b() {
    console.log(this);
  }
  b();
}

a();
