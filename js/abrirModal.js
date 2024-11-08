document.addEventListener('DOMContentLoaded', function() {
    // Abrir o modal automaticamente quando a página carregar
    $('#myModal').modal('show');

    // Função para esconder o modal aplicando display: none com !important
    function esconderModal() {
        var modal = document.getElementById('myModal');
        modal.style.setProperty('display', 'none', 'important');
        $('body').removeClass('modal-open'); // Remover a classe que impede a rolagem
        $('.modal-backdrop').remove(); // Remover a sobreposição do fundo
    }

    // Fechar o modal quando o botão com o ID 'btn_modal' for clicado
    document.getElementById('btn_modal').addEventListener('click', function() {
        $('#myModal').modal('hide');
        esconderModal();
    });

    // Fechar o modal ao clicar fora dele ou no botão de fechar
    $('#myModal').on('hidden.bs.modal', function() {
        esconderModal();
    });

    // Abrir o modal quando a imagem com o ID 'img__button' for clicada
    document.getElementById('img__button').addEventListener('click', function() {
        $('#myModal').modal('show');
    });
});
