// Random Fruit from fruits array
// const RandomFruit = (fruits) => {
//   let fruit = Math.floor(Math.random() * fruits.length);

//   return fruits[fruit];
// };

// const fruits = ["🍎", "🍌", "🍐", "🍒", "🍇"];
// console.log(RandomFruit(fruits));

// const weatherScorer = (weather) => {
//     let score = Math.floor(Math.random() * weather.length);

//     if(score == 0){
//         console.log('rainy');
//     }
//     else if(score == 1){
//         console.log('overcast');
//     }
//     else if(score == 2){
//         console.log('sunny');
//     }
// }

// let weather = ['rainy', 'overcast', 'sunny'];
// weatherScorer(weather);

// const dogimagdiv = document.getElementById("dogImage");
// const btn_dog = document.getElementById("dogButton");

// const new_dog = () => {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response) => response.json())
//     .then((json) => {
//       dogimagdiv.innerHTML = `<img src=${json.message} height=300 width=300 />`;
//     });
// };

// btn_dog.onclick = () => new_dog();  // How to add onclick in HTML TOMORROW

// SUPERHERO APP
const SUPERHERO_TOKEN = "10223569763528853";
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const newHeroButton = document.getElementById("newHeroButton");

const heroImageDiv = document.getElementById("heroImage");

const searchButton = document.getElementById("searchButton");

const searchInput = document.getElementById("searchInput");

const getSuperHero = (id, name) => {
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.powerstats);
      const superHero = json;
      showHeroInfo(superHero);
    });
};

const statToEmoji = {
  intelligence: "🧠",
  strength: "💪",
  speed: "⚡",
  durability: "🏋️‍♂️",
  power: "📊",
  combat: "⚔️",
};

const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`;

  const img = `<img src="${character.image.url}" height=200 width=200/>`;

  const stats = Object.keys(character.powerstats)
    .map((stat) => {
      return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${
        character.powerstats[stat]
      }</p>`;
    })
    .join("");

  heroImageDiv.innerHTML = `${name}${img}${stats}`;
};

const getSearchSuperHero = (name) => {
  console.log(searchInput.value);
  fetch(`${BASE_URL}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      const hero = json.results[0];
      showHeroInfo(hero);
    });
};

const randomHero = () => {
  const numberOfHeroes = 731;
  return Math.floor(Math.random() * numberOfHeroes) + 1;
};

newHeroButton.onclick = () => getSuperHero(randomHero());

searchButton.onclick = () => getSearchSuperHero(searchInput.value);
