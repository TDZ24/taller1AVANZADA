// Función para crear un objeto Padawan
function crearPadawan(nombre, planeta, edad, estatura) {
    return {
      nombre: 'Thomas',
      planeta: 'Tierra',
      edad: 4,
      estatura: 1.20
    };
  }
  
  // Función secundaria para clasificar y mostrar la actividad del Padawan
  function asignarActividad(padawan) {
    if (padawan.edad > 15) {
      console.log(padawan.nombre + " debe practicar el manejo de la fuerza.");
    } else {
      console.log(padawan.nombre + " debe practicar el manejo del sable de luz.");
    }
  }
  
  // Ejemplo de uso
  const padawan1 = crearPadawan();
  asignarActividad(padawan1); 

//Funcion Flecha

const namePadawan = (nombre, planeta, edad, estatura) => ({
  nombre: 'Jeronimo',
  planeta:'Marte',
  edad: 54,
  estatura: 1.80
});

const Actividad = (npadawan) => {
  if (npadawan.edad > 15) {
    console.log(`${npadawan.nombre} debe practicar el manejo de la fuerza.`);
  } else {
    console.log(`${npadawan.nombre} debe practicar el manejo del sable de luz.`);
  }
};

const Padawan1 = namePadawan();
Actividad(Padawan1); 