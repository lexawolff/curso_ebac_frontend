$(function () {
    $('#form-tarefa').submit(function (e) {
        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>').text(novaTarefa);

        novoItem.click(function () {
            $(this).toggleClass('completed');
        });
        
        $('#lista-tarefas').append(novoItem);
        $('#nova-tarefa').val('');
    });
});