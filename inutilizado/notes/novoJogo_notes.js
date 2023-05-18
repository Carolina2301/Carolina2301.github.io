const cards = document.querySelectorAll(".card");   //const cards armazena todos os elementos HTML de classe "card", através da função "querySelectorAll" que consulta o objeto "document" do DOM.

let matched = 0;    //contar o número de pares de cartas encontrados.
let cardOne, cardTwo;   //armazenar temporariamente as cartas selecionadas pelo usuário.
let disableDeck = false;    //utilizada para evitar que o usuário selecione mais de duas cartas ao mesmo tempo.

//função "flipCard" é executada quando o usuário clica em uma carta.
function flipCard({target: clickedCard}) {  //variável "clickedCard" armazena o objeto clicado.
    if(cardOne !== clickedCard && !disableDeck) {   //verifica se a carta clicada não é a mesma que já está selecionada e se o deck não está desativado (disableDeck==false).
        clickedCard.classList.add("flip");  //adiciona a classe "flip" (efeito de rotação definido no CSS)ao elemento HTML que foi clicado.
        if(!cardOne) {  //verifica se cardOne não está definida (se é nula ou undefined).
            return cardOne = clickedCard;   //"cardOne" recebe a referência do elemento que foi clicado (clickedCard) e a função retorna (para sair da função).
        }
        cardTwo = clickedCard;  //Se "cardOne" já estiver definida, então cardTwo recebe a referência do elemento clicado (clickedCard).
        disableDeck = true; //evita que o jogador clique em outras cartas durante o processamento do jogo.
        //Em seguida, são obtidas as imagens correspondentes às cartas "cardOne" e "cardTwo".
        //As imagens são obtidas através do seletor ".back-view img", que seleciona a imagem contida na div com a classe "back-view" dentro da carta.
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg); //chama a função "matchCards" para verificar se as cartas clicadas são iguais ou diferentes.
    }
}

function matchCards(img1, img2) {   //parâmetros img1 e img2 contêm as URLs das imagens exibidas nas cartas.
    if(img1 === img2) { //verifica se as imagens são iguais.
        matched++;  //matched mantém o controle do número de pares correspondentes encontrados.
        if(matched == 8) {  //se todos os pares foram encontrados o jogo é reiniciado.
            setTimeout(() => {
                return shuffleCard();
            }, 1000);   //Isso é feito chamando a função shuffleCard() após 1 segundo de espera.
        }
        //remove o evento de clique para impedir que o usuário clique nessas cartas novamente.
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = ""; //redefine as variáveis para uma string vazia.
        return disableDeck = false; //reativa o deck.
    }
    //caso as cartas não sejam iguais.
    setTimeout(() => {  //adiciona a classe "shake".
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {  //remove as classes "shake" e "flip".
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1500);
}

function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 1, 2, 3, 4];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `cards/img-${arr[i]}.png`;
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();
    
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});