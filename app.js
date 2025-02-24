// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; 

function agregarAmigo(){

    let input = document.getElementById("amigo"); // Captura el input
    let nombre = input.value; // Obtiene el valor escrito en el input

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }
    
    let lista = document.getElementById("listaAmigos"); // Captura el <ul>
    lista.innerHTML += `<li>${nombre}</li>`; // Agrega el nombre como <li>

    input.value = ""; // Limpia el input

    
}
