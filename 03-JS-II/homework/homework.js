// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
	var mayor = null
	if (x > y == true) {
		mayor = x
	}
	else { 
		mayor = y
	}
    return mayor;

  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
}

function saludo(idioma) {
	var saludos = null
	if (idioma === "aleman") {
		saludos = "Guten Tag!"
	}
	else if (idioma === "mandarin") {
		saludos = "Ni Hao!"
	}
	else if (idioma === "ingles") {
		saludos = "Hello!"
	}
	else {
		saludos = "Hola!"
	}
	return saludos;
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
}

function esDiezOCinco(numero) {
	esonoes = null
	if (numero === 10 || numero === 5) {
		esonoes = true
	}
	else {
		esonoes = false
	}
	return esonoes;
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
}

function estaEnRango(numero) {
	esta = null
	if (numero < 50 && numero > 20) {
		esta = true
	}
	else {
		esta = false
	}
	return esta
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
}

function esEntero(numero) {
	esint = null
	if (Number.isInteger(numero)) {
		esint = true
	}
	else {
		esint = false
	}
	return esint ;
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
}

function fizzBuzz(numero) {
	devolvera = null
	
	if (numero % 5 === 0) {
		if (numero % 3 === 0) {
		devolvera = "fizzbuzz"
	    }
		else {
			devolvera = "buzz"
		}
	}
	else if (numero % 3 === 0) {
		devolvera = "fizz"
	}
	else {
		devolvera = numero
	}
	return devolvera ;

  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
}

function esPrimo(numero) {
	i = 2
	espri = false
	devuelva = null
	do {
		if (numero % i === 0) {
			espri = false;
		}
		else {
			i++
		}
		
	} while (i<numero);
	if (espri === true) {
		devuelva = true
	}
	else {
		devuelva = false
	}
	return devuelva;


  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
};
