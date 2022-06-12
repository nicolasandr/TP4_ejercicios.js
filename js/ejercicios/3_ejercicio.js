/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
propiedades de alto y ancho, mas los métodos necesarios para modificar y
mostrar sus propiedades, calcular el perímetro y el área
*/

class Rectangulo{
  constructor(alto, ancho){
   this.alto=alto;
   this.ancho=ancho;
  }
  modificarAlto(altura){
  this.alto= altura;
  }
  modificarAncho(ancho){
   this.ancho= ancho;
  }
  calculoArea(){
     this.area=(this.alto*this.ancho);
  }
  calculoPerimetro(){
    this.perimetro=(this.alto*2 + this.ancho*2);
  }
  MostrarPropiedades(){
      document.write(`
    RECTANGULO
    <ul>
    <li>Alto: ${this.alto}</li>
    <li>Ancho: ${this.ancho}</li>
    <li>Area: ${this.area}</li>
    <li>Perimetro: ${this.perimetro}</li>
    </ul>
    `);
  }
  
}
 let TrianguloA = new Rectangulo(8,4);
 TrianguloA.calculoArea();
 TrianguloA.calculoPerimetro();
 TrianguloA.MostrarPropiedades();
 TrianguloA.modificarAlto(4);
 TrianguloA.modificarAncho(2);
 TrianguloA.calculoArea();
 TrianguloA.calculoPerimetro();
 TrianguloA.MostrarPropiedades();