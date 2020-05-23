// Module Patterns
// Probablemente el más comun de todos los patrones de diseño que hay en JavaScript
// Si se puede decir que hay uno que domina, es este
// Es una forma de escribir variables publicas y privadas
// En JS no hay protected o public, pero podemos simularlo

const comprarBoleto = (function() {
  // Privado
  let evento = 'Conferencia JS 2021'
  let precio = 300
  const adquirirBoleto = () => {
    const elemento = document.createElement('p')
    elemento.textContent = `Comprando boleto para ${evento}`
    document.querySelector('#app').appendChild(elemento)
  }
  // Publico
  return {
    mostrarBoleto: () => {
      adquirirBoleto()
    }
  }
})();

// Todo lo que haya en el return lo podemos acceder, pero no sus variables privadas

comprarBoleto.mostrarBoleto() // muestra informacion
console.log(comprarBoleto.evento) // undefined: