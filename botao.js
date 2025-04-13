function criarBotaoExcluir(elementoTarefa) {
    const botao = document.createElement('button');
    botao.textContent = 'Excluir';
    botao.className = 'botao-excluir';
    botao.onclick = () => {
        const lista = document.getElementById('lista-tarefas');
        lista.removeChild(elementoTarefa);
    };
    return botao;
