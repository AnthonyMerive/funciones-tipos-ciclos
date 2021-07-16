//funcion simple sin retormo

//function imprimirMensaje(){
//    console.log('hola, soy una funcion sin retorno');
//}
//imprimirMensaje();

//funcion simple con retorno

//function calcularPromedio(n1,n2,n3){
//let promedio = (n1+n2+n3) / 3;
//return `El promedio es ${promedio.toFixed(2)}` //toFixed muestra la cantidad de decimales del parentesis
//}
//let prom = calcularPromedio(3.5,4,5);
//console.log(prom);

//Funcion anonima

const calcularSuma = function(n1,n2){
    const suma = n1 + n2;
    return suma;
}

console.log(`el resultado de la suma es: ${calcularSuma(10,50)}`);

//Funcion flecha

const calcularResta = (n1,n2) =>{
    const resta = n1 - n2;
    return resta;
}

console.log(`el resultado de la resta es: ${calcularResta(10,50)}`);