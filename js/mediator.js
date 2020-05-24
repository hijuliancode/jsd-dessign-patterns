// Mediator
// Es un intermediario que se comunica con distintos tipos de objetos
// Es una variante del observer,
// Mientras que en el observer se define un objeto global para publicar y suscribirse a eventos en el sistema completo,
// el mediador define objetos ya localizados para un objetivo en especial

const Vendedor = function(nombre) {
  this.nombre = nombre
}
const Comprador = function(nombre) {
  this.nombre = nombre
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