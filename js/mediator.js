// Mediator
// Es un intermediario que se comunica con distintos tipos de objetos
// Es una variante del observer,
// Mientras que en el observer se define un objeto global para publicar y suscribirse a eventos en el sistema completo,
// el mediador define objetos ya localizados para un objetivo en especial

const Vendedor = function(nombre) {
  this.nombre = nombre
  this.sala = null
}
const Comprador = function(nombre) {
  this.nombre = nombre
  this.sala = null
}

Vendedor.prototype = {
  oferta: function(articulo, precio) {
    console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos en ${precio}`)
  },
  vendido: function(comprador) {
    console.log(`Vendido a ${comprador.nombre}, (Sonido de mazo)`);
  }
}

Comprador.prototype = {
  oferta: function(mensaje, comprador) {
    console.log(`${comprador.nombre} : ${mensaje}`)
  }
}

const Subasta = function() {
  let compradores = {}
  return {
    registrar: function(usuario) {
      compradores[usuario.nombre] = usuario
      usuario.sala = this
      console.log(compradores)
    }
  }
}

// Instanciar las clases
  // Compradores
  const juan = new Comprador('Juan')
  const meraki = new Comprador('Meraki')
  const ginna = new Comprador('Ginna')
  const petra = new Comprador('Petra')

  // Vendedor
  const vendedor = new Vendedor('Vendedor')

  // Subasta
  const subasta = new Subasta()

// Registrar usuarios a Subasta
  subasta.registrar( juan )
  subasta.registrar( meraki )
  subasta.registrar( ginna )
  subasta.registrar( petra )


// Comenzando la subasta
  vendedor.oferta('Mustang 1966', 3000)

  juan.oferta(3500, juan)
  juan.oferta(4000, meraki)
  juan.oferta(10000, ginna)

  vendedor.vendido(ginna)