const keys = document.querySelectorAll('.key');

// Event listeners
keys.forEach(key => key.addEventListener('transitionend', remove_highlight));
window.addEventListener('keydown', play_sound);

// Functions
function get_key(event) {
   event = event || window.event;
   return event.keyCode || event.which;
}

function play_sound(event) {
   let char_code = get_key(event);
   const audio = document.querySelector(`audio[data-key="${char_code}"]`)

   if (!audio) return; // Not a valid key, exit

   audio.currentTime = 0; // Rewind to start
   audio.play();

   highlight_key(char_code);
}

function highlight_key(char_code) {
   const key = document.querySelector(`.key[data-key="${char_code}"]`);
   key.classList.add('playing');
}

function remove_highlight(event) {
   if (event.propertyName != 'transform') return; // Skip if it isn't a transform
   event.target.classList.remove('playing')
}
