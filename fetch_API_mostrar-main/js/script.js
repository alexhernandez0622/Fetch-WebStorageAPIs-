// 1. Declaración de la variable 'url' que contiene la URL de la API a la que se hará la solicitud.
let url = 'https://jsonplaceholder.typicode.com/users/';

// 2. Llamada a la función 'fetch' para realizar una solicitud GET a la URL proporcionada.
fetch(url)

    // 3. Tratamiento de la respuesta con el método '.then'. Convierte la respuesta a formato JSON.
    /*El método then se utiliza en Promesas en JavaScript y se encarga de manejar el resultado exitoso de una operación  */
    .then(response => response.json())

    // 4. Manejo de los datos obtenidos en la respuesta anterior con otro '.then'. Llama a la función 'mostrarData' con los datos como argumento.
    /*La variable data representa los datos obtenidos de la respuesta de la solicitud HTTP a la URL proporcionada.*/
    .then(data => mostrarData(data))

    // 5. Captura de errores con el método '.catch'. Imprime cualquier error en la consola.
    .catch(error => console.log(error));

// 6. Declaración de la función 'mostrarData' que recibe los datos y los muestra en la consola y en el cuerpo de la tabla en el documento HTML.
const mostrarData = (data) => {
    
    // 7. Imprime los datos en la consola.
    console.log(data);

    // 8. Inicialización de la variable 'body' que almacenará el contenido HTML de la tabla.
    let body = "";

    // 9. Bucle 'for' que itera sobre los elementos en 'data' y construye filas de la tabla con los valores correspondientes.
    for (let i = 0; i < data.length; i++) {
        body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`;
    }

    // 10. Asigna el contenido HTML construido a la propiedad 'innerHTML' del elemento con el ID 'data' en el documento HTML.
    document.getElementById('data').innerHTML = body;
}
