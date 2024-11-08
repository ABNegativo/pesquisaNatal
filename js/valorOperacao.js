function formatarParaMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function limparMascaraMoeda(valor) {
    return parseFloat(valor.replace("R$", "").replace(/\./g, '').replace(',', '.')) || 0;
}

function atualizarValorOperacao() {
    // Captura e limpa a máscara dos valores dos inputs
    let valorFinanciado = limparMascaraMoeda(document.getElementById('valor_financiado').value);
    let valorProprio = limparMascaraMoeda(document.getElementById('valor_proprio').value);

    // Calcula a soma
    let valorOperacao = valorFinanciado + valorProprio;

    // Exibe o resultado no input valor_operacao com a máscara de moeda
    document.getElementById('valor_opercao').value = formatarParaMoeda(valorOperacao);
}

function aplicarMascaraMoeda(event) {
    let valor = event.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    valor = (valor / 100).toFixed(2); // Divide por 100 para ajustar as casas decimais
    event.target.value = formatarParaMoeda(parseFloat(valor)); // Aplica a formatação de moeda

    atualizarValorOperacao(); // Atualiza o valor da operação após aplicar a máscara
}

// Adiciona o evento de input para os dois campos com máscara
document.getElementById('valor_financiado').addEventListener('input', aplicarMascaraMoeda);
document.getElementById('valor_proprio').addEventListener('input', aplicarMascaraMoeda);

console.log ("ok, entrou no JS");