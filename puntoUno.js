// Tradicional

let coordx = 20
let coordy = 82 

function rutaEspacial (coordx, coordy){
    let Naboox = 450
    let Nabooy = 15
    let potencias = Math.pow((Naboox - coordx),2)*(Math.pow(Nabooy - coordy),2)
    resultado = Math.sqrt(potencias)
    console.log(resultado)
}

rutaEspacial(coordx, coordy)

//Flecha

const flechaEspacial = (coordx, coordy) => {
    const Naboox = 450;
    const Nabooy = 1580;
    const potencias = Math.pow((Naboox - coordx), 2) * Math.pow((Nabooy - coordy), 2);
    const resultado = Math.sqrt(potencias);
    console.log(resultado);
}

flechaEspacial(coordx, coordy)
