// Factory
// Va ayudar a crear objetos que son de tipo similar, pero que no sabes aún
// de que tipo van a ser o cual vas a utilizar, dependiendo de la ejecución
// del programa, se decide que clase se va a instanciar
// IMPORTANTE que sean objetos de tipo similar

function ConstructorSitios() {
  this.crearElemento = function(texto, tipo) {
    let html;
    switch (tipo) {
      case 'input':
        html = new InputHTML(texto)
        break;
      case 'img':
        html = new ImagenHTML(texto)
        break;
      case 'h1':
        html = new HeadingHTML(texto)
        break;
      case 'p':
        html = new ParrafoHTML(texto)
        break;
    }
    return html;
  }
}

const HeadingHTML = function (texto) {
  this.texto = texto
}
const ParrafoHTML = function (texto) {
  this.texto = texto
}

const sitioWeb = new ConstructorSitios();

// almacenar los elementos
const elementosWeb = [];

elementosWeb.push(sitioWeb.crearElemento('Hola Mundo', 'h1'))
elementosWeb.push(sitioWeb.crearElemento('Aprendiendo Patrones de diseño con JavaScript', 'p'))

console.log(elementosWeb);