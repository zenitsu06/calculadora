// Função para adicionar um valor à tela da calculadora
function adicionarValor(valor) {
    // Obtém o elemento tela pelo ID
    const tela = document.getElementById('tela');
    // Adiciona o valor clicado ao conteúdo atual da tela
    tela.value += valor;
}

// Função para limpar a tela (usada no botão 'C')
function limparTela() {
    // Obtém o elemento tela pelo ID
    const tela = document.getElementById('tela');
    // Limpa o conteúdo da tela, deixando-a vazia
    tela.value = '';
}

// Função para deletar o último caractere da tela (usada no botão '←')
function apagarUltimo() {
    // Obtém o elemento tela pelo ID
    const tela = document.getElementById('tela');
    // Remove o último caractere do conteúdo atual da tela
    tela.value = tela.value.slice(0, -1);
}

// Função para calcular o resultado da expressão (usada no botão '=')
function calcular() {
    // Obtém o elemento tela pelo ID
    const tela = document.getElementById('tela');
    try {
        // Usa a função eval() para avaliar a expressão na tela e calcular o resultado
        tela.value = eval(tela.value);
    } catch (erro) {
        // Se houver um erro na avaliação, exibe "Erro" na tela
        tela.value = 'Erro';
    }
}