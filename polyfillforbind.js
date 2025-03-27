//pollyfil is a sort of browser fallback

let name = {
  firstName: 'Mahammad',
  lastName: 'Aslam'
};

let printName = function (town, state) {
  console.log(this.firstName + ' ' + this.lastName + ' ' + town + ' ' + state);
};

let printMyName = printName.bind(name, 'Hyd');
printMyName();

Function.prototype.myBind = function (...args) {
  const obj = this;
  const params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.myBind(name, 'BGL');
printMyName2('Karnataka');
