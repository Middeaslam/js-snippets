let name = {
  firstName: 'Aslam',
  lastName: 'Midde'
};

let printFullName = function (hometown) {
  console.log(this.firstName + ' ' + this.lastName + ' ' + hometown);
};

let name2 = {
  firstName: 'Zaheer',
  lastName: 'Midde'
};

printFullName.call(name2, 'Bangalore');
printFullName.apply(name2, ['Hyderabad']);

const printMyName = printFullName.bind(name2);
printMyName('Pune');
