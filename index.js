window.addEventListener('load', function() {
  var logo = document.getElementById('logo');
  
  if (window.innerWidth <= 768) {
    logo.src = 'images/ComuniCards-mobile.svg';
  }
});


document.addEventListener("DOMContentLoaded", function() {
  const novoJogoLink = document.getElementById("novoJogoLink");

  novoJogoLink.addEventListener("click", function(event) {
    event.preventDefault();

    Swal.fire({
      title: 'Selecione um deck de cartas:',
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonText: '<div><img src="https://carolina2301.github.io/images/emocao.svg" alt="Imagem" class="button-image"></div><div>Emoções</div>',
      denyButtonText: '<div><img src="https://carolina2301.github.io/images/comida.svg" alt="Imagem" class="button-image"></div><div>Comidas</div>',
      cancelButtonText: 'Voltar',
      reverseButtons: true,
      confirmButtonColor: '#2AB7CA',
      denyButtonColor: '#2AB7CA',
      cancelButtonColor: '#2AB7CA',
      customClass: {
        confirmButton: 'custom-sawl-confirmButton',
        denyButton: 'custom-sawl-denyButton',

      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'https://carolina2301.github.io/fases/fase1/emocoes_fase1.html';
      }else if(result.isDenied){
        window.location.href = 'https://carolina2301.github.io/fases/fase1/comidas_fase1.html';
      }
    });
  });
});
