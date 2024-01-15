/**Esta línea declara una constante llamada user. Utiliza el método getItem() del objeto localStorage para obtener el valor almacenado en la clave 'login_success'. 
 * 
 * El resultado se pasa a JSON.parse() para convertirlo de una cadena JSON a un objeto JavaScript. Si no se encuentra ningún valor en 'login_success', se establece el valor de user como false. */
const user = JSON.parse(localStorage.getItem('login_success')) || false

// Esta línea inicia una estructura de control if que verifica si el valor de user es falsy, es decir, si es false, null, undefined, 0, NaN o una cadena vacía. Si user es falsy, el código dentro del bloque {} se ejecutará.
if(!user){
    /**Esta línea redirige la página actual a 'login.html' utilizando la propiedad href del objeto window.location. Esto enviará al usuario a la página de inicio de sesión si no se encontró ningún usuario en el almacenamiento local. */
    window.location.href = 'login.html'
}

/**Esta línea declara una constante llamada logout y utiliza el método querySelector() del objeto document para seleccionar el elemento con el ID 'logout'. El elemento seleccionado se asigna a la constante logout. */
const logout = document.querySelector('#logout')

/**Esta línea agrega un event listener al elemento seleccionado logout para escuchar el evento 'click'. Cuando ocurra el evento, se ejecutará la función de flecha sin nombre ()=>{}. */
logout.addEventListener('click', ()=>{
    /**Esta línea muestra una ventana emergente de alerta con el mensaje 'Hasta pronto!'. La ventana emergente mostrará el mensaje al usuario. */
    alert('Hasta pronto!')
    /** Esta línea utiliza el método removeItem() del objeto localStorage para eliminar el valor almacenado en la clave 'login_success'. Esto elimina la información de inicio de sesión almacenada en el navegador.*/
    localStorage.removeItem('login_success')

    /**Esta línea redirige la página actual a 'login.html' utilizando la propiedad href del objeto window.location. Esto enviará al usuario de vuelta a la página de inicio de sesión después de cerrar la sesión. */
    window.location.href = 'login.html'
})