/**
 * indexOf
 */

 /**
  * La función indexOf es muy usada en JavaScript; y en otros lenguajes de programación hay funciones similares. Sirve para indicar, en que posición se encuentra un elemento en un array
  */

 let muchos_peces = ["Dory", "Nemo", "Shipho", "Estrella"]
 let pezPosicion = muchos_peces.indexOf("Nemo")
 console.log("Nemo está en la posición: " + pezPosicion)

 /**
  * Fíjate sin embargo qué valor arroja aplicar indexOf cuando buscamos a "estrella". CONTESTA: ¿Por qué crees que sucede esto?
  * No lo se pero por mucho que agrandemos el array siempre da de resultado -1 y la unica solucion que he encontrado es que es case sensitive por lo que la E de estrella tiene que estar en mayuscula (venia dada en minuscula)
  */

  let pezPosicion2 = muchos_peces.indexOf("Estrella")
  console.log("Estrella está en la posición: " + pezPosicion2)

  
