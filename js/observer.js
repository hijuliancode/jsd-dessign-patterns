// Observer también se le conoce como suscriptor-publicador
// Es un patro de comportamiento

let observer = {
  obtenerOfertas = function(callback) {
    if (typeof callback === 'function') {
      this.subscribers[this.subscribers.length] = callback;
    }
  },
  cancelarOferta = function(callback) {
    for(let i = 0; i < this.subscribers.length; i++) {
      if (this.subscribers[i] === callback) {
        delete this.subscribers[i]
      }
    }
  },
  publicarOferta = function(oferta) {
    for(let i = 0; i < this.subscribers.length; i++) {
      if (typeof this.subscribers[i] === 'function') {
        this.subscribers[i](oferta)
      }
    }
  },
  crear: function(obj) {
    for (let i in this) {
      if (this.hasOwnProperty(i)) {
        obj[i] = i
        obj.subscribers = []
      }
    }
  }
}

// Vendedores
const udemy = {
  nuevoCurso = function() {
    const curso = 'Nuevo curso de Javascript!!';
    this.publicarOferta(curso)
  }
}

const facebook = {
  nuevoAnuncio = function() {
    const oferta = 'Compra un celular!!!';
    this.publicarOferta(oferta)
  }
}

// Crear los publicadores
observer.crear(udemy)
observer.crear(facebook)