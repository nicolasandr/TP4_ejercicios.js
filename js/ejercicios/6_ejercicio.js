/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
● ISBN
● Título
● Autor
● Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad.
Crear el método mostrarLibro() para mostrar la información relativa al libro con el
siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/
class Libro {
    constructor(isbn,titulo,autor,numPaginas){
        this.Isbn=isbn;
        this.Titulo=titulo;
        this.Autor=autor;
        this.numPaginas=numPaginas;
    }
    mostrarLibro(){
        document.write(`<br>El libro:${this.mostrarTitulo} con ISBN:${this.mostrarIsbn} creado por el autor:
                         ${this.mostrarAutor} tiene ${this.mostrarNumPaginas}<br>`);
    }
    
    get mostrarIsbn(){
        return this.Isbn;
    }
    get mostrarTitulo(){
        return this.Titulo;
    }
    get mostrarAutor(){
        return this.Autor;
    }
    get mostrarNumPaginas(){
        return this.numPaginas;
    }
    set set_isbn(isbn){
        this.Isbn = isbn;
    }
    set set_Titulo(Titulo){
        this.Titulo = Titulo;
    }
    set set_Autor(autor){
        this.Autor = autor;
    }
    set set_numPaginas(numPag){
        this.numPaginas = numPag;
    }

}
function compararPaginas(libro1,libro2){
    if(libro1.mostrarNumPaginas > libro2.mostrarNumPaginas){
         document.write(`<br>El libro:${libro1.mostrarTitulo} tiene mayor numero de paginas.<br>`);
    }
    else{
        document.write(`<br>El libro:${libro2.mostrarTitulo} tiene mayor numero de paginas.<br>`);
    }
}
let libro1 = new Libro ();
libro1.set_isbn = '964-7-13-153753-1';
libro1.set_Titulo = 'Padre rico padre pobre';
libro1.set_Autor = 'Robert Kiyosaki';
libro1.set_numPaginas = '264';

let libro2 = new Libro (); 
libro2.set_isbn = '924-1-14-153733-2';
libro2.set_Titulo = 'El principito';
libro2.set_Autor = 'Antoine de Saint-Exupéry';
libro2.set_numPaginas = '376';

libro1.mostrarLibro()
libro2.mostrarLibro();
compararPaginas(libro1,libro2);