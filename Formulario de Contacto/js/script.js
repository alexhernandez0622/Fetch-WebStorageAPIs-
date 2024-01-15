function submitForm() {
    // Obtener valores de los campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Verificar si los campos requeridos están llenos
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos.',
        });
    } else {
        // Aquí puedes agregar lógica para enviar el formulario (por ejemplo, mediante AJAX)
        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Formulario enviado con éxito!',
        });
    }
}