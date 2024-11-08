document.getElementById('veracidadeInformacoes').addEventListener('change', function() {
    const corretoraRespInput = document.getElementById('corretora_resp');
    const cnpjTerceiroInput = document.getElementById('cnpj_terceiro');

    if (this.checked) {
        // Desabilita os inputs e altera os placeholders
        corretoraRespInput.disabled = true;
        corretoraRespInput.placeholder = "PREENCHIMENTO NÃO NECESSÁRIO";

        cnpjTerceiroInput.disabled = true;
        cnpjTerceiroInput.placeholder = "PREENCHIMENTO NÃO NECESSÁRIO";
    } else {
        // Habilita os inputs e restaura os placeholders originais
        corretoraRespInput.disabled = false;
        corretoraRespInput.placeholder = "";

        cnpjTerceiroInput.disabled = false;
        cnpjTerceiroInput.placeholder = "";
    }
});