//Tradicional

let numeros = []

function getNumeros(min, max) {

    for(i = 0; i <50; i++){
        numeros.push (Math.floor(Math.random() * (min - max) + max))
    }
}

getNumeros(-100,100)

let numeroMenor  = Math.abs(numeros[0])

for(i = 1; i < 49; i++){
    if ( numeroMenor > Math.abs(numeros[i])){
        numeroMenor = Math.abs(numeros[i])
    }
}

console.log(`El numero menor: ${numeroMenor}`)

//Flecha

let num = [];

const getNum = (Min, Max) => {
  for(let i = 0; i < 50; i++){
    num.push(Math.floor(Math.random() * (Min - Max) + Max));
  }
}

getNum(-60, 60);

let numMenor  = Math.abs(num[0]);

for(let i = 1; i < 49; i++){
  if (numMenor > Math.abs(num[i])){
    numMenor = Math.abs(num[i]);
  }
}

console.log(`El numero menor: ${numMenor}`);

/* Finalmente, el código muestra en la consola el valor de numeroMenor. 
En resumen, este código genera 50 números aleatorios entre -100 y 100 y luego encuentra el 
número absoluto más pequeño de la lista. */
