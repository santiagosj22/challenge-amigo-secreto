// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []
function agregarAmigo(){
    let inputUsuario = document.getElementById('amigo').value;
    amigos.push(inputUsuario)
    console.log(amigos)
    limpiar('amigo')

    

    listaAmigos
}

function limpiar(id){
    let campoLimpiar = document.getElementById(id);
    campoLimpiar.value = "";
}
