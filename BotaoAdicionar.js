function adicionarTarefa() {
    const input = document.getElementById('nova-tarefa');
    const textoTarefa = input.value.trim();

    if (textoTarefa === '') {
        alert('Digite uma tarefa válida!');
        return;
    }

    const lista = document.getElementById('lista-tarefas');

    const li = document.createElement('li');
    li.textContent = textoTarefa;

    const botoesDiv = document.createElement('div');
    botoesDiv.className = 'botoes';

    const btnConcluir = criarBotaoConcluir(li);
    const btnExcluir = criarBotaoExcluir(li);

    botoesDiv.appendChild(btnConcluir);
    botoesDiv.appendChild(btnExcluir);
    li.appendChild(botoesDiv);

    lista.appendChild(li);

    input.value = '';
}
