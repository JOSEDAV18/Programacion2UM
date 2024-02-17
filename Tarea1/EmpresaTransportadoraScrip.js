// Libreria importada que uso el profesor
const readlineSync = require('readline-sync');

// Solicita al usuario ingresar la cantidad de productos
const cantidadProductos = +readlineSync.question('Ingrese la cantidad de productos: ');

// Inicializando las variables 
let costoTotalFlete = 0;
let mayorVolumen = 0;
let impuesto = 0;
let impuestoTotalFlete = 0;

// Bucle sobre cada uno de los productos
for (let i = 0; i < cantidadProductos; i++) {
    // Solicita al usuario ingresar el número del empaque para el producto actual
    const numeroEmpaque = readlineSync.question(`Ingrese el número del empaque ${i + 1}: `);
    
    // Ver si el número del empaque es válido (Debe ser uno de estos 1, 2 o 3)
    if (numeroEmpaque < 1 || numeroEmpaque > 3) {
        console.error("El número de empaque no es válido");
        continue; // Salta a la siguiente iteración del bucle.
    }

    // Solicita al usuario ingresar las dimensiones del producto actual: ancho, alto y profundidad
    const anchoProducto = +readlineSync.question(`Ingrese el ancho del producto ${i + 1}: `);
    if (anchoProducto < 0) {
        console.error("El ancho del producto no es válido");
        continue; // Sigue a la siguiente parte del bucle
    }

    const altoProducto = +readlineSync.question(`Ingrese el alto del producto ${i + 1}: `);
    if (altoProducto < 0) {
        console.error("El alto del producto no es válido");
        continue; // Salta a la siguiente iteración del bucle.
    }

    const profundidadProducto = +readlineSync.question(`Ingrese la profundidad del producto ${i + 1}: `);
    if (profundidadProducto < 0) {
        console.error("La profundidad del producto no es válida");
        continue; // Sigue a la siguiente parte del bucle
    }

    // Calcula el volumen del producto multiplicando sus dimensiones y ajustando la unidad a cm^3
    const volumen = (anchoProducto * altoProducto * profundidadProducto) * 100;

    // Calcula el impuesto basado en el volumen
    if (volumen > 1000 && volumen < 10000) {
        impuesto = volumen * 0.1;
    } else if (volumen > 10000) {
        impuesto = volumen * 0.2;
    }

    // Calcula el costo total del producto sumando el volumen y el impuesto
    const costoTotalProducto = (volumen + impuesto);

    // Costo total del producto al costo total del flete
    costoTotalFlete += costoTotalProducto;

    // Actualizar el volumen más grande si el volumen actual es mayor
    if (volumen > mayorVolumen) {
        mayorVolumen = volumen;
    }

    // Agrega el impuesto del producto al impuesto total del flete
    impuestoTotalFlete += impuesto;
}

// Calcula el promedio del flete dividiendo el costo total del flete entre la cantidad de productos (suma de los tres dividido entre 3)
const promediodelflete = costoTotalFlete / cantidadProductos;

// Muestra los resultados por consola.
console.info(`El costo total del flete es: ${costoTotalFlete}`);
console.info(`Producto de mayores dimensiones: ${mayorVolumen}`);
console.info(`Promedio total del flete es: ${promediodelflete}`);
console.info(`El impuesto total por el flete es: ${impuestoTotalFlete}`);