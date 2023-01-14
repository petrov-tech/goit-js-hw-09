const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;
// const body = document.querySelector('body');
// let bodyColor = body;

stopBtn.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => {
  // startBtn.setAttribute('disabled', 'disabled');
  // stopBtn.removeAttribute('disabled', 'disabled');
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  // stopBtn.setAttribute('disabled', 'disabled');
  // startBtn.removeAttribute('disabled', 'disabled');
  startBtn.disabled = false;
  stopBtn.disabled = true;
});
