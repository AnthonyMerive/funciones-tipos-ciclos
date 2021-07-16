function capturarDatos() {
    let nombre = document.getElementById('inputNombre').value;
    let apellido = document.getElementById('inputApellido').value;
    if (nombre === "" || apellido === "") {
        console.log("todos los campos son requeridos");
    }
    else {
        console.log(`su nombre es ${nombre} y su apellido es ${apellido}`);
    }
}



