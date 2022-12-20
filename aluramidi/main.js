
function tocarSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);
    if (elemento === null){
        console.log("Elemento não encontrado ou seletor invalido");
    }else if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log("Elemento não encontrado ou seletor invalido");
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let i =0; i<listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i];
    const instumento = tecla.classList[1];
    const idAudio = `#som_${instumento}`
    tecla.onclick = function (){
        tocarSom(idAudio);
    }

    tecla.onkeydown = function (evento){
        if (evento.code === "Space" || evento.code === "Enter") {
            tecla.classList.add('ativa');
        }
    }
    
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}
