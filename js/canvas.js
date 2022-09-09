
const partesDoCorpo = ["cabeça", "braço-esquerdo", "braço-direito", "tronco", "perna-esquerda", "perna-direita"];
let listaDePalavras = ["paçoca", "aminduim", "teste", "pneumoultramicroscopicossilicovulcanoconiótico", "w"];
const tela = document.querySelector(".tela-canvas");
const pincel = tela.getContext("2d");

function sorteiaPalavra(){
    //Math.random() * (listaDePalavras.length - 0) + 0; [0, max)
    return listaDePalavras[Math.floor(Math.random() * (listaDePalavras.length))];
}

function desenhaLinhaDoCaracter(quantidade){
    pincel.lineWidth = 4;
    pincel.fillStyle = "#0A3871";
    pincel.lineCap = "round";//final das linha arredondadas

    

}


function iniciaCanvas(){
    let palavraSorteada = sorteiaPalavra();
    let numeroDeCaracteres = palavraSorteada.length;


    desenhaLinhaDoCaracter(numeroDeCaracteres);
    console.log(numeroDeCaracteres);
}