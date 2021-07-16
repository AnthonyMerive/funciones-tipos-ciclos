let boton = document.getElementById('btnEnviar');

let form = document.getElementById('form');

boton.addEventListener('click',capturarDatos)


form.addEventListener('submit',formsubmit)

function formsubmit(e){
    e.preventDefault();
}
function capturarDatos(){
    let nombre = document.querySelector('#inputNombre').value;
    let apellido = document.querySelector('#inputApellido').value;
    let telefono = document.querySelector('#inputTelefono').value;
    let direccion = document.querySelector('#inputDireccion').value;

guardarLocalStorage(nombre,apellido,telefono,direccion);
}

function guardarLocalStorage(nom,ape,tel,dir){
    localStorage.setItem('Nombre',nom);
    localStorage.setItem('Apellido',ape);
    localStorage.setItem('Telefono',tel);
    localStorage.setItem('Direccion',dir);
}

function listarData(){
    let nombre = localStorage.getItem('Nombre');
    let apellido = localStorage.getItem('Apellido');
    let telefono = localStorage.getItem('Telefono');
    let direccion = localStorage.getItem('Direccion');
    listarData();
    listar.innerHTML = `
    <table>
    <tr>
    <th>Nombre</th>
    <th>Apellido</th>
    <th>Telefono</th>
    <th>Direccion</th>
    </tr>
    <tr>
    <td>${nombre}</td>
    <td>${apellido}</td>
    <td>${telefono}</td>
    <td>${direccion}</td>
    </tr>
    
    
    
    `
}

