const clockFace = document.querySelector(`.clock-face`)

const secondsHand = document.querySelector(`.second-hand`);
const minutesHand = document.querySelector(`.min-hand`);
const hoursHand = document.querySelector(`.hour-hand`);


function setHand(time, slice, clockHand) {
   const degrees = (time / slice) * 360;
   if (0 === time) {
      clockFace.style.transition = 'none';
   }
   else if (1 === time) {
      clockFace.style.transition = 'transition: all 0.05s';
   }
   clockHand.style.transform = `rotate(${degrees}deg)`;
   return time.toString().padStart(2, "0")
}

function setTime() {
   const now = new Date();
   const seconds = setHand(now.getSeconds(), 60, secondsHand)
   const minutes = setHand(now.getMinutes(), 60, minutesHand)
   const hours = setHand(now.getHours(), 12, hoursHand)

   console.log(`${hours}:${minutes}:${seconds}`)
}

setInterval(setTime, 1000);