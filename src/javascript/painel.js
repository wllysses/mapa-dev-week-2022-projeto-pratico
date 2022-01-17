/* 
    quando clicar na seta AVANÇAR, esconder todas as imagens
    anteriores e mostrar a próxima

        a imagem começa em 0 (posição 1) e assim que clicar
        na seta AVANÇAR adicionar + 1 ao contador de imagens (começara com 0)

        esconder todas as imagens
            pegar as imagens através do DOM e remover a classe MOSTRAR
        
        mostrar a próxima imagem
            pegar todas as imagens através do DOM e adicionar a classe MOSTRAR na próxima imagem (removendo da anterior para não mostrar a duas ao mesmo tempo)
*/

const imagensPainel = document.querySelectorAll('.imagem-painel')
const setaAvancar = document.getElementById('btn-avancar')
const setaVoltar = document.getElementById('btn-voltar')
let imagemAtual = 0

//CRIAR FUNÇÕES PARA ESCONDER E MOSTRAR A IMAGEM (PARA CHAMA-LA QUANDO HOUVER O CLIQUE NOS BOTÕES)
function esconderImagem() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar')
}

//CRIAR OS EVENTOS DE CLIQUE E FAZER AS VERIFICAÇÕES PARA PARAR O CARROSSEL QUANDO NÃO HOUVER MAIS IMAGENS
setaAvancar.addEventListener('click', function() {

    const totalDeImagens = imagensPainel.length - 1
    if (imagemAtual === totalDeImagens) {
        return // parar a execução
    }

    imagemAtual++

    esconderImagem()
    mostrarImagem()
})

setaVoltar.addEventListener('click', function() {

    if (imagemAtual === 0) {
        return // para a execução
    }

    imagemAtual--

    esconderImagem()
    mostrarImagem()
})