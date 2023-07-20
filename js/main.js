$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('form').validate({ 
        rules: {
            nome: { 
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
        nome: '<span class="error-message">Por favor, insira o seu nome</span>',
        email: '<span class="error-message">Por favor, insira seu e-mail</span>',
        telefone: '<span class="error-message">Por favor, insira seu telefone</span>',
        cpf: '<span class="error-message">CPF obrigatório!</span>',
        endereco: '<span class="error-message">Por favor, insira seu endereço</span>',
        cep: '<span class="error-message">Por favor, insira seu CEP</span>'
        }
    })
})