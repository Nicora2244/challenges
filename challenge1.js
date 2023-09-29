// Funcion normal 1

function determinarParImpar (numero) {
    if (numero % 2 == 0) {
        console.log(`${numero} es un numero par`);
    } else {
        console.log(`${numero} no es un numero par`);
    }
};

determinarParImpar(5);

// Funcion normal 2

const determinarParImpar = function(numero) {
    if (numero % 2 == 0) {
        console.log(`${numero} es un numero par`);
    } else {
        console.log(`${numero} no es un numero par`);
    }
};

determinarParImpar(5);

// Funcion de flecha 

const determinarParImpar = (numero) => {
    if (numero % 2 == 0) {
        console.log(`${numero} es un numero par`);
    } else {
        console.log(`${numero} no es un numero par`);
    }
};

determinarParImpar(5); 