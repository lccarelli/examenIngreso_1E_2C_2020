/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {

	const CONTINUAR = "s";
	const BARILOCHE = "b";
	const CATARATAS = "c";
	const SALTA = "s";
	const FEMENINO = "f";
	const MASCULINO = "m";
	const OTOÑO = "o";
	const INVIERNO = "i";
	const VERANO = "v";
	const PRIMAVERA = "p";

	let continuar;
	let sexo;
	let lugar;
	let temporada;
	let cantPasajeros;
	let contBariloche = 0;
	let contCataratas = 0;
	let contSalta = 0;
	let acumPasajerosMasculino = 0;
	let acumPasajerosFemenino = 0;
	let sexoMasPasajeros = "";
	let lugarMasElegido = "";
	let acumPersonasInvierno = 0;
	let contInvierno = 0;
	let promInvierno;


	do {

		do {
			sexo = prompt("ingrese sexo: femenino (f) - masculino (m)");
		} while (!(sexo == MASCULINO || sexo == FEMENINO));

		do {
			lugar = prompt("ingrese lugar: bariloche(b) - cataratas(c) - salta(s) ");
		} while (!(lugar == BARILOCHE || lugar == CATARATAS || lugar == SALTA));

		switch (lugar) {
			case BARILOCHE:
				contBariloche++;
				console.log("cantidad elegidas bariloche -> ", contBariloche);
				break;
			case CATARATAS:
				contCataratas++;
				console.log("cantidad elegidas cataratas -> ", contCataratas);
				break;
			default:
				contSalta++;
				console.log("cantidad elegidas salta -> ", contSalta);
				break;
		};

		do {
			temporada = prompt("ingrese temporada: otoño(o) - invierno(i) - verano(v) - primavera(p) ");
		} while (!(temporada == OTOÑO || temporada == PRIMAVERA || temporada == INVIERNO || temporada == VERANO));

		do {
			cantPasajeros = parseInt(prompt("ingrese cantidad de pasajeros: "));
		} while (cantPasajeros < 0 || isNaN(cantPasajeros));

		switch (sexo) {
			case MASCULINO:
				acumPasajerosMasculino = acumPasajerosMasculino + cantPasajeros;
				console.log("MAsculino: cantidad pasajeros->", acumPasajerosMasculino);
				break;
			default:
				acumPasajerosFemenino = acumPasajerosFemenino + cantPasajeros;
				console.log("Femenino: cantidad pasajeros -> ", acumPasajerosFemenino);
				break;
		}

		switch (temporada) {
			case INVIERNO:
				acumPersonasInvierno = acumPersonasInvierno + cantPasajeros;
				contInvierno++;
				console.log("INVIERNO: cantidad pasajeros -> ", acumPersonasInvierno, "cantidad viajes -> ", contInvierno);
				break;
		}

		continuar = prompt("Quiere ingresar uno más? ingrese (s)");

	} while (continuar == CONTINUAR);

	if (contBariloche > contCataratas && contBariloche > contSalta) {
		lugarMasElegido = "Bariloche";
	} else if (contCataratas > contBariloche && contCataratas > contSalta) {
		lugarMasElegido = "Cataratas";
	} else if (contSalta > contBariloche && contSalta > contCataratas) {
		lugarMasElegido = "Salta";
	} else if (contBariloche === contCataratas) {
		lugarMasElegido = "empatan Bariloche y Cataratas";
	} else if (contBariloche === contSalta) {
		lugarMasElegido = "empatan Bariloche y Salta";
	} else if (contCataratas == contSalta) {
		lugarMasElegido = "empatan Cataratas y Salta";
	} else if (contBariloche === contCataratas && contBariloche === contSalta) {
		lugarMasElegido = "se eligieron por igual los 3 destinos";
	};

	if (acumPasajerosFemenino > acumPasajerosMasculino) {
		sexoMasPasajeros = "Femenino";
	} else {
		sexoMasPasajeros = "Masculino";
	};

	promInvierno = (acumPersonasInvierno / contInvierno).toFixed(2);

	console.log("a) Lugar mas elegido -> ", lugarMasElegido);
	console.log("b) SEXOTITULAR CON MAS PASAJES -> ", sexoMasPasajeros);
	console.log("c) promedio de personas por viaje INVIERNO -> ", promInvierno);
}
