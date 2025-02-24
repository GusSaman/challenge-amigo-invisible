// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; 

function agregarAmigo() {
    let input = document.getElementById("amigo"); // Captura el input
    let nombre = input.value.trim(); // Obtiene el valor escrito en el input sin espacios extra

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre); // Agrega el nombre a la lista
    actualizarLista(); // Llama a la función para actualizar la lista en la página
    input.value = ""; // Limpia el input
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Captura el <ul>
    lista.innerHTML = ""; // Limpia la lista antes de agregar nuevos elementos

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`; // Agrega cada amigo como <li>
    }
}

