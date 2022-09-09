
const partesDoCorpo = ["cabeça", "braço-esquerdo", "braço-direito", "tronco", "perna-esquerda", "perna-direita"];
let listaDePalavras = ["paçoca", "aminduim", "teste", "pneumoultramicroscopicossilicovulcanoconiótico", "w"];
const tela = document.querySelector(".tela-canvas");
const pincel = tela.getContext("2d");

function sorteiaPalavra(){
    //Math.random() * (listaDePalavras.length - 0) + 0; [0, max)
    return listaDePalavras[Math.floor(Math.random() * (listaDePalavras.length))];
}

function desenhaLinhaDoCaracter(quantidade){
    tela.width = 600;
    tela.height = 500;

    pincel.lineWidth = 4;
    pincel.strokeStyle = "#0A3871";
    pincel.lineCap = "round";//final das linha arredondadas
    pincel.lineJoin = "round";//a junção de 2 linhas terá ponta arredondada

    let tamanhoLinha = 50;
    let espaco = 16;
    for(let i = 0; i < quantidade; i++){
        pincel.beginPath();
            pincel.moveTo((tamanhoLinha+espaco)*i, 400);
            pincel.lineTo((tamanhoLinha + espaco*i)*(i+1), 400);
            pincel.stroke();
        pincel.closePath();
    }

    
    

}


function iniciaCanvas(){
    let palavraSorteada = sorteiaPalavra();
    let numeroDeCaracteres = palavraSorteada.length;


    desenhaLinhaDoCaracter(numeroDeCaracteres);
    console.log(numeroDeCaracteres);
}

function limpaCanva(){
    pincel.clearRect(0, 0, tela.width, tela.height);
}