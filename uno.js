/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {
	const MASCULINO = "m";
	const FEMENINO = "f";
	let nombre;
	let peso;
	let sexo;
	let edad;
	let acumMasculino = 0;
	let contMasculino = 0;
	let acumFemenino = 0;
	let contFem = 0;
	let flag = 0;
	let mayorPeso = 0;
	let edadPromedio;

	for (let i = 0; i < 5; i++) {

		do {
			nombre = prompt("ingrese nombre: ");
		} while (!(isNaN(nombre)));

		do {
			peso = parseFloat(prompt("ingrese peso: "));
		} while (peso < 0 || isNaN(peso));

		do {
			sexo = prompt("ingrese sexo: femenino(f) - masculino (m): ");
		} while (!(sexo == MASCULINO || sexo == FEMENINO));

		do {
			edad = parseInt(prompt("ingrese edad: "));
		} while (edad < 0 || isNaN(edad));

		switch (sexo) {
			case MASCULINO:
				acumMasculino = acumMasculino + edad;
				contMasculino++;

				if (flag == 0 || peso > mayorPeso) {
					mayorPeso = peso;
					flag = 1;
				}
				break;
			default:
				acumFemenino = acumFemenino + edad;
				contFem++;
				break;
		}
	}

	edadPromedio = ((acumFemenino + acumMasculino) / (contFem + contMasculino)).toFixed(2);

	console.log("a) cantidad de mujeres -> ", contFem);
	console.log("b) EDAD PROMEDIO TOTAL -> ", edadPromedio);
	console.log("c)MASCULINO MAYOR PESO -> ", mayorPeso);

}
