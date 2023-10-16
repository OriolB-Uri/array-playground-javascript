/**
 * Los límites del array
 *
 * Una de las cosas que más cuesta entender al comenzar programación, es que la primera posición del array, viene dada en realidad por la posición "cero".
 *
 * A la posición que ocupa un elemento en un array se le llama "índice"
 *
 * Así, lista_peces[0] nos da el primer pez
 * lista_peces[1] nos da el segundo pez
 * ..y así hasta el último.
 *
 * En el array: let muchos_peces = ["Dory", "Nemo", "Shipho", "Estrella"]
 *
 * El array tiene 4 elementos. Para acceder a "Dory" debo poner muchos_peces[0]. Para acceder a "Estrella" debo poner muchos_peces[3].
 */

/**
 * Ejecuta el siguiente código e intenta averiguar que está sucediendo. CONTESTA A LA PREGUNTA: ¿Porque el úñtimo mensaje dice "Pez siguiente: undefined?"
 * Porque el array length nos dice que el array tiene 4 elementos dentro y estamos iterando el for hasta que i es igual a 4 pero el array de muchos_peces no tiene indice 4. Solo tiene hasta el indice 3 por lo que por eso nos da que el indice 4 es undefined. El ejercicio se resolveria simplemente quitando ese <= del for y dejandolo en <
 */

let muchos_peces = ["Dory", "Nemo", "Shipho", "Estrella"];

for (let i = 0; i <= muchos_peces.length; i++) {
  let siguiente_pez = muchos_peces[i];
  console.log("Pez siguiente: " + siguiente_pez);
}

/**
 * BONUS: Este ejercicio no sigue la convención de JavaScript camelCase. ¿Podrías modificar el nombre de todas las variables para adecuarlas a la norma?
 */
