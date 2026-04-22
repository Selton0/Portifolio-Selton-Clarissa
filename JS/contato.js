const form = document.querySelector("#formContato");
const msgErro = document.querySelector("#msgErro");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        msgErro.textContent = "Preencha todos os campos";
        msgErro.style.color = "red";
        return;
    }

    msgErro.textContent = "Contato enviado com sucesso";
    msgErro.style.color = "green";

    form.reset();
});
