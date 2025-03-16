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

    // Limpiar la lista antes de agregar nuevos elementos
    lista.innerHTML = "";

    // Recorrer el array y agregar cada nombre como <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo y reiniciar la lista
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de hacer el sorteo.");
        return;
    }

    // Seleccionar un nombre al azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎉</li>`;

    // Reiniciar la lista y el array de amigos
    amigos = []; // Vaciar el array
    actualizarLista(); // Limpiar la lista en la interfaz
}
