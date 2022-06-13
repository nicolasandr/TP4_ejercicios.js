/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
generación pertenece la persona creada y cual es el rasgo característico de esta
generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la
persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/
class Persona {
    constructor(nombre,edad,dni,sexo,peso,altura,anioNacimiento){
        this.nombre=nombre;
        this.edad=edad;
        this.dni=dni;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.anioNacimiento=anioNacimiento;
    }
    mostrargeneracion(){
       if(this.anioNacimiento >=1994 && this.anioNacimiento<=2010){
          document.write(`${this.nombre} pertenece a la generacion Z<br>Rasgo caracteristico:irreverencia.<br>`);
       }
       if(this.anioNacimiento >=1981 && this.anioNacimiento<=1993){
        document.write(`${this.nombre} pertenece a la generacion Y<br>Rasgo caracteristico:Frustracion.<br>`);
      }
      if(this.anioNacimiento >=1969 && this.anioNacimiento<=1980){
        document.write(`${this.nombre} pertenece a la generacion X<br>Su rasgo caracteristico:Obsesion por el exito.<br>`);
     }
     if(this.anioNacimiento >=1949 && this.anioNacimiento<=1968){
        document.write(`${this.nombre} pertenece a la generacion Baby boom<br>Su rasgo caracteristico:Ambicion.<br>`);
     }
     if(this.anioNacimiento >=1930 && this.anioNacimiento<=1948){
        document.write(`${this.nombre} pertenece a la generacion Silent Generation<br>Su rasgo caracteristico:Austeridad.<br>`);
     }
    }
    esMayorDeEdad(){
        if(this.edad >= 18 ){
            document.write(`${this.nombre} es mayor de edad.<br>`);
         }
    }
    mostrarDatos(){
        document.write(`
        <ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>DNI: ${this.dni}</li>
        <li>Sexo: ${this.sexo}</li>
        <li>Peso: ${this.peso}</li>
        <li>Altura: ${this.altura}</li>
        <li>Año de nacimiento: ${this.anioNacimiento}</li>
        <li>DNI Aleatorio generado: ${this.nuevoDni}</li>
        </ul>
        `);
    }
     generaDNI(){
        let numRandom=Math.round(Math.random()*(99999999-10000000)+parseInt(1));
        this.nuevoDni=numRandom;
    }

}
let Persona1= new Persona('Nicolas','14','40637796','masculino','60 kg','1.65','1997');
let Persona2= new Persona('maradona','60','64637796','masculino','64 kg','1.65','1960');

let personas= [Persona1,Persona2];

for(let indice= 0;indice<=personas.length; indice++){
    personas[indice].generaDNI();
    personas[indice].mostrarDatos();
    personas[indice].mostrargeneracion();
    personas[indice].esMayorDeEdad();
}
