// Función para crear un objeto Padawan
function crearPadawan(nombre, planeta, edad, estatura) {
    return {
      nombre: nombre,
      planeta: planeta,
      edad: edad,
      estatura: estatura
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
  const padawan1 = crearPadawan("Luke Skywalker", "Tatooine", 19, 1.72);
  asignarActividad(padawan1); // Debe mostrar "Luke Skywalker debe practicar el manejo del sable de luz."


/*Crear un nuevo proyecto de Node.js:

Abre una terminal y navega a la carpeta donde quieras crear el proyecto.
Ejecuta el comando npm init para crear un nuevo archivo package.json para tu proyecto. Sigue las instrucciones en la consola para completar la información requerida.
Esto creará un proyecto Node.js básico con un archivo package.json que contiene la información de tu proyecto y las dependencias que puedas instalar.
Crear un archivo JavaScript para el programa:

Crea un archivo llamado padawan.js en la raíz del proyecto.
En este archivo, define las funciones necesarias para crear y asignar actividades a los Padawans.
Definir la función para crear un objeto Padawan:

En el archivo padawan.js, define una función llamada crearPadawan que tome como parámetros nombre, planeta, edad y estatura.
Dentro de la función, crea un objeto con las propiedades nombre, planeta, edad y estatura y devuélvelo.
Definir la función secundaria para asignar la actividad:

En el archivo padawan.js, define una función llamada asignarActividad que tome como parámetro un objeto Padawan.
Dentro de la función, comprueba la edad del Padawan y muestra en la consola la actividad correspondiente (Manejo de la fuerza si es menor de 15 años, Manejo del sable de luz si es mayor o igual a 15 años).
Probar el programa en la consola npm:

Abre una terminal y navega a la carpeta de tu proyecto.
Ejecuta el comando node padawan.js para ejecutar el programa.
Crea un objeto Padawan con la función crearPadawan y luego llama a la función asignarActividad con ese objeto como parámetro.
Deberías ver en la consola la actividad asignada al Padawan.
 */