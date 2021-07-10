// Factory
// Va ayudar a crear objetos que son de tipo similar, pero que no sabes aún
// de que tipo van a ser o cual vas a utilizar, dependiendo de la ejecución
// del programa, se decide que clase se va a instanciar
// IMPORTANTE que sean objetos de tipo similar

// Esa es la idea del Factory, no saber aún que clases se van a instanciar, pero
// conforme el programa se ejecute, tener distintos tipos de datos que se pueden generar

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
    html.tipo = tipo;

    html.mostrar = function () {
      const elemento = document.createElement(this.tipo)
      switch (this.tipo) {
        case 'input':
          elemento.setAttribute('placeholder', this.texto)
          break;
        case 'img':
          elemento.setAttribute('src', this.texto)
          break;
        default:
          elemento.appendChild(document.createTextNode(this.texto))
          break;
      }
      document.querySelector('#app').appendChild(elemento)
    }

    return html;
  }
}

const InputHTML = function (texto) {
  this.texto = texto
}
const ImagenHTML = function (texto) {
  this.texto = texto
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
elementosWeb.push(sitioWeb.crearElemento('meraki.svg', 'img'))
elementosWeb.push(sitioWeb.crearElemento('Contactanos en el formulario', 'p'))
elementosWeb.push(sitioWeb.crearElemento('Contacto', 'input'))

console.log(elementosWeb);
elementosWeb.forEach(elm => {
  elm.mostrar()
})