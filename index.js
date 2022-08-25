

class Usuario  {
    constructor(nombre, apellido, libros, mascotas){
            this.nombre = nombre ;
            this.apellido = apellido ;
            this.libros =  [libros] ;
            this.mascotas =  [mascotas];
    }

    getFullName() {
        return console.log((` ${this.nombre} ${this.apellido}`))
    }

    addMascota(mascotaNew) {
        this.mascotas.push(mascotaNew)
        return (this.mascotas);
    }

    countMascotas() {
      return  console.log(this.mascotas.length)
    }

    addBook(titulo, autor) {
        this.libros.push({titulo: titulo, autor: autor})
        return console.log(this.libros)
    }

    getBooksNames() {
        this.libros.map(function(libros){
            return console.log(libros.titulo)
        })
    }
}

const usuario1 = new Usuario ("Ori", "Aviles", {titulo:"Game of Thrones", autor: "George R.R"}, ["Toby"])

usuario1.getFullName();

usuario1.addMascota("Sassy");

usuario1.countMascotas();

usuario1.addBook("unLibro", "unAutor");

usuario1.getBooksNames();
