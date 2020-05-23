// Builder Pattern - Constructor Pattern
// Es muy similar al factory
// En el builder se crea una abstracción,
// una abstracción es como una capa aparte de lo que viene siendo la funcionalidad
// Es decir, no programas directamente en el código sino que creas una capa extra y sobre ella programas.
// De eso se trata, de crear una abstacción que nos va a permitir crear distintos tipos de objetos.
// En este patron es necesario agregar el tipo y el contenido del objeto que deseamos crear

class Formulario {
  constructor() {
    this.campos = []
  }
  agregarCampo(tipo, texto) {
    let campos = this.campos;
    let campo;
    switch(tipo) {
      case 'text':
        campo = new InputText(texto)
        break;
      case 'email':
        campo = new InputEmail(texto)
        break;
      case 'button':
        campo = new Boton(texto)
        break;
      default:
        throw new Error('Campo no soportado => ' + tipo)
    }
    campos.push(campo)
  }
  obtenerFormularo() {
    let form = document.createElement('form'),
    campos = this.campos.length,
    campo;
    for(let i = 0; i < campos; i++) {
      campo = this.campos[i];
      form.appendChild(campo.crearElemento())
      let br = document.createElement('br')
      form.appendChild(br)
    }
    return form
  }
}

class Inputs {
  constructor(texto) {
    this.texto = texto
  }
}
class InputText extends Inputs {
  constructor(texto) {
    super(texto)
  }
  crearElemento() {
    const inputText = document.createElement('input')
    inputText.setAttribute('type', 'text')
    inputText.setAttribute('placeholder', this.texto)

    return inputText
  }
}
class InputEmail extends Inputs {
  constructor(texto) {
    super(texto)
  }
  crearElemento() {
    const inputEmail = document.createElement('input')
    inputEmail.setAttribute('type', 'email')
    inputEmail.setAttribute('placeholder', this.texto)

    return inputEmail
  }
}
class Boton extends Inputs {
  constructor(texto) {
    super(texto)
  }
  crearElemento() {
    const boton = document.createElement('button')
    boton.setAttribute('type', 'submit')
    boton.textContent = this.texto
    return boton
  }
}

// Instanciar Formulario
const formulario = new Formulario()

// Agregar campos al formulario
formulario.agregarCampo('text', 'Añade tu nombre')
formulario.agregarCampo('text', 'Añade tu apellido')
formulario.agregarCampo('email', 'Añade tu Email')
formulario.agregarCampo('button', 'Guardar tu información')
// formulario.agregarCampo('imagen', 'gmm.svg')

console.log(formulario)
console.log(formulario.obtenerFormularo())

// Renderizar formulario en el HTML

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#app').appendChild(formulario.obtenerFormularo())
})