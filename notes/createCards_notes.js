const cardsData = [
  // Array com objetos que representam as informações das cartas do jogo
  {id: 1, imgPath: "cards/emotion_img-1.png", audioPath: "feliz_audio1.mp3"},
  {id: 2, imgPath: "cards/emotion_img-2.png", audioPath: "sono_audio2.mp3"},
  {id: 3, imgPath: "cards/emotion_img-3.png", audioPath: "surpreso_audio3.mp3"},
  {id: 4, imgPath: "cards/emotion_img-4.png", audioPath: "triste_audio4.mp3"},
];

const numOfCopies = 2; // Quantidade de cópias que serão feitas de cada carta
const newCardsData = []; // Array que vai armazenar as novas cartas com suas cópias

// Loop que percorre cada carta do array original e cria suas cópias
for (let i = 0; i < cardsData.length; i++) {
  const card = cardsData[i];
  for (let j = 0; j < numOfCopies; j++) {
    const newCard = {...card}; // Cria um novo objeto a partir do objeto da carta original
    newCardsData.push(newCard); // Adiciona o novo objeto no array de cartas com cópias
  }
}

// Imprime no console as informações das novas cartas criadas
console.log(newCardsData);

const cardsList = document.querySelector(".cards"); // Seleciona o elemento <ul> que vai conter as cartas

// Loop que percorre cada objeto de carta no array de novas cartas e cria elementos <li> para cada uma
newCardsData.forEach(cardData => {
  const card = document.createElement("li"); // Cria um novo elemento <li> para a carta
  card.classList.add("card"); // Adiciona a classe "card" ao elemento <li>
  card.dataset.audio = `audio${cardData.id}`; // Define um atributo "data-audio" no elemento <li> com o ID da carta

  const frontView = document.createElement("div"); // Cria um novo elemento <div> para a face frontal da carta
  frontView.classList.add("view", "front-view"); // Adiciona as classes "view" e "front-view" ao elemento <div>

  const frontImg = document.createElement("img"); // Cria um novo elemento <img> para o ícone da face frontal da carta
  frontImg.src = "cards/question-mark.png"; // Define o caminho da imagem do ícone
  frontImg.alt = "icon"; // Define o texto alternativo da imagem do ícone

  frontView.appendChild(frontImg); // Adiciona o elemento <img> no elemento <div> da face frontal da carta

  const backView = document.createElement("div"); // Cria um novo elemento <div> para a face traseira da carta
  backView.classList.add("view", "back-view"); // Adiciona as classes "view" e "back-view" ao elemento <div>

  const backImg = document.createElement("img"); // Cria um novo elemento <img> para a imagem da face traseira da carta
  backImg.src = cardData.imgPath; // Define o caminho da imagem da face traseira da carta
  backImg.alt = "card-img"; // Define o texto alternativo da imagem da face traseira da carta

  backView.appendChild
