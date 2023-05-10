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
    let contador = 0;
    let siEs;

    for (let i = 1; i <= validar; i++) {

        if ((validar % i) == 0) {

            contador += 1;
        }

    }

    if (contador == 2) {

        siEs = true;

    } else if (contador > 2) {

        siEs = false;
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
    console.log(`Estos son los conjuntos a analizar [${conjuntoUno}] & [${conjuntoDos}]`);
    let validar;

    if ((conjuntoUno.length === conjuntoDos.length) === false) {

        validar = false;
        console.log('No pasó 1');
        return validar;

    }
    conjuntoUno.forEach((elementoUno, i) => {

        elementoDos = conjuntoDos[i];

        if ((elementoUno[i] === elementoDos[i]) === false) {

            validar = false;
            console.log('No pasó 2');
            return validar;
        }
    });

    console.log('Si pasó');
    validar = true;
    return validar;
}

// Escribe una función que tome dos arreglos de números y devuelva verdadero si ambos arreglos tienen los mismos elementos sin importar el orden y falso si no lo tienen.

function validarEquivalenciaDeElementos(arreglo1, arreglo2) {

    let conjuntoUno = arreglo1.sort;
    let conjuntoDos = arreglo2.sort;
    console.log(`Estos son los conjuntos a analizar [${conjuntoUno}] & [${conjuntoDos}]`);
    let validar;

    if ((conjuntoUno.length === conjuntoDos.length) === false) {

        validar = false;
        console.log('No pasó 1');
        return validar;

    }

    for (let i = 0; i < conjuntoUno.length; i++) {
        if (conjuntoUno[i] !== conjuntoDos[i]) {

            validar = false;
            return validar;
        }
    }

    console.log('Si pasó');
    validar = true;
    return validar;

}

//Escribe una función que tome un número n y devuelva un arreglo con los primeros n números pares.

function cantidaPares(n) {

    let cantidad = n;
    let arrayPares = [];
    // let i = 0;

    for (let i = 0; arrayPares.length < cantidad; i++) {

        if ((i % 2) == 0) {

            arrayPares.push(i);
        }

    }

    // do {

    //     if ((i % 2) == 0) {

    //         arrayPares.push(i);
    //     }

    //     i = i + 1;

    // } while (arrayPares.length < cantidad);

    return arrayPares;
}

// 17.-Escribe una función que tome un número n y devuelva un arreglo con los primeros n números impares.

function cantidadImpares(n) {

    let cantidad = n;
    let arrayImpares = [];
    // let i = 0;

    for (let i = 0; arrayImpares.length < cantidad; i++) {

        if ((i % 2) !== 0) {

            arrayImpares.push(i);
        }
    }

    // do {

    //     if ((i % 2) !== 0) {

    //         arrayImpares.push(i);
    //     }

    //     i = i + 1;

    // } while (arrayImpares.length < cantidad);

    return arrayImpares;
}

//Escribe una función que tome un número n y devuelva la suma de todos los múltiplos de 3 o 5 menores a n.

function sumaDeMultiplos(n) {

    let cantidad = n;
    let arrayMultiplos = [];
    let sumatoria = 0;

    for (let i = 0; i < cantidad; i++) {

        console.log(`Número a evaluar: ${i}`)

        if ((i % 3) == 0 || (i % 5) == 0) {

            console.log(`Si cumple con las condiciones`);
            arrayMultiplos.push(i);
        };
    };

    for (let i = 0; i <= arrayMultiplos.length - 1; i++) {

        sumatoria += arrayMultiplos[i];
        console.log(`La sumatoria tiene un valor actual de ${sumatoria}`);
    };

    console.log(arrayMultiplos);
    return sumatoria;

}

// Escribe una función que tome dos cadenas y devuelva verdadero si son anagramas y falso si no lo son.

function analizarAnagramas(cadena1, cadena2) {

    let cad1 = cadena1.toLowerCase();;
    let cad2 = cadena2.toLowerCase();;
    let siSon;

    cad1 = cad1.split('');
    cad2 = cad2.split('');

    cad1 = cad1.sort();
    cad2 = cad2.sort();

    if ((cad1.length === cad2.length) === false) {

        siSon = false;
        return siSon;

    }

    for (let i = 0; i < cad1.length; i++) {
        if (cad1[i] !== cad2[i]) {

            siSon = false;
            return siSon;
        }
    }

    console.log('Si pasó');
    siSon = true;
    return siSon;

}

// Escribe una función que tome una cadena y devuelva verdadero si es palíndromo y falso si no lo es.

function analizarPalindromo(cadena) {

    let cad = cadena.toLowerCase();
    let cadInvertida = invertir(cad);
    let validar;

    if (cad === cadInvertida) {

        validar = true;
        return validar;
    }
    else {

        validar = false
        return validar;
    }

}

// Escribe una función que tome un número n y devuelva un arreglo con los primeros n números primos.
function primerosNPrimos(n) {

    let cantidad = n;
    let primos = [];

    console.log('0')

    if (cantidad == 0) {

        console.log('1');
        return primos;

    } else if (cantidad == 1) {

        console.log('2');
        primos.push(1);
        return primos;

    } else if (cantidad > 1) {

        console.log('3');
        primos.push(1);

        for (let i = 2; primos.length < cantidad; i++) {

            if (validarPrimos(i) === true) {

                primos.push(i);
            }
        }

        return primos;

    }
}

// function cantidadNumPrimos(n) {

//     let cantidad = n;
//     let arrayPrimos = [];
//     let iteracion = 2;

//     while ((arrayPrimos.length - 1) < n) {

//         if(){


//             arrayPrimos.push();
//         }


//         iteracion++;
//     }

// }

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

// const ejer7 = validarPrimos(4);
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

// const ejer13 = validarEquivalenciaConjuntos([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7]);
// console.log(ejer13);

// const ejer14 = validarEquivalenciaDeElementos([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
// console.log(ejer14)

// const ejer15 = cantidaPares(50);
// console.log(ejer15);

// const ejer16 = cantidadImpares(100);
// console.log(ejer16);

// const ejer17 = sumaDeMultiplos(100);
// console.log(ejer17);

// const ejer18 = analizarAnagramas('lACTeo', 'COletA');
// console.log(ejer18);

// const ejer19 = analizarPalindromo('Hola');
// console.log(ejer19);

// const ejer20 = primerosNPrimos(100);
// console.log(ejer20);