//Tradicional

let edades = [];
let codigos = [];

function generarCodigos() {
    const ramdom = "qwertyrtyuiopasdfghjklñzxcvbnm1234567890"
    let resultado = ""
    for (let i = 0; i < 5; i++){
        const IndexRamdom = Math.floor(Math.random() * ramdom.length)
        resultado += ramdom[IndexRamdom]
    }
    return resultado;
}


for (let i =0;i< 20; i++) {
    edades.push(Math.floor(Math.random() *100));
    console.log(generarCodigos())
}
let clonMayor = edades[0]
let clonRepetido = 0

for (let i =1; i< edades.length; i++) {
    if(edades[i]>clonMayor){
        clonMayor = edades[i]
    }else if(edades[i] === clonMayor){
        clonRepetido++;
    } 
}
console.log("Las edades aleatorias son: " + edades);
console.log("Los códigos aleatorios: " + codigos);
console.log("La edad mayor es " + clonMayor + " y se repite " + clonRepetido + " veces.");


//Flecha

let edad = [];
let codigo = [];

const Codigos = () => {
  const ramdom = "qwertyrtyuiopasdfghjklñzxcvbnm1234567890";
  let resultado = "";
  for (let i = 0; i < 5; i++) {
    const IndexRamdom = Math.floor(Math.random() * ramdom.length);
    resultado += ramdom[IndexRamdom];
  }
  return resultado;
};

for (let i = 0; i < 20; i++) {
  edades.push(Math.floor(Math.random() * 100));
  console.log(Codigos());
}

let clonMay = edades[0];
let clonRep = 0;

for (let i = 1; i < edad.length; i++) {
  if (edad[i] > clonMay) {
    clonMay = edad[i];
  } else if (edad[i] === clonMay) {
    clonRep++;
  }
}

console.log("Las edades aleatorias son: " + edad);
console.log("Los códigos aleatorios: " + codigo);
console.log("La edad mayor es " + clonMay + " y se repite " + clonRep + " veces.");

/* El código genera 20 números al azar y los almacena en un array llamado edades.
El código genera 20 códigos al azar de 5 caracteres y los almacena en un array llamado codigos.
El código encuentra la mayor edad en el array edades y cuenta cuántas veces se repite. Luego muestra estos resultados en la consola. */