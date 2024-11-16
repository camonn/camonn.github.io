// Configuração do EmailJS
const form = document.getElementById("form-contato");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Enviar email com o EmailJS
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form)
        .then(function(response) {
            alert("Mensagem enviada com sucesso!");
            form.reset();  // Limpa os campos após o envio
        }, function(error) {
            alert("Erro ao enviar mensagem. Tente novamente.");
        });
});
