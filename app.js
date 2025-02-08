// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []
function agregarAmigo(){
    let inputUsuario = document.getElementById('amigo').value;

    // validacion de campos vacios
    if(inputUsuario.trim() == ''){
        alert("El campo no puede estar vacio")
    }else{
        amigos.push(inputUsuario)
        console.log(amigos)
        limpiar('amigo')
        document.getElementById('listaAmigos').innerHTML = amigos.map(f => `<li>${f}</li>`).join("");
    }
}

function limpiar(id){
    let campoLimpiar = document.getElementById(id);
    campoLimpiar.value = "";
}


function sortearAmigo(){
    cantidadAmigos = amigos.length
    indiceAleatorio = Math.floor((Math.random()*cantidadAmigos))//generar un numero aleatorio en 0 y la cantidad de amigos -1
    console.log(cantidadAmigos)
    console.log(indiceAleatorio)
    console.log(amigos[indiceAleatorio])
    let amigoSecreto = amigos[indiceAleatorio]
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${amigoSecreto}`;
}


// función amigo secreto es sortear al amigo, quitar todo lo de UL y mostrar el resutado "El amigo secretos sorteado es: "