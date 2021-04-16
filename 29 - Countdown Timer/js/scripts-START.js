let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
   clearInterval(countdown);

   const now = Date.now();
   const then = now + seconds * 1000;
   displayTimeLeft(seconds);
   displayEndTime(then);

   countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
         clearInterval(countdown);
         document.title = 'Countdown Timer'; // Reset tab when countdown over
      }
      displayTimeLeft(secondsLeft);
   }, 1000)
}

function displayTimeLeft(time) {
   const minutes = String(~~(time / 60)).padStart(2, '0');
   const seconds = String(time % 60).padStart(2, '0');
   const display = `${minutes}:${seconds}`;

   document.title = display;
   timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
   const end = new Date(timestamp);
   const hour = String(end.getHours()).padStart(2, '0');
   const minutes = String(end.getMinutes()).padStart(2, '0');
   endTime.textContent = `Be Back At ${hour}:${minutes}`;
}

function startTimer() {
   const seconds = parseInt(this.dataset.time)
   timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer))
document.customForm.addEventListener('submit', function (e) {
   e.preventDefault();
   const mins = this.minutes.value;
   timer(mins * 60);
   this.reset();
});