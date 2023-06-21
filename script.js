const form = document.getElementById('form-validate');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

let formularioEValido = false;

function validaFormulario(numero1, numero2) {
    return numero2 > numero1;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const numeroA = parseFloat(num1.value);
    const numeroB = parseFloat(num2.value);

    const mensagemSucesso = `Formulário válido. Número 2 (<b>${numeroB}</b>) é maior que número 1 (<b>${numeroA}</b>).`;
    const mensagemErro = `Formulário inválido. Número 1 (<b>${numeroA}</b>) não pode ser maior que o número 2 (<b>${numeroB}</b>).`;

    formularioEValido = validaFormulario(numeroA, numeroB);

    if (formularioEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        num1.value = '';
        num2.value = '';
    } else {
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    }
});
