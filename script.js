emailjs.init("YOUR_USER_ID");
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var templateParams = {
        name: name,
        email: email,
        message: message
    };

    emailjs.send('service_your_service_id', 'template_your_template_id', templateParams)
        .then(function(response) {
            alert('Mensagem enviada com sucesso!');
        }, function(error) {
            alert('Erro ao enviar mensagem, tente novamente!');
        });
});