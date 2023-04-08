// Tu primer proyecto
// Ya tienes los conocimientos suficientes para empezar a crear proyectos que solucionen problemas reales.

// Si debes repasar las clases anteriores, hazlo, pero trata de hacer el siguiente proyecto sin buscar en Internet, solo con tus apuntes y la información del curso.

// La premisa
// Diego, tu primo, le ha dejado la contraseña a su hermana Dora para que pueda abrir la puerta de su casa. Es una contraseña de 4 dígitos, pero hay un problema, a Dora se le olvidó y no hay forma de contactar a Diego.

// Sin embargo, Dora se acuerda que Diego utilizó un algoritmo de cifrado para poder generar los 4 dígitos que abren la puerta.

// Dora te cuenta su dilema y tú le dices que puedes escribir un pequeño programa que obtenga los 4 dígitos con un algoritmo de descifrado, basado en la información que dejó Diego.

// A fin de cuentas, ya tienes suficientes conocimientos para resolver este tipo de problemas.

// ¿Qué es el cifrado?
// En criptografía, el cifrado es un procedimiento que utiliza un algoritmo de cifrado con cierta clave (clave de cifrado) para transformar un mensaje, sin atender a su estructura lingüística o significado, de tal forma que sea incomprensible. - Wikipedia

// Es tu trabajo utilizar la clave de Diego para transformar el mensaje cifrado a los 4 dígitos que abre la puerta.

// Descifrando el texto
// Las instrucciones que tiene Dora son las siguientes.

// La lista de números cifrados: [3, 23, 21, 12, 10, 2, 43, 100, 432, 34]
// La lista de números válidos: [1, 2, 3, 4, 5, 6, 7, 9]
// Instrucciones para convertir un número cifrado en uno válido:
// Si el número cifrado es par, agregar 8 al valor
// Si el número cifrado es impar, restar 12 al valor
// En la operación de arriba, utilizar como índice del número válido el valor restante que se obtiene al realizar la división entre la longitud de los números válidos y el número de cifrado.
// Guardar el valor válido en una lista nueva array
// Obtener el valor mínimo y máximo del arreglo.
// Obtener los 4 dígitos al hacer (minimo * maximo) ^ 4
// Valor mínimo por el valor máximo elevado a la 4.
// Código base
// Hemos escrito un poco de código base para poder ayudarte.

// No te preocupes por hacer el cálculo del restante hemos creado una función que se encarga de eso y regresa el valor válido. 

const numeros = [1, 2, 3, 4, 5, 6, 7, 9] // No tocar

// Esta funcion regresa el valor decifrado
function retornarValor(index) {
  return numeros[(Math.abs(index)) % numeros.length];
}

const arrEncryptado = [3, 23, 21, 12, 10, 2, 43, 100, 432, 34];
const newArr = [];
let solucion;

// Escribe aquí el código que va
// a ayudar a Dora abrir su puerta

for (let i = 0; i < arrEncryptado.length; i = i + 1) {
  let valor = arrEncryptado[i];
  if (valor % 2) {
    newArr[i] = retornarValor(valor + 8);
  } else {
    newArr[i] = retornarValor(valor - 12);
  }
}

let min = 10;
let max = 0;

for (let i = 0; i < newArr.length; i = i + 1) {
  if(newArr[i] > max) max = newArr[i];
  if(newArr[i] < min) min = newArr[i];
}

let resultado = (min * max) * (min * max) * (min * max) * (min * max);

console.log(resultado);