// Función para crear un alimento
const crearAlimento = (nombre, tipo, energia) => ({nombre, tipo, energia});

// Array para almacenar los alimentos
const alimentos = [];

// Llenar el array con 300 alimentos aleatorios
for (let i = 0; i < 300; i++) {
  const tipoAleatorio = Math.floor(Math.random() * 3); // Generar un número aleatorio entre 0 y 2
  let tipo;
  switch (tipoAleatorio) {
    case 0:
      tipo = "vegetal";
      break;
    case 1:
      tipo = "animal";
      break;
    case 2:
      tipo = "insecto";
      break;
  }
  const energia = Math.floor(Math.random() * 401) + 100; // Generar un número aleatorio entre 100 y 500
  const nombre = `Alimento ${i + 1}`; // Generar un nombre para el alimento
  alimentos.push(crearAlimento(nombre, tipo, energia)); // Añadir el alimento al array
}

// Función primaria para obtener los alimentos que cumplen ciertas condiciones
const obtenerAlimentos = (alimentos, callback) => {
  const alimentosVegetales = alimentos.filter(alimento => alimento.tipo === "vegetal" && alimento.energia > 200);
  setTimeout(() => {
    callback(alimentosVegetales.reduce((acumulador, alimento) => acumulador + alimento.energia, 0));
  }, 5000); // Esperar 5 segundos antes de ejecutar el callback
};

// Función callback para obtener la sumatoria de niveles de energía de los alimentos vegetales
const obtenerSumatoriaEnergiaVegetal = (sumatoria) => {
  console.log(`La sumatoria de niveles de energía de los alimentos vegetales es: ${sumatoria}`);
};

// Ejecutar la función primaria
obtenerAlimentos(alimentos, obtenerSumatoriaEnergiaVegetal);
