const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
   console.log(this.classList.value);
   e.stopPropagation(); // Prevents bubbling to parents
}

divs.forEach(div => div.addEventListener('click', logText, {
   capture: true, // Runs the function from parent -> child; false by default
   once: true // Listens for a click once and then unbinds itself
}));

// Use case could be a store Checkout that prevents duplicate orders from processing.
button.addEventListener('click', () => {
   console.log('Click!!!');
}, {
   once: true
})