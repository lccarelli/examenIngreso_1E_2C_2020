/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar() {
  const CONTINUAR = "s";
  const LIQUIDO = "l";
  const SOLIDO = "s";
  let continuar;

  let marca;
  let precio;
  let peso;
  let tipo;
  let acumPeso = 0;
  let flagLiquido = 0;
  let flagSolido = 0;
  let mayorPrecioLiquido = 0;
  let menorPrecioSolido = 0;

  do {

    marca = prompt("ingrese marca: ");

    do {
      precio = parseFloat(prompt("ingrese precio: "));
    } while (precio < 0 || isNaN(precio));

    do {
      peso = parseFloat(prompt("ingrese peso: "));
    } while (peso < 0 || isNaN(peso));

    acumPeso = acumPeso + peso;
    console.log("ACUM-PESO -> ", acumPeso);

    do {
      tipo = prompt("ingrese tipo: solido(s) - liquido(l)");
    } while (!(tipo == SOLIDO || tipo || LIQUIDO || isNaN(tipo)));


    switch (tipo) {
      case LIQUIDO:

        if (flagLiquido == 0 || precio > mayorPrecioLiquido) {
          mayorPrecioLiquido = precio;
          flagLiquido = 1;
          console.log("MAYOR PRECIO LIQUIDO -> ", mayorPrecioLiquido);
        }

        break;

      default:
        if (flagSolido == 0 || precio < menorPrecioSolido) {
          menorPrecioSolido = precio;
          flagSolido = 1;
          console.log("MENOR PRECIO SOLIDO -> ", menorPrecioSolido);
        }

        break;
    }

    continuar = prompt("Quiere ingresar uno más? ingrese (s)");

  } while (continuar == CONTINUAR);

  console.log("PESO TOTAL COMPRA -> ", acumPeso);
  console.log("MAYOR PRECIO LIQUIDO -> ", mayorPrecioLiquido);
  console.log("MANOR PRECIO SOLIDO -> ", menorPrecioSolido);
}
