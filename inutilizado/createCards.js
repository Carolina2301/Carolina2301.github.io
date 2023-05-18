//import { cardSet } from "./script.js";

// Array com objetos que representam as informações das cartas do jogo
const cardsData = [
  {id: 1, imgPath: "cards/emotion_img-1.png"},
  {id: 2, imgPath: "cards/emotion_img-2.png"},
  {id: 3, imgPath: "cards/emotion_img-3.png"},
  {id: 4, imgPath: "cards/emotion_img-4.png"},
];
  
const foodData = [
  {id: 1, imgPath: "cards/food_img-1.png"},
  {id: 2, imgPath: "cards/food_img-2.png"},
  {id: 3, imgPath: "cards/food_img-3.png"},
  {id: 4, imgPath: "cards/food_img-4.png"},
];

//const cardsData = [];

// Quantidade de cópias que serão feitas de cada carta
const numOfCopies = 2;

// Array que vai armazenar as novas cartas com suas cópias
const newCardsData = [];

/*function copyArray(originalArray) {
  const newArray = [];
  originalArray.forEach(item => newArray.push({...item}));
  return newArray;
}

if (cardSet === "emotions") {
  cardsData = copyArray(emotionsData);
} else if (cardSet === "food") {
  cardsData = copyArray(foodData);
}*/
  
// Loop que percorre cada carta do array original e cria suas cópias
for (let i = 0; i < cardsData.length; i++) {
  const card = cardsData[i];
  for (let j = 0; j < numOfCopies; j++) {
    const newCard = {...card};
    newCardsData.push(newCard);
  }
}

// Imprime no console as informações das novas cartas criadas  
console.log(newCardsData);

// Seleciona o elemento <ul> que vai conter as cartas
const cardsList = document.querySelector(".cards");
  
// Loop que percorre cada objeto de carta no array de novas cartas e cria elementos <li> para cada uma
newCardsData.forEach(cardData => {
  const card = document.createElement("li");
  card.classList.add("card");
  card.dataset.audio = `audio${cardData.id}`;

  const frontView = document.createElement("div");
  frontView.classList.add("view", "front-view");

  const frontImg = document.createElement("img");
  frontImg.src = "cards/question-mark.png";
  frontImg.alt = "icon";

  frontView.appendChild(frontImg);

  const backView = document.createElement("div");
  backView.classList.add("view", "back-view");

  const backImg = document.createElement("img");
  backImg.src = cardData.imgPath;
  backImg.alt = "card-img";

  backView.appendChild(backImg);

  card.appendChild(frontView);
  card.appendChild(backView);

  cardsList.appendChild(card);

  /*const audio = document.createElement("audio");
  audio.id = `audio${cardData.id}`;
  const source = document.createElement("source");
  source.src = cardData.audioPath;
  source.type = "audio/mpeg";
  audio.appendChild(source);
  document.body.appendChild(audio);*/
});


cardsList.addEventListener("click", event => {
  const clickedCard = event.target.closest(".card");
  if (!clickedCard) return;
  flipCard(clickedCard);
});
  