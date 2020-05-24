// NameSpace
// Es una forma de evitar colisiones con nombres en
// el Scope global de JS
// La idea del nameSpace es crear un objeto global alrededor de toda la aplicacion
// y agregar todas las funciones y metodos en el mismo lugar en lugar de crear
// multiples funciones y objetos que se puedan acceder de forma global

const restaurApp = {}

restaurApp.platillos = [
  {
    platillo: 'Pizza',
    precio: 25
  },
  {
    platillo: 'Hamburguesa',
    precio: 20
  },
  {
    platillo: 'Hot Dog',
    precio: 15
  }
]

// Functiones
restaurApp.funciones = {
  ordenar: id => {
    console.log(`Tu platillo ${restaurApp.platillos[id].platillo} se esta preparando`)
  }
}

console.log(restaurApp)

restaurApp.funciones.ordenar(0)
restaurApp.funciones.ordenar(2)
restaurApp.funciones.ordenar(1)