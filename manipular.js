alert("Bienvenido a la aplicacion para organizar tus tareas")
function seguridadNombre(){

    let seguridad;


    do{

        seguridad = prompt("Digite su nombre")
        if(seguridad===null || seguridad.trim() === "" || !isNaN (seguridad)){
            alert("Su nombre esta vacio o solo son numeros, Digite de nuevo su  usurio")
        }else{
            alert("Bienvenido a tu sitema de control de tareas, " + seguridad)
        }

    }while( seguridad === null||seguridad.trim() === ""|| !isNaN (seguridad));
   

};

seguridadNombre();

function entrarPagina(){

    let respuesta = confirm("Desea continuar? Aceptar o Cancelar");

    if (!respuesta) {
        window.location.href = "https://www.google.com";/*no sabia que hacer con el seleccionaban cancelar asi que busque y con window.location.href puedo redirigir y puse que el nav de google*/
    } else {
        console.log("El usuario eligio continuar.");
    }
}
window.onload = entrarPagina; /*para cargar el mensaje de que si desea continuar o no*/ 


function agregarTarea() {

    const textoTarea = document.getElementById('texto').value;

    if (textoTarea.trim() !== "") {
        const nuevoItem = document.createElement("li");
        nuevoItem.textContent = textoTarea;

        // uso un evento addlistener click para alternar estado del nuevo item
        nuevoItem.addEventListener("click", function () { /*recibe un evento click y una funcion que se va a encargar de alternar "completado"*/
            nuevoItem.classList.toggle("completado"); /*toggle se encarca de cambiarle el estado en este caso a el li de la lista*/
        });
        document.getElementById("Lista").appendChild(nuevoItem);
        document.getElementById('texto').value = ""; // Limpiar el input

    } else {
        alert("Por favor, escribe una tarea antes de agregarla.");
    }
}


function eliminarTarea(){

    const completados = document.querySelectorAll("#Lista .completado"); // Seleccionar todos los elementos completados
    if (completados.length > 0) {
        let mensaje = confirm("Desea eliminar la tarea?"); 
    if (mensaje) {
        completados[0].remove(); // Eliminar solo el primero con estado cambiado 
    } else {
        alert("La tarea no fue eliminada");
    }
    } else {
        alert("No hay tareas completadas para eliminar.");
    }

}




