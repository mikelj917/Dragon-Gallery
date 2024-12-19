const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");
const botoes = document.querySelectorAll(".botao");

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        imagens.forEach(img => img.classList.remove("ativa"));
        informacoes.forEach(info => info.classList.remove("ativa"));

        imagens[index].classList.add("ativa");
        informacoes[index].classList.add("ativa");

        botoes.forEach(btn => btn.classList.remove("selecionado"));
        botao.classList.add("selecionado");
    });
});