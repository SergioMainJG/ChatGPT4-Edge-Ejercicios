// Escribe una función que tome un número y devuelva su factorial.

function factorialDe(num) {

    let num1 = num;
    console.log(num1);


    for (let i = num1 - 1; i >= 1; i--) {

        num1 *= i;
        console.log(num1);
        console.log(1);

    }

    return num1;
}

// Escribe una función que tome una cadena y devuelva la cadena invertida.

function invertir(cad) {

    let cadena = cad;
    let cadenaInvertida = '';

    console.log(cadena);

    for (let i = (cadena.length - 1); i >= 0; i--) {

        cadenaInvertida += cadena[i];
        console.log(cadenaInvertida);

    }

    return cadenaInvertida;
}

//Escribe una función que tome un arreglo de números y devuelva el número más grande del arreglo.

function numeroMayor(numeros) {

    let numerosArray = numeros;
    let num = 0;

    console.log(numerosArray);

    for (let i = 0; i <= numerosArray.length - 1; i++) {

        if (num == numerosArray[i]) {

            num = num;
            console.log('son iguales ' + num);

        } else if (num > numerosArray[i]) {

            num = num;
            console.log('num es mayor ' + num);

        } else {
            num = numerosArray[i];
            console.log('numArray es mayor ' + num);
        }


    }

    return num;
}

// Escribe una función que tome un arreglo de números y devuelva el número más pequeño del arreglo.

function numeroMenor(numeros) {

    let numerosArray = numeros;
    let num = numerosArray[0];

    console.log(numerosArray);

    for (let i = 0; i <= numerosArray.length - 1; i++) {

        if (num == numerosArray[i]) {

            num = num;
            console.log('son iguales ' + num);

        } else if (num > numerosArray[i]) {

            num = numerosArray[i];
            console.log('numArray es menor ' + num);

        } else {
            num = num;
            console.log('num es menor ' + num);
        }


    }

    return num;
}

// Escribe una función que tome un arreglo de números y devuelva la suma de todos los números del arreglo.

function sumatoria(numeros) {

    let sumaTotal = 0;
    let sumandos = numeros;
    console.log(sumandos);

    for (let i = 0; i <= sumandos.length - 1; i++) {

        sumaTotal += sumandos[i];
        console.log(sumaTotal);

    }

    return sumaTotal;

}

// Escribe una función que tome un arreglo de números y devuelva el promedio de todos los números del arreglo.

// Resolución 1
function promedio(numeros) {

    let sumandos = numeros;
    let sumaTotal = sumatoria(sumandos);

    let cantidadSumandos = sumandos.length;

    let promedio = (sumaTotal / cantidadSumandos);

    return promedio;
}

// Resolución 2

function promedioDeSuma(numeros) {

    let sumaTotal = 0;
    let sumandos = numeros;
    console.log(sumandos);

    for (let i = 0; i <= sumandos.length - 1; i++) {

        sumaTotal += sumandos[i];
        console.log(sumaTotal);

    }

    let cantidadSumandos = sumandos.length;

    let promedio = (sumaTotal / cantidadSumandos);

    return promedio;
}

//Escribe una función que tome un número y devuelva verdadero si el número es primo y falso si no lo es.

function validarPrimos(num) {

    let validar = num;
    let siEs;

    for (let i = 2; i < validar; i++) {

        console.log('Se va a realizar la sig evaluación: ' + validar + '/' + i);
        if ((validar % i == 0) === true) {

            console.log('No es primo');
            siEs = false;

        } else if ((validar % i == 0) === false) {

            console.log('Si es primo');
            siEs = true;
        }
    }

    return siEs;
}

// Escribe una función que tome un número y devuelva verdadero si el número es par y falso si no lo es.

function validarPar(num) {

    let validar = num;
    let siEs;

    if ((validar % 2 == 0) === true) {
        console.log('Es par');
        siEs = true;
    } else {
        console.log('No es par');
        siEs = false;
    }

    return siEs;
}

//Escribe una función que tome un número y devuelva verdadero si el número es impar y falso si no lo es.

//Resolución 1

function validarImpar(num) {

    let validar = num;
    let siEs;

    if ((validar % 2 !== 0) === true) {
        console.log('Es impar');
        siEs = true;
    } else {
        console.log('No es impar');
        siEs = false;
    }

    return siEs;
}

//Resolución 2

function validarImparXD(num) {

    let validar = num;
    let siEs;
    if (validarPar(validar) === true) {

        siEs = false;
    }
    else {
        siEs = true;

    }

    return siEs;
}

// Escribe una función que tome un arreglo de números y devuelva un nuevo arreglo con solo los números pares del arreglo original.

function validarPares(numeros) {

    let numerosArray = numeros;
    let arrayPares = [];

    for (let i = 0; i <= numerosArray.length - 1; i++) {

        if ((numerosArray[i] % 2 == 0) === true) {

            arrayPares.push(numerosArray[i]);
        }
    }

    return arrayPares;
}

// Escribe una función que tome un arreglo de números y devuelva un nuevo arreglo con solo los números impares del arreglo original.

// Resolución 1

function validarImpares(numeros) {

    let numerosArray = numeros;
    let arrayImpares = [];

    for (let i = 0; i <= numerosArray.length - 1; i++) {

        if ((numerosArray[i] % 2 !== 0) === true) {

            arrayImpares.push(numerosArray[i]);
        }
    }

    return arrayImpares;
}

// Resiolución 2

function validarImparesXD(numeros) {

    let pares = numeros;
    let arrayPares = validarPares(pares);
    let arrayImpares = [];
    let valor = 0;

    for (let i = 0; i <= arrayPares.length - 1; i++) {

        valor = arrayPares[i] - 1;
        arrayImpares.push(valor);
    }
    return arrayImpares;
}

// Escribe una función que tome dos arreglos de números y devuelva un nuevo arreglo con los elementos comunes entre ambos arreglos.

function conjuncionConjuntos(arreglo1, arreglo2) {

    let conjuntoUno = arreglo1;
    let conjuntoDos = arreglo2;
    let conjuntoHijo = [];

    for (let i = 0; i <= conjuntoUno.length - 1; i++) {

        for (let j = 0; j <= conjuntoDos.length - 1; j++) {

            if ((conjuntoUno[i] === conjuntoDos[j]) === true) {

                conjuntoHijo.push(conjuntoUno[i]);
            }
        }
    }

    return conjuntoHijo;
}

// Escribe una función que tome dos arreglos de números y devuelva verdadero si ambos arreglos tienen los mismos elementos en el mismo orden y falso si no lo tienen.

function validarEquivalenciaConjuntos(arreglo1, arreglo2) {

    let conjuntoUno = arreglo1;
    let conjuntoDos = arreglo2;
    let conjuntoDeVerificacion = [];
    let validar;

    if ((conjuntoUno.length === conjuntoDos.length) === true) {

        console.log('Entre al primer if')

        for (let i = 0; i < conjuntoUno.length - 1; i++) {

            if ((conjuntoUno[i] === conjuntoDos[i]) === true) {

                console.log("Entre al segundo if");
                conjuntoDeVerificacion.push(conjuntoUno[i]);
            } else {

                console.log("Entre al segundo else");

                validar = false;
                break;
            }
        }



    } else {

        console.log("Entre al primer else");

        validar = false;
    }

    return validar;

}
//Sección de llamada de funciones y de tests

// const ejer1 = factorialDe(5);
// console.log(ejer1);

// const ejer2 = invertir('Hola');
// console.log(ejer2);

// const ejer3 = numeroMayor([4, 1, 5, 1, 9, 9, 2, 3]);
// console.log(ejer3);

// const ejer4 = numeroMenor([10, 14, 22, 41, 52, 1]);
// console.log(ejer4);

// const ejer5 = sumatoria([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(ejer5);

// const ejer61 = promedio([1,2,3,4,5,6,7,8,9,10]);
// const ejer62 = promedioDeSuma([1,2,3,4,5,6,7,8,9,10]);
// console.log('Promedio ' + ejer61);
// console.log('Promedio de suma' + ejer62);

// const ejer7 = validarPrimos(23);
// console.log(ejer7);

// const ejer8 = validarPar(100);
// console.log(ejer8);

// const ejer91 = validarImpar(101);
// console.log(ejer91);

// const ejer92 = validarImparXD(101);
// console.log(ejer92);

// const ejer10 = validarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(ejer10);

// const ejer111 = validarImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(ejer111);

// const ejer112 = validarImparesXD([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(ejer112);

// const ejer12 = conjuncionConjuntos([2,4,5,12,5,1,9], [2,5,7,9,2,12,5]);
// console.log(ejer12);

// const ejer13 = validarEquivalenciaConjuntos([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
// console.log(ejer13);