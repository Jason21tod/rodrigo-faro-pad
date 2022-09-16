function playSound (idAudioElement) {
    document.querySelector(idAudioElement).play();
}


const keyList = document.querySelectorAll('.tecla');

console.log(keyList);



//while true...
//For counter            Condição de saida        Somar o contador
for ( let counter = 0; counter < keyList.length; counter++) {
    
    key = keyList[counter];
    const instrument = key.classList[1];
    
    console.log(`#som_${instrument}`);

    //Codigo de template text, pra inserir codigos em strings | Utilizando para strings dinamicas
    const idAudio = `#som_${instrument}`

    key.onclick = function () {
        playSound(idAudio)
    };

    key.onkeydown = function (event) {
        console.log(event)
        
        if ('tab') {
            key.classList.add('ativa');
        }
        
    };

    key.onkerup = function () {
        key.classList.remove('ativa');
    };
}
