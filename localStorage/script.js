

//2 capturar el boton enviar
let boton = document.getElementById('btnEnviar');

//3 llamar al controlador de eventos
boton.addEventListener('click',capturaDatos)

//4 prevenir los eventos por defecto del formulario
//capturamos el formulario
let form = document.getElementById('form');

//5 llamar al escuchador del evento

form.addEventListener('submit',formSubmit)

//6 funcion para prevenir el evento por defecto
function formSubmit(e){
  e.preventDefault();
}


//1 capturar datos
function capturaDatos(){
    let nombre = document.querySelector('#inputNombre').value;
    let apellido = document.querySelector('#inputApellido').value;
    let telefono = document.getElementById('inputTelefono').value;
    let direccion = document.getElementById('inputDireccion').value;
    
    guardarLocalStorage(nombre,apellido,telefono,direccion);
 
}


//7 funcion para almacenar en el local storage
function guardarLocalStorage(nom,ape,tel,dir){

    localStorage.setItem('Nombre',nom);
    localStorage.setItem('Apellido',ape);
    localStorage.setItem('Teléfono',tel);
    localStorage.setItem('Dirección',dir);
    listarData();
} 






