document.addEventListener('DOMContentLoaded', function() {
    const hFinanciamento = document.getElementById('h_financiamento');
    const naturezaOperacao = document.getElementById('natureza_operacao');
    const estadoCivil = document.getElementById('estado_civil');
    const estadoCivil2 = document.getElementById('estado_civil2');
    
    const secaoNoneDois = document.getElementById('secao_none_dois');
    const secaoNoneUm = document.getElementById('secao_none_um');
    const secaovalorProprio = document.getElementById("secao_none_valorProprio");
    
    const containerConjuge = document.getElementById('container_conjuge');
    const containerCpfConjuge = document.getElementById('container_cpf_conjuge');
    const containerConjuge2 = document.getElementById('container_conjuge2');
    const containerCpfConjuge2 = document.getElementById('container_cpf_conjuge2');

    // Função para atualizar a visibilidade das seções
    function atualizarVisibilidade() {
        // Mostra ou oculta a seção de "valor financiado"
        if (hFinanciamento.value === 'Sim, todo valor foi financiado') {
            secaoNoneDois.style.display = 'block';
            secaovalorProprio.style.display = 'none';
        } else if (hFinanciamento.value === 'Sim, parte do valor foi financiado') {
            secaoNoneDois.style.display = 'block';
            secaovalorProprio.style.display = 'block';
        } else {
            secaovalorProprio.style.display = 'block';
            secaoNoneDois.style.display = 'none';
        }

        // Mostra ou oculta a seção de "especificar natureza"
        if (naturezaOperacao.value === 'Outros') {
            secaoNoneUm.style.display = 'block';
        } else {
            secaoNoneUm.style.display = 'none';
        }

        // Mostra ou oculta a seção do cônjuge baseado no estado civil
        if (estadoCivil.value === 'Casado (a)' || estadoCivil.value === 'União Estável') {
            containerConjuge.style.display = 'block';
            containerCpfConjuge.style.display = 'block';
        } else {
            containerConjuge.style.display = 'none';
            containerCpfConjuge.style.display = 'none';
        }

        // Mostra ou oculta a seção do cônjuge2 baseado no estado civil2
        if (estadoCivil2.value === 'Casado (a)' || estadoCivil.value === 'União Estável') {
            containerConjuge2.style.display = 'block';
            containerCpfConjuge2.style.display = 'block';
        } else {
            containerConjuge2.style.display = 'none';
            containerCpfConjuge2.style.display = 'none';
        }
    }

    // Adiciona ouvintes de evento para mudanças nos selects
    hFinanciamento.addEventListener('change', atualizarVisibilidade);
    naturezaOperacao.addEventListener('change', atualizarVisibilidade);
    estadoCivil.addEventListener('change', atualizarVisibilidade);
    estadoCivil2.addEventListener('change', atualizarVisibilidade);

    // Chama a função inicialmente para definir o estado correto das seções
    atualizarVisibilidade();
});
