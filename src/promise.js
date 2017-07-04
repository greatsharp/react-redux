let promise = new Promise((resolve, reject) => {
  console.log('promise');
  resolve('xxxxx');
  // reject(new Error('operation failed'));
});

promise.then(value => {
  console.log('success: ' + value);
  return 'success';
}).then(value2 => {
  console.log(value2);
}, error2 => {
  console.log(error2);
});

console.log('Hi');