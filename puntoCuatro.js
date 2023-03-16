//Tradicional

const sablesTotales = [1, -4, 2, -2, 5, -7, 8, -1];

const sablesPositivos = [];
const sablesNegativos = [];

function calcularSables(){
	sablesTotales.forEach(num => {
		num >= 0 ? 
		sablesPositivos.push(num) :
		sablesNegativos.push(num); 
})
	return "La cantidad de sables contada fue: " + sablesTotales + " Los sables positivos fueron: " + sablesPositivos + " y los sables negativos fueron: " + sablesNegativos;
}
console.log(calcularSables())

//Flecha

const Totales = [2, -1, 5, -7, 8, -9, 3, -7];

const Positivos = [];
const Negativos = [];

const operacionSables = () => {
  Totales.forEach(num => {
    num >= 0 ?
      Positivos.push(num) :
      Negativos.push(num);
  });
  return "La cantidad de sables contada fue: " + Totales + " Los sables positivos fueron: " + Positivos + " y los sables negativos fueron: " + Negativos;
}

console.log(operacionSables());
