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
        campo.text = texto
        break;
      case 'email':
        campo.text = texto
        break;
      case 'button':
        campo.text = texto
        break;
      default:
        throw new Error('Campo no soportado' + tipo)
    }
    campos.push(campo)
  }
}

class Inputs {
  constructor(texto) {
    this.texto = texto
  }
}

// Instanciar Formulario
const formulario = new Formulario()