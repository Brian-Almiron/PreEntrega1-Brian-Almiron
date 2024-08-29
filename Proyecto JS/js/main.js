// Solicitar un número al usuario

let numero = prompt("Introduce un número:");

// Convertir el valor ingresado a un número entero

numero = parseInt(numero);

// Verificar si el número es par o impar

if (numero % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}

// Imprimir los números del 1 al 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}




function simular() {
    // Obtener el valor ingresado por el usuario

    let numero = document.getElementById('numero').value;

    // Convertir el valor a un número entero

    numero = parseInt(numero);

    // Verificar si el número es par o impar y mostrar el resultado

    let resultado = document.getElementById('resultado');
    if (numero % 2 === 0) {
        resultado.textContent = "El número es par.";
    } else {
        resultado.textContent = "El número es impar.";
    }

    // Imprimir los números del 1 hasta el número ingresado
    
    console.log(`Contando hasta ${numero}:`);
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
}