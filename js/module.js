// Module Patterns
// Probablemente el más comun de todos los patrones de diseño que hay en JavaScript
// Si se puede decir que hay uno que domina, es este
// Es una forma de escribir variables publicas y privadas
// En JS no hay protected o public, pero podemos simularlo

const comprarBoleto = (function() {
  // Privado
  let evento = 'Conferencia JS 2021'
  let precio = 300

  // Publico
  return {
    mostrarBoleto: () => {
      console.log(evento)
    }
  }
})();

comprarBoleto.mostrarBoleto() // muestra informacion
console.log(precio) // no puede acceder a variable privada