document.getElementById('help-link').addEventListener('click', function() {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'flex';
    } else {
        chatContainer.style.display = 'none';
    }
});

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const messages = document.getElementById('messages');
    const userMessage = userInput.value;

    if (userMessage.trim() !== "") {
        // Añadir el mensaje del usuario al chat
        const userMessageElement = document.createElement('div');
        userMessageElement.classList.add('message', 'user');
        userMessageElement.textContent = userMessage;
        messages.appendChild(userMessageElement);

        // Responder con el bot
        const botMessageElement = document.createElement('div');
        botMessageElement.classList.add('message', 'bot');
        if (userMessage.toLowerCase() === 'hola') {
            botMessageElement.textContent = '¡Hola!, en que puedo ayudarte';
        } 
        else if (userMessage.toLowerCase() === 'adios') {
            botMessageElement.textContent = 'hasta la proxima';
        } 
        else if (userMessage.toLowerCase() === 'adios') {
            botMessageElement.textContent = 'Adiós, ¡que tengas un buen día!';
        }else if (userMessage.toLowerCase() === 'cuanto tiempo puedo alquilar el vehiculo') {
            botMessageElement.textContent = 'Dispones de un máximo de 1 año de alquiler, si desea tenerlo durante más tiempo, deberá alquilarlo de nuevo';
        }else if (userMessage.toLowerCase() === 'viene con seguro?') {
            botMessageElement.textContent = 'Si, de los únicos gastos que te tienes que preocupar es del combustible, los demas gastos estan cubiertos';
        }else if (userMessage.toLowerCase() === 'que necesito para alquilar un vehiculo?') {
            botMessageElement.textContent = 'Para reservar tu vehiculo, tan solo necesita una tarjeta de crédito o débito. Al retirar el vehículo necesitará: -El vale de confirmación o vale electrónico, como prueba de que la reserva está pagada por adelantado. -La tarjeta de crédito/débito del conductor principal, con saldo suficiente para cubrir el depósito de seguridad.El permiso de conducir del conductor principal, con una antigüedad mínima de 12 meses (en ocasiones, de 24 meses). -El pasaporte o documento de identidad y cualquier otro documento que el proveedor requiera';
        }
        else {
            botMessageElement.textContent = 'No entiendo tu mensaje';
        }

        messages.appendChild(botMessageElement);

        // Limpiar la entrada de texto
        userInput.value = '';
        // Desplazarse hacia abajo en el área de mensajes
        messages.scrollTop = messages.scrollHeight;
    }
}
