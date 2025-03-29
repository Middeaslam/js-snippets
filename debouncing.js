//debouncing in javascript

const getData = () => {
  //calls an API and gets data

  console.log('Fetching data');
};
const doSomeMagic = (fn, delay) => {
  let timer;
  return function () {
    let context = this,
      args = arguments;

    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const betterFunction = doSomeMagic(getData, 300);
