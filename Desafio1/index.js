

class Usuario  {
    constructor(nombre, apellido, libros, mascotas){
            this.nombre = nombre ;
            this.apellido = apellido ;
            this.libros =  [] ;
            this.mascotas =  [];
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascotaNew) {
        this.mascotas.push(mascotaNew);
    }

    countMascotas() {
      return this.mascotas.length;
    }

    addBook(titulo, autor) {
        this.libros.push({titulo: titulo, autor: autor});
       
    }

    getBooksNames() {
        const bookTitles = [];
        this.libros.forEach((titulo) => bookTitles.push(titulo.titulo));
        return bookTitles;
      }
    }


const usuario1 = new Usuario ("Ori", "Aviles");

usuario1.getFullName();

usuario1.addMascota("Sassy");

usuario1.countMascotas();

usuario1.addBook("unLibro", "unAutor");

usuario1.getBooksNames();

