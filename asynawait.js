const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved 1');
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved 2');
  }, 5000);
});

async function handlePromise() {
  console.log('Hello World!!');

  const val = await p1;
  console.log('Hello React 1');
  console.log(val);

  const val2 = await p2;
  console.log('Hello React 2');
  console.log(val2);
}

handlePromise();
