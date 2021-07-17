//capturar la lista
let listar = document.getElementById('listar');

//10 cargar la lista al cargar el DOM

document.addEventListener('DOMContentLoaded',listarData)

//8 listar la información del local storage

function listarData(){
    
    let nombre = localStorage.getItem('Nombre');
    let apellido = localStorage.getItem('Apellido');
    let telefono = localStorage.getItem('Teléfono');
    let direccion = localStorage.getItem('Dirección');

    listar.innerHTML = `
    <table>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Teléfono</th>
        <th>Dirección</th>
      </tr>
      <tr>
         <td>${nombre}</td>
         <td>${apellido}</td>
         <td>${telefono}</td>
         <td>${direccion}</td>
      </tr>
     </table>
    `;
}