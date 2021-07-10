// Singleton
// Define la creación de un objeto que solo tiene una instancia
// En su forma más sencilla puede ser un object literal, al final
// cuando creas un object literal, ese objeto tiene ya una instancia.

// Este es un ejemplo del singleton, en una sola instancía se tienen todas las
// funciones relacionadas a un objeto
const alumnos = {
  listaAlumnos : [],
  getAlumno: function(id) {
    return this.listaAlumnos[id]
  },
  crear: function(datos) {
    console.log(datos)
    this.listaAlumnos.push(datos)
  },
  listado: function() {
    return this.listaAlumnos
  }
}

const infoAlumno1 = {
  nombre: 'Meraki',
  edad: 28
}
const infoAlumno2 = {
  nombre: 'Ginna',
  edad: 18
}
const infoAlumno3 = {
  nombre: 'Julian',
  edad: 28
}

alumnos.crear(infoAlumno1)
alumnos.crear(infoAlumno2)
alumnos.crear(infoAlumno3)

const listadoDeAlumnos = alumnos.listado()
console.log(listadoDeAlumnos)

const alumno = alumnos.getAlumno(1)
console.log(alumno)
