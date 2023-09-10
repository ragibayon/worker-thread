const worker = new Worker('worker.js');

const changeBackground = document.getElementById('changeBackground');
const doCPUIntensiveWork = document.getElementById('doCPUIntensiveWork');
const doCPUIntensiveWorkInWorker = document.getElementById(
  'doCPUIntensiveWorkInWorker'
);
const resultDiv = document.getElementById('result');

changeBackground.addEventListener('click', () => {
  document.body.classList.toggle('color');
});

doCPUIntensiveWork.addEventListener('click', () => {
  const maxNum = 10000000000;
  console.log('count till ' + maxNum);
  let total = 0;
  for (let i = 0; i < maxNum; i++) {
    total += i;
  }
  console.log('Total ' + total);
});

doCPUIntensiveWorkInWorker.addEventListener('click', () => {
  resultDiv.innerHTML =
    '<p>Worker thread has started working. but the main thread in not blocked. </p>';
  worker.postMessage('Sent message to worker thread.');
  worker.onmessage = function (message) {
    const total = message.data;
    console.log('Total is ' + total);
    resultDiv.innerHTML = `<p> Calculation is complete and result is sent to main thread. Total is ${total}.</p>`;
  };
});
