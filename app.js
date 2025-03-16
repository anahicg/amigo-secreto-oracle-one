// El principal objetivo de este desafío es fortalecer tus habilidades 
//en lógica de programación. Aquí deberás desarrollar la lógica para 
//resolver el problema.

// Array para almacenar los nombres
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al array y actualizar la lista en la página
    amigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpiar el campo después de agregar
}

// Función para actualizar la lista visible en la página
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo de la lista
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de hacer el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎉</li>`;
}

