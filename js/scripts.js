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

    const mensagem = axios.post('https://bootbar.maroto.dev/questions', objeto);
    mensagem.then(finale);
    mensagem.catch(tentaDeNovo);
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