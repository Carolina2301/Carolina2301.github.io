
let selection = "";

const decks = document.querySelectorAll(".options");

decks.forEach(deck => {
  const emotions = deck.querySelector(".emotions-img");
  const food = deck.querySelector(".comidas-img");

  emotions.addEventListener("click", () => {
    changeSelection("Emoções");
  });

  food.addEventListener("click", () => {
    changeSelection("Comidas");
  });
});

function changeSelection(newSelection) {
   selection = newSelection;
  shuffleCard(selection);
  Swal.fire({
    html: 'Você selecionou <strong>' + selection + '</strong>' + '.',
    icon: 'success',
    confirmButtonText: 'OK',
    confirmButtonColor: '#808080',
    showCancelButton: true,
    cancelButtonText: 'Iniciar novo Jogo',
    cancelButtonColor: '#2AB7CA'
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.cancel) {
      if (selection == "Emoções"){
        window.location.href = '/fases/emocoes_fase1.html';
      } else if(selection == "Comidas"){
        window.location.href = '/fases/comidas_fase1.html';
      }
    }
  });
}