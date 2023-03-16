// Ejercio3, temperatura media de la luna de Endor
// Tradicional

let  temperaturaMedia

function calcularTemperatura(temperaturaMaxima, temperaturaMinima) {
    temperaturaMedia = (temperaturaMaxima + temperaturaMinima) / 2;
    return `Si la temperatura maxima es: ${temperaturaMaxima} grados y la tempura minima: ${temperaturaMinima} la temperatura de la luna de endor es: ${temperaturaMedia} grados`
}

console.log(calcularTemperatura(15,249))

//Flecha

const Temperatura = (temperaturaMaxima, temperaturaMinima) => {
    const temperaturaMedia = (temperaturaMaxima + temperaturaMinima) / 2;
    return `Si la temperatura maxima es: ${temperaturaMaxima} grados y la tempura minima: ${temperaturaMinima} la temperatura de la luna de Endor es: ${temperaturaMedia} grados`
  }
  
  console.log(Temperatura(420, 247));
  