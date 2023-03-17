let mapas = [{
    nombre: 'Kepler-438b*',
    latitud: 10.987,
    longitud: 99.782,
    nivelOxigeno: 2,
    volumenAgua: 80
},
{
    nombre: 'Gliese 581g*',
    latitud: 87.895,
    longitud: 92.325,
    nivelOxigeno: 980,
    volumenAgua:84
},
{
    nombre: 'HD 219134 b',
    latitud: 66.987,
    longitud: 992.782,
    nivelOxigeno: 40,
    volumenAgua:7
},
{
    nombre: 'WASP-12b*',
    latitud: 84.697,
    longitud: 774.472,
    nivelOxigeno: 70,
    volumenAgua:48
},
{
    nombre: 'Trappist-1d*',
    latitud: 545.150,
    longitud: 84.123,
    nivelOxigeno: 15,
    volumenAgua:81
},
{
    nombre: 'Kepler-22b',
    latitud: 1554.987,
    longitud: 74.789,
    nivelOxigeno: 14,
    volumenAgua:14
},
{
    nombre: 'Kepler-16b*',
    latitud: 545.987,
    longitud: 54.785,
    nivelOxigeno: -411,
    volumenAgua:28
},
{
    nombre: 'GJ 1214b*',
    latitud: 442.987,
    longitud: 59.783,
    nivelOxigeno: -10,
    volumenAgua:1
},
{
    nombre: '55 Cancri e*',
    latitud: 45.987,
    longitud: 459.722,
    nivelOxigeno: 25,
    volumenAgua:0
},
{
    nombre: 'HR 8799b*',
    latitud: 24.987,
    longitud: 449.722,
    nivelOxigeno:25,
    volumenAgua:100
},
{
    nombre: 'Gliese 436 b*',
    latitud: 45.987,
    longitud: 4569.722,
    nivelOxigeno: 84,
    volumenAgua:100
},
{
    nombre: 'Kepler-438c*',
    latitud: 201.987,
    longitud: 59.722,
    nivelOxigeno: 415,
    volumenAgua: 10
},
{
    nombre: 'CoRoT-7b*',
    latitud: 5454.987,
    longitud: 8459.722,
    nivelOxigeno: 545,
    volumenAgua:50
},
{
    nombre: 'Tau Boötis b*',
    latitud: 45.287,
    longitud: 259.722,
    nivelOxigeno: 50,
    volumenAgua:0
},
{
    nombre: 'Trappist-1e*',
    latitud: 541.987,
    longitud: 8.722,
    nivelOxigeno: 54,
    volumenAgua:4
},

]

//Tradicional

let cantidadAgua = 0, cantidadOxigeno = 0;

function getPlanets(planetas) {
    planetas.forEach(planeta => {
        cantidadAgua += planeta.volumenAgua;
        if (planeta.volumenAgua <= 0 || planeta.cantidadAgua === null) {
            console.log(`El planeta que no tiene agua: ${planeta.nombre}, su latitud es: ${planeta.latitud}, su longitud es: ${planeta.longitud}, su nivel de oxigeno es ${planeta.nivelOxigeno}, su volumen de agua es ${planeta.volumenAgua}`);
        }
        cantidadOxigeno += planeta.nivelOxigeno;
        if (planeta.nivelOxigeno < 0) {
            console.log(`El planeta con nivel de oxigeno negativo es de: ${planeta.nombre}, su latitud es: ${planeta.latitud}, su longitud es: ${planeta.longitud}, su nivel de oxigeno es ${planeta.nivelOxigeno}, su volumen de agua es ${planeta.volumenAgua}`);
        }
    });
    console.log(`La cantidad total de oxígeno es ${cantidadOxigeno * 100}.`);
}

getPlanets(mapas);

//Flecha

let canAgua = 0;
let canOxigeno = 0;

const Planets = (planetas) => {
    planetas.forEach(planeta => {
        canAgua += planeta.volumenAgua;
        if (planeta.volumenAgua <= 0 || planeta.canAgua === null) {
            console.log(`El planeta no tiene agua: ${planeta.nombre}, su latitud es: ${planeta.latitud}, su longitud es: ${planeta.longitud}, su nivel de oxigeno es ${planeta.nivelOxigeno}, su volumen de agua es ${planeta.volumenAgua}`);
        }
        canOxigeno += planeta.nivelOxigeno;
        if (planeta.nivelOxigeno < 0) {
            console.log(`El nivel de oxigeno del planeta es negativo: ${planeta.nombre}, su latitud es: ${planeta.latitud}, su longitud es: ${planeta.longitud}, su nivel de oxigeno es ${planeta.nivelOxigeno}, su volumen de agua es ${planeta.volumenAgua}`);
        }
    });
    console.log(`La cantidad total de oxígeno es ${canOxigeno * 100}.`);
}

Planets(mapas);

/*Este código es una función que recibe un arreglo con información de diferentes planetas y realiza algunas operaciones para obtener información relevante. La información relevante que se obtiene es:

La cantidad de agua total que hay en todos los planetas.
La cantidad de oxígeno total que hay en todos los planetas.
Si hay algún planeta que no tiene agua o tiene un nivel de oxígeno negativo, se muestra un mensaje con detalles del planeta.
La función recibe el arreglo de planetas como argumento y lo recorre uno por uno utilizando un ciclo "for each". Dentro de este ciclo se suman los valores de agua y oxígeno de cada planeta para obtener los totales.

Además, se verifica si cada planeta tiene agua o no, y si tiene un nivel de oxígeno negativo. Si se detecta alguna de estas condiciones, se muestra un mensaje con detalles del planeta.

Finalmente, se muestra un mensaje con la cantidad total de oxígeno que hay en todos los planetas. */

