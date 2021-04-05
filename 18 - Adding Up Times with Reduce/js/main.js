const SECS_PER_HOUR = 60 * 60;

const videos = Array.from(document.querySelectorAll('[data-time]'));

const seconds = videos
   .map(video => video.dataset.time)
   .map(time => {
      const [min, sec] = time.split(':').map(parseFloat);
      return (min * 60) + sec;
   })
   .reduce((total, seconds) => total + seconds);

let secondsLeft = seconds;
const hours = ~~(secondsLeft / SECS_PER_HOUR);
secondsLeft = secondsLeft % SECS_PER_HOUR;
const mins = ~~(secondsLeft / 60);
const secs = secondsLeft % 60;

console.log(hours, mins, secs);