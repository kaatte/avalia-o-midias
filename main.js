function tocasom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;
while(contador < listaDeTeclas.length){
    const efeito = listaDeTeclas[contador].classlist(1);
    const idAudio = "#som_"+efeito;
    listaDeTeclas[contador].onclik = function(){
        tocasom (idAudio)
    }
    contador = contador +1;
    console.log(contador);
}