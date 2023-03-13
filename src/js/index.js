// dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel= document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

//dar um jeito de identificar o clique do usuario no botão
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener('click',() => {
    //desmarcar o botao selecionado anterior
    desativarBotaoSelecionado();

    //marcar o botao clicado como se estivesse selecionado
    selecionarBotaoCarrossel(botao);

    //esconder a imagem ativa de fundo anterior
    esconderImagemAtiva();

    // fazer aparecer a imagem de fundo correpondente ao botao clicado
    mostrarImagemDeFundo(indice);
  })
})

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
  botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector('.ativa');
  imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector('.selecionado');
  botaoSelecionado.classList.remove('selecionado');
}
