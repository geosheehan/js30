const pressed = [];
const secretCode = '↑↑↓↓←→←→ba';

window.addEventListener('keyup', (e) => {
   let key;
   switch (e.key) {
      case 'ArrowUp': key = '↑'; break;
      case 'ArrowDown': key = '↓'; break;
      case 'ArrowLeft': key = '←'; break;
      case 'ArrowRight': key = '→'; break;
      default: key = e.key;
   }

   pressed.push(key);
   console.log(pressed);
   pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
   if (pressed.join('') === secretCode) {
      cornify_add();
   }

});