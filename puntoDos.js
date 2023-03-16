// Tradicional
function traerPalabra(){
	let pNave = "TDZ242708: Los Targuerian";
	let separarP = pNave.split(":");
	let nombre = separarP[1] 
	return "El nombre del conductor de la nave es: " + nombre;
}
console.log(traerPalabra());

//Flecha

const Palabra = () => {
    const pNave = "ZZF: Driftmark";
    const separarP = pNave.split(":");
    const nombre = separarP[1];
    return "El nombre del conductor de la nave es: " + nombre;
  }
  
  console.log(Palabra());