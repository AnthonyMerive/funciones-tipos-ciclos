//declaro variables

let suma =0;
let calif = 0;
let prom = 0;

//estructura de repeticion para solicitar 7 calificaciones
for(let i =1; i<=7; i++){
    calif = Number(prompt('ingrese calificacion'));
    suma = suma + calif;
}
//ejecuta el promedio de 7 calificaciones
prom = suma/7;

//muestro en alert el promedio
alert(`El promedio es:` + prom);