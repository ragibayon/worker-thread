onmessage = function (message) {
  console.log(message.data);
  const maxNum = 10000000000;
  console.log('Worker will count till ' + maxNum);
  let total = 0;
  for (let i = 0; i < maxNum; i++) {
    total += i;
  }
  console.log('Worker has finished counting. Result is sent to main thread');
  this.postMessage(total);
};
