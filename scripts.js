// Navegação suave para links internos
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Mensagem dinâmica no console
console.log("Bem-vindo ao Circo Infernal! Prepare-se para a jornada de Joaquim.");

// Configuração do EmailJS
(function() {
    // Event listener para o formulário
    document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Formulário enviado!"); // Verifique se isso aparece no console

    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Função para validar e-mail
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Função para validar telefone (apenas números e comprimento mínimo de 10)
    function isValidPhone(phone) {
        const phoneRegex = /^\d{10,15}$/; // Aceita de 10 a 15 dígitos
        return phoneRegex.test(phone);
    }

    // Verificar se os campos são válidos
    if (!isValidEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    if (!isValidPhone(phone)) {
        alert("Por favor, insira um telefone válido (apenas números, com no mínimo 10 dígitos).");
        return;
    }

    if (message.trim() === "") {
        alert("Por favor, insira uma mensagem de feedback.");
        return;
    }
});
})();


  