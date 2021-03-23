const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
   .then(res => res.json())
   .then(data => {
      cities.push(...data);
      console.log(findMatches('Bos', cities));
   })
   .catch(err => {
      console.error(err);
   });

function findMatches(wordToMatch, cities) {
   return cities.filter(place => {
      const regex = new RegExp(wordToMatch, 'gi');
      return place.city.match(regex) || place.state.match(regex);
   });
}

function numberWithCommas(x) {
   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
   if (this.value === '') {
      // Go back to default
      suggestions.innerHTML = `
         <li>Filter for a city</li>
         <li>or a state</li>
      `;
      return;
   }

   const matchArray = findMatches(this.value, cities);
   const html = matchArray.map(place => {
      const regex = new RegExp(this.value, 'gi');
      const replace = `<span class="hl">${this.value}</span>`;

      const city = place.city.replace(regex, replace);
      const state = place.state.replace(regex, replace);
      const population = numberWithCommas(place.population);

      return `
         <li>
            <span class="name">${city}, ${state}</span>
            <span class="population">${population}</span>
         </li>
      `;
   }).join('');
   suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('input', displayMatches);
