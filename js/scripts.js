function mandaAVer(){
    const atencao = document.querySelector(".confirmacao");
    atencao.classList.remove('escondido');
}

function nunca(){
    const voltar = document.querySelector(".confirmacao");
    voltar.classList.add('escondido');
}

function claro(){
    const valor = document.querySelector(".texto").value;
    const objeto = {text:valor};

    setTimeout(finale, 2000);

   /* const promessa = axios.post('#',objeto);
    promessa.then(finale);
    promessa.catch(tentaDeNovo);*/
}

function finale(){
    const finalizar = document.querySelector(".confirmacao");
    const final = document.querySelector(".aba-pergunta");
    const despedida = document.querySelector(".finalizar");

    finalizar.classList.add('escondido');
    final.classList.add('escondido');
    despedida.classList.remove('escondido');
}

function tentaDeNovo(){
    alert("Deu Merda!!");
    location.reload(true);
}