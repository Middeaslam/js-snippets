const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('P1 Success');
    reject('P1 Failed');
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('P2 Success');
    reject('P2 Failed');
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('P3 Success');
    reject('P3 failed');
  }, 2000);
});

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
    console.error(err.errors);
  });
