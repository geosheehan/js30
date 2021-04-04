
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(sentence) {
   return sentence.replace(/^(a |the |an )/i, '').trim();
}

bands.sort((a, b) => strip(a).localeCompare(strip(b)));
document.getElementById('bands').innerHTML =
   bands
      .map(band => `<li>${band}</li>`)
      .join('');