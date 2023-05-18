// Declaração de variáveis
let matched = 0;
let tentativas = 0;
let disableDeck = false;
let cardOne, cardTwo;
let cardOneImg, cardTwoImg;

const imgPath = "cards/emotions/emotion_img-";

// Elementos de áudio
const correctaudio = document.getElementById("correct-audio");
const incorrectaudio = document.getElementById("incorrect-audio");

// Selecionando todas as cartas do jogo
const cards = document.querySelectorAll(".card");

// Seleção do conjunto de cartas
const cardSet = sessionStorage.getItem("cardSet");
console.log(cardSet);

// Adiciona evento de clique para as cartas
cards.forEach(card => {
  card.addEventListener("click", flipCard);
});

// Função para virar a carta selecionada
function flipCard({target: clickedCard}) {

  if(cardOne !== clickedCard && !disableDeck) {
      clickedCard.classList.add("flip");
      
      if(!cardOne) {
          return cardOne = clickedCard;
      }

      cardTwo = clickedCard;
      disableDeck = true;
      cardOneImg = cardOne.querySelector(".back-view img").src,
      cardTwoImg = cardTwo.querySelector(".back-view img").src;
      alert(cardOneImg, cardTwoImg);
      matchCards(cardOneImg, cardTwoImg);
  }
}

// Função para comparar duas cartas selecionadas
function matchCards(img1, img2) {
  tentativas++;
  document.getElementById("tentativas").innerHTML = "Tentativas: " + tentativas;

  if(img1 === img2) {
    matched++;
    correctaudio.play();

    if(matched == 8) {
        setTimeout(() => {
            return shuffleCard();
        }, 1000);
    }

    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = null;
    return disableDeck = false;
  }
  else {
    incorrectaudio.play();

    setTimeout(() => {
      cardOne.classList.add("shake");
      cardTwo.classList.add("shake");
  }, 400);
  }

  setTimeout(() => { 
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne = cardTwo = null;
    disableDeck = false;
  }, 1500);
}

// Função para embaralhar as cartas
function shuffleCard(cardSet) {
  let arr = [1, 2, 3, 4, 1, 2, 3, 4];

  // Zera variáveis
  matched = 0;
  disableDeck = false;
  cardOne = cardTwo = null;

  console.log(cardSet);

  // Embaralha o array
  arr.sort(() => (Math.random() > 0.5 ? 1 : -1));

  // Atribui as imagens embaralhadas às cartas
   cards.forEach((card, i) => {
    let imgTag = card.querySelector(".back-view img");

    card.classList.remove("flip");
    imgTag.src = `${imgPath}${arr[i]}.png`;
     card.addEventListener("click", flipCard);
    });
}

// Embaralha as cartas
shuffleCard(cardSet);

