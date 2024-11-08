document.addEventListener('DOMContentLoaded', function() {
    // Função para aplicar a máscara de CPF e CNPJ
    function aplicarMascaraCpfCnpj(input) {
        input.addEventListener('input', function() {
            let valor = this.value.replace(/\D/g, '');
            if (valor.length <= 11) {
                this.value = valor.replace(/(\d{3})(\d{3})?(\d{3})?(\d{2})?/, '$1.$2.$3-$4').trim();
            } else {
                this.value = valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, '$1.$2.$3/$4').replace(/(\d{2})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4').trim();
            }
        });
    }

    // Função para aplicar a máscara de CEP
    function aplicarMascaraCep(input) {
        input.addEventListener('input', function() {
            let valor = this.value.replace(/\D/g, '');
            this.value = valor.replace(/(\d{5})(\d{3})/, '$1-$2').trim();
        });
    }

    // Função para aplicar a máscara de valores
    function aplicarMascaraValor(input) {
        input.addEventListener('input', function() {
            let valor = this.value.replace(/\D/g, '');
            this.value = 'R$' + valor.replace(/(\d)(\d{2})$/, '$1,$2').replace(/(\d)(\d{3})$/, '$1.$2').replace(/(\d)(\d{3})(\d{3})$/, '$1.$2.$3').trim();
        });
    }

    // Função para aplicar a máscara de telefone
    function aplicarMascaraTelefone(input) {
        input.addEventListener('input', function() {
            let valor = this.value.replace(/\D/g, '');
            this.value = valor.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3').trim();
        });
    }

    // Função para aplicar a máscara de porcentagem
    function aplicarMascaraPorcentagem(input) {
        input.addEventListener('input', function() {
            let valor = this.value.replace(/\D/g, '');

            if (valor > 100) {
                valor = '100';
            }

            this.value = valor + '%';
        });

        // Remover o sinal de porcentagem ao focar no input
        input.addEventListener('focus', function() {
            this.value = this.value.replace('%', '');
        });

        // Adicionar novamente o sinal de porcentagem ao desfocar do input
        input.addEventListener('blur', function() {
            let valor = this.value.replace(/\D/g, '');
            if (valor === '') {
                this.value = '';
            } else {
                this.value = valor + '%';
            }
        });
    }

    // Aplicar máscaras aos inputs com IDs fornecidos
    aplicarMascaraCpfCnpj(document.getElementById('cnpj'));
    aplicarMascaraCpfCnpj(document.getElementById('cnpj2'));
    aplicarMascaraCpfCnpj(document.getElementById('cpf_conjuge'));
    aplicarMascaraCpfCnpj(document.getElementById('cpf_conjuge2'));
    aplicarMascaraCpfCnpj(document.getElementById('cnpj_terceiro'));
    aplicarMascaraCep(document.getElementById('cep'));
    aplicarMascaraCep(document.getElementById('cep2'));
    aplicarMascaraValor(document.getElementById('valor_financiado'));
    aplicarMascaraValor(document.getElementById('valor_proprio'));
    aplicarMascaraValor(document.getElementById('valor_opercao'));
    aplicarMascaraTelefone(document.getElementById('telefone'));
    aplicarMascaraTelefone(document.getElementById('telefone2'));
    aplicarMascaraPorcentagem(document.getElementById('fraca_transacionada'));

    // Definir limite de caracteres
    document.getElementById('cnpj').setAttribute('maxlength', '18');
    document.getElementById('cnpj2').setAttribute('maxlength', '18');
    document.getElementById('cpf_conjuge').setAttribute('maxlength', '14');
    document.getElementById('cpf_conjuge2').setAttribute('maxlength', '14');
    document.getElementById('cnpj_terceiro').setAttribute('maxlength', '18');
    document.getElementById('cep').setAttribute('maxlength', '10');
    document.getElementById('cep2').setAttribute('maxlength', '10');
    document.getElementById('valor_financiado').setAttribute('maxlength', '100');
    document.getElementById('valor_proprio').setAttribute('maxlength', '100');
    document.getElementById('valor_opercao').setAttribute('maxlength', '100');
    document.getElementById('telefone').setAttribute('maxlength', '14');
    document.getElementById('telefone2').setAttribute('maxlength', '14');
    document.getElementById('fraca_transacionada').setAttribute('maxlength', '4'); // Para valores de 0 a 100%
});
