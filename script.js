/* =========================================
   ANO DO RODAPÉ
========================================= */

const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}


/* =========================================
   MÁSCARA CPF
========================================= */

const cpf = document.getElementById("cpf");

if (cpf) {

    cpf.addEventListener("input", function () {

        let valor = cpf.value;

        valor = valor.replace(/\D/g, "");

        valor = valor.substring(0, 11);

        valor = valor.replace(
            /(\d{3})(\d)/,
            "$1.$2"
        );

        valor = valor.replace(
            /(\d{3})(\d)/,
            "$1.$2"
        );

        valor = valor.replace(
            /(\d{3})(\d{1,2})$/,
            "$1-$2"
        );

        cpf.value = valor;

    });

}


/* =========================================
   MÁSCARA TELEFONE
========================================= */

const telefone =
    document.getElementById("telefone");

if (telefone) {

    telefone.addEventListener("input", function () {

        let valor = telefone.value;

        valor = valor.replace(/\D/g, "");

        valor = valor.substring(0, 11);

        if (valor.length <= 10) {

            valor = valor.replace(
                /^(\d{2})(\d)/,
                "($1) $2"
            );

            valor = valor.replace(
                /(\d{4})(\d)/,
                "$1-$2"
            );

        } else {

            valor = valor.replace(
                /^(\d{2})(\d)/,
                "($1) $2"
            );

            valor = valor.replace(
                /(\d{5})(\d)/,
                "$1-$2"
            );

        }

        telefone.value = valor;

    });

}


/* =========================================
   MÁSCARA CEP
========================================= */

const cep =
    document.getElementById("cep");

if (cep) {

    cep.addEventListener("input", function () {

        let valor = cep.value;

        valor = valor.replace(/\D/g, "");

        valor = valor.substring(0, 8);

        valor = valor.replace(
            /^(\d{5})(\d)/,
            "$1-$2"
        );

        cep.value = valor;

    });

}


/* =========================================
   FORMULÁRIO
========================================= */

const formulario =
    document.getElementById("formulario");

const formMessage =
    document.getElementById("form-message");

if (formulario) {

    formulario.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            if (!formulario.checkValidity()) {

                formulario.reportValidity();

                formMessage.textContent =
                    "Por favor, preencha corretamente todos os campos obrigatórios.";

                formMessage.className =
                    "form-message error";

                return;
            }


            formMessage.textContent =
                "Cadastro realizado com sucesso! Obrigado por fazer parte da Esperança Viva.";

            formMessage.className =
                "form-message success";


            formulario.reset();

        }
    );

}


/* =========================================
   BOTÕES DE DOAÇÃO
========================================= */

const donationButtons =
    document.querySelectorAll(
        ".donation-buttons button"
    );

const donationMessage =
    document.getElementById(
        "donation-message"
    );


donationButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            donationButtons.forEach(
                function (item) {

                    item.classList.remove(
                        "selected"
                    );

                }
            );


            button.classList.add("selected");


            if (donationMessage) {

                donationMessage.textContent =
                    "Você selecionou uma doação de " +
                    button.textContent +
                    ". Obrigado pelo seu apoio!";

            }

        }
    );

});
