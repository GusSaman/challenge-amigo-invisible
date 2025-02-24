// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; 

function agregarAmigo(){

    let input = document.getElementById("amigo"); // Captura el input
    let nombre = input.value; // Obtiene el valor sin espacios extra

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }
    
    amigos.push(nombre); // Agrega el nombre a la lista

    // Actualiza la lista en el HTML
    let lista = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
    console.log(amigos);

    input.value = ""; // Limpia el input después de agregar
}