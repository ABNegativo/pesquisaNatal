document.addEventListener('DOMContentLoaded', function () {
    function buscaCEP(cepInputId, municipioId, enderecoId, bairroId) {
        const cepInput = document.getElementById(cepInputId);

        cepInput.addEventListener('blur', function () {
            const cep = cepInput.value.replace(/\D/g, '');

            if (cep.length === 8) {
                const url = `https://viacep.com.br/ws/${cep}/json/`;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        if (!data.erro) {
                            document.getElementById(municipioId).value = data.localidade;
                            document.getElementById(enderecoId).value = data.logradouro;
                            document.getElementById(bairroId).value = data.bairro;
                        } else {
                            alert('CEP não encontrado!');
                        }
                    })
                    .catch(error => {
                        console.error('Erro ao buscar o CEP:', error);
                    });
            } else {
                alert('CEP inválido!');
            }
        });
    }

    // Chamadas para as duas configurações de CEPs
    buscaCEP('cep', 'municipio', 'endereco_correspondecia', 'bairro');
    buscaCEP('cep2', 'municipio2', 'endereco_correspondecia2', 'bairro2');
});
