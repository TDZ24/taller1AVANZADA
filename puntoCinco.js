//Tradicional

let ventas, salarioBruto, deducciones, salarioNeto, comisión

function CalcularSalario(venta, salarioMensual) {
    comisión = venta * 1500000
    salarioBruto = salarioMensual + comisión
    deducciones = salarioBruto * 0.05
    salarioNeto = salarioBruto - deducciones
    return `si el salario Mensual tiene un valor de:${salarioMensual} las comisión es de un valor de:${comisión} y  las deducciones es de:${deducciones} y el salario Mensual tiene un valor de:${salarioNeto}`
}

console.log(CalcularSalario(12, 3500000))

//Flecha

let Ventas, salBruto, deduc, salNeto, comi;

const operacionSalario = (venta, salMensual) => {
    comi = venta * 3500000;
    salBruto = salMensual + comi;
    deduc = salBruto * 0.05;
    salNeto = salBruto - deduc;
    return `si el salario Mensual tiene un valor de:${salMensual} las comisión es de un valor de:${comi} y  las deducciones es de:${deduc} y el salario Mensual tiene un valor de:${salNeto}`;
}

console.log(operacionSalario(10, 4000000));
