function criarBotaoConcluir(elementoTarefa) {
    const botao = document.createElement('button');
    botao.textContent = 'Concluir';
    botao.className = 'botao-concluir';
    botao.onclick = () => {
        elementoTarefa.classList.toggle('concluida');
    };
    return botao;
}
