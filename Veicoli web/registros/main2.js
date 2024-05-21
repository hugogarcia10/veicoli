document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        var emailInput = document.getElementById('correo');
        var passwordInput = document.getElementById('contraseña');

        if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
            event.preventDefault(); // Evita que el formulario se envíe
            alert('Por favor, ingresa tu correo electrónico y contraseña.');
        } else {
            // Si los campos no están vacíos, se envía el formulario manualmente
            // Esto es necesario porque preventDefault() detiene el envío automático
            loginForm.submit();
        }
    });
});
