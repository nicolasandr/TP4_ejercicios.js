/*
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar
las propiedades código, nombre y precio, además del método imprime datos, el
cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores
de los tres objetos instanciados.
*/
class Producto {
    constructor(codigo,nombre,precio){
        this.codigo=codigo;
        this.nombre=nombre;
        this.precio=precio;
    }
    imprimeDatos(){
        document.write(`
        <ul>
        <li>Codigo: ${this.codigo}</li>
        <li>Nombre: ${this.nombre}</li>
        <li>Precio: ${this.precio}</li>
        </ul>
        `);
    }
}
//creamos instancias
let computadora1 = new Producto('carita234','asus TUF Gaming F17','$200.000');
let computadora2 = new Producto('mejor262','asus TUF Gaming F15','$180.000');
let computadora3 = new Producto('ofertonxp357','asus ROG','$210.000');

let computadoras= [computadora1,computadora2,computadora3];

for(let indice= 0;indice<computadoras.length; indice++){
    computadoras[indice].imprimeDatos();
}
