function comecaJogo(){
    let secaoInicial = document.querySelector("#secao-inicial");
    secaoInicial.style.display = "none";//esconde seção inicial
    let secaoJogar = document.querySelector("#secao-jogar");
    secaoJogar.style.display = "block";
    let secaoAdd = document.querySelector("#secao-add-palavras");
    secaoAdd.style.display = "none";

    console.log("teste");

    iniciaCanvas();

}

function adicionaPalavras(){
    let secaoInicial = document.querySelector("#secao-inicial");
    secaoInicial.style.display = "none";//esconde seção inicial
    let secaoJogar = document.querySelector("#secao-jogar");
    secaoJogar.style.display = "none";
    let secaoAdd = document.querySelector("#secao-add-palavras");
    secaoAdd.style.display = "block";
    
    console.log("teste2");

}

