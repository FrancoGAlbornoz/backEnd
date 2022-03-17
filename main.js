class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros= libros;
        this.mascotas= mascotas;

    }
    getFullName(){
        //const nombreCompleto = `Nombre completo del usuario es:  ${this.nombre} ${this.apellido}`;
        //return nombreCompleto;
        return console.log(`Nombre completo del usuario es:  ${this.nombre} ${this.apellido}`);
    }

    addMascota(mascota){
        this.mascotas.push(mascota)

    }
    countMascotas(){

    }
    addBook(libroNuevo){
        this.libros.push(libroNuevo)
    }
    getBookNames(){
        const nombreLibro=[]
        this.libros.forEach(libro =>nombreLibro.push(libro.nombre));
        return nombreLibro;
    }

}

const usuario = new Usuario(
    'Juan',
    'Diaz',
    [{nombre:'El principito', autor: 'Antoine de Saint-Exupéry' },{nombre:'Harry Potter', autor: 'J.K. Rowling'}],
    ['Boby', 'Pedrito'],
)

usuario.addMascota('Mishi')
usuario.addBook({nombre:'El señor de los anillos', autor: 'J. R. R. Tolkien' });



usuario.getFullName();

console.log(usuario.mascotas);

console.log(usuario.getBookNames());

console.log(usuario.libros);