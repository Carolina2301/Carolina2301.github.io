// Declaração de variáveis
let matched = 0;
let tentativas = 0;
let disableDeck = false;
let cardOne, cardTwo;
let cardOneType, cardTwoType;

const imgPath = "cards/food/food_img-";

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
      cardOneType = parseInt(cardOne.querySelector(".back-view img").dataset.cardType);
      cardTwoType = parseInt(cardTwo.querySelector(".back-view img").dataset.cardType);
      matchCards(cardOneType, cardTwoType);
  }
}

// Função para comparar duas cartas selecionadas
function matchCards(type1, type2) {
  //alert(type1, type2);
  tentativas++;
  document.getElementById("tentativas").innerHTML = "Tentativas: " + tentativas;

  if(type1 === type2) {
    matched++;
    correctaudio.play();

    if(matched == 4) {

      Swal.fire({
        title: 'Parabéns!',
        text: 'Você concluiu a fase 1.',
        icon: 'success',
        showCancelButton: true,
        showDenyButton: true,
        confirmButtonText: 'Iniciar fase 2',
        denyButtonText: 'Compartilhar resultado',
        cancelButtonText: 'Voltar ao menu',
        confirmButtonColor: '#2AB7CA',
        denyButtonColor: '#128C7E',
        reverseButtons: true,
        allowOutsideClick: false,
        allowEscapeKey: false
      }).then((result) => {
        if(result.isConfirmed){
          window.location.href = '../fase2/comidas_fase2.html';
        }else if(result.isDismissed){
          window.location.href = '../../index.html';
        }//else if(result.isDenied){;}
      });
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
function shuffleCard() {
  const cardTypes = Array.from({ length: cards.length / 2 }, (_, index) => index + 1);
  const shuffledCardTypes = shuffleArray([...cardTypes, ...cardTypes]);

  // Zera variáveis
  matched = 0;
  disableDeck = false;
  cardOne = cardTwo = null;

  // Atribui as imagens embaralhadas e seus tipos às cartas
  cards.forEach((card, i) => {
    let imgTag = card.querySelector(".back-view img");

    card.classList.remove("flip");
    imgTag.src = `${imgPath}${shuffledCardTypes[i]}.png`;
    imgTag.dataset.cardType = shuffledCardTypes[i];
    card.addEventListener("click", flipCard);
  });
}

// Função para embaralhar um array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Embaralha as cartas
shuffleCard();