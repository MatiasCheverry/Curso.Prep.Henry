// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 7;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  var hola = "lambdaSchool";
  return hola;
  // "Return" la string provista: str
  // Tu código:
}

function suma(x, y) {
  var sumalos = x + y ;
  return sumalos ;
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
}

function resta(x, y) {
  var restalos = x - y;
  return restalos ;
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
}

function multiplica(x, y) {
  var mult = x * y ;
  return mult;
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
}

function divide(x, y) {
  var div = x / y ;
  return div ;

  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
}

function sonIguales(x, y) {
  var igualdad = x === y ;
  return igualdad ;
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
}

function tienenMismaLongitud(str1, str2) {
  var len1 = (str1.length) ;
  var len2 = (str2.length) ;
  var igual_longitud = len1 === len2 ;
  return igual_longitud ;
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
}

function menosQueNoventa(num) {
  var menosquenoven = num < 90 ;
  return menosquenoven ;
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
}

function mayorQueCincuenta(num) {
  var masquecin = num > 50 ;
  return masquecin ;

  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
}

function obtenerResto(x, y) {
  var resto = x % y ;
  return resto ;
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
}

function esPar(num) {
  var par = num % 2 == 0;
  return par ;
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
}

function esImpar(num) {
  var impar = num % 2 != 0 ;
  return impar
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
}

function elevarAlCuadrado(num) {
  var elevaralcua = num ** 2 ;
  return elevaralcua ;
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
}

function elevarAlCubo(num) {
  var elevaralcub = num ** 3 ;
  return elevaralcub ;
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
}

function elevar(num, exponent) {
  var elevarexponente = num ** exponent ;
  return elevarexponente ;
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
}

function redondearNumero(num) {
  var redondeame = Math.round(num);
  return redondeame ;

  // Redondea "num" y devuélvelo
  // Tu código:
}

function redondearHaciaArriba(num) {
  var redondeameparriba = Math.ceil(num);
  return redondeameparriba ;
  // Redondea "num" hacia arriba y devuélvelo
  // Tu código:
}

function agregarSimboloExclamacion(str) {
  var exclamación = str + "!";
  return exclamación ;

  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}

function combinarNombres(nombre, apellido) {
  var nombrecompleto = nombre + " " + apellido ;
  return nombrecompleto;
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
}

function obtenerSaludo(nombre) {
  var saludar = "Hola " + nombre + "!";
  return saludar ;
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
}

function obtenerAreaRectangulo(alto, ancho) {
  var area = alto * ancho ;
  return area ;
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
