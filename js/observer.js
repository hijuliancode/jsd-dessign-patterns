// Observer: también se le conoce como suscriptor-publicador
// Es un patro de comportamiento

let observer = {
  obtenerOfertas: function(callback) {
    if (typeof callback === 'function') {
      this.subscribers[this.subscribers.length] = callback;
    }
  },
  cancelarOfertas: function(callback) {
    for(let i = 0; i < this.subscribers.length; i++) {
      if (this.subscribers[i] === callback) {
        delete this.subscribers[i];
      }
    }
  },
  publicarOferta: function(oferta) {
    for(let i = 0; i < this.subscribers.length; i++) {
      if (typeof this.subscribers[i] === 'function') {
        this.subscribers[i](oferta)
      }
    }
  },
  crear: function(objeto) {
    for (let i in this) {
      if (this.hasOwnProperty(i)) {
        objeto[i] = this[i]
        objeto.subscribers = []
      }
    }
  }
}

// Vendedores
const udemy = {
  nuevoCurso: function() {
    const curso = 'Nuevo curso de Javascript!!';
    this.publicarOferta(curso)
  }
}

const facebook = {
  nuevoAnuncio: function() {
    const oferta = 'Compra un celular!!!';
    this.publicarOferta(oferta)
  }
}

// Crear los publicadores
observer.crear(udemy)
observer.crear(facebook)

const meraki = {
  compartir: function(oferta) {
    console.log('Meraki dice, excelente oferta ' + oferta)
  }
}
const ginna = {
  interesa: function(oferta) {
    console.log('Ginna dice, me interesa la oferta de ' + oferta)
  }
}
const julian = {
  interesa: function(oferta) {
    console.log('Julian dice, me interesa la oferta de ' + oferta)
  },
  compartir: function(oferta) {
    console.log('Julian dice, excelente oferta ' + oferta)
  }
}

udemy.obtenerOfertas( meraki.compartir )
udemy.obtenerOfertas( ginna.interesa )
udemy.obtenerOfertas( julian.interesa )
udemy.nuevoCurso()

console.log('---');

udemy.cancelarOfertas( julian.interesa )
udemy.nuevoCurso()

console.log('---');
facebook.obtenerOfertas( ginna.interesa )
facebook.obtenerOfertas( julian.compartir )
facebook.nuevoAnuncio()