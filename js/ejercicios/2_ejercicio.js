/*
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
● Una propiedad titular con el valor "Alex".
● Una propiedad saldo, teniendo como valor inicial 0.
● Un método ingresar() que permita añadir dinero a la cuenta, pasando la
cantidad como parámetro
● Un método extraer() que permita retirar la cantidad pasada como
parámetro.
● Un método informar() que retorne la información del estado de la cuenta.
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a
mostrar la descripción del estado de la cuenta.
Rectángulos
*/

class Cuenta {
    constructor(titular,saldo){
    this.titular='Alex';
    this.saldo= 0;
    }
    ingresar(DineroIngresado){
       this.saldo = DineroIngresado;
    }
    extraer(MontoAExtraer){
      this.saldo = this.saldo - MontoAExtraer; 
    }
    informar(){
     document.write(`El titular de la cuenta es:${this.titular}<br>`);
     document.write (`Su saldo disponible es: ${this.saldo}<br>`)
    }
}
let cuentaA = new Cuenta();
document.write(`Estado inicial de la cuenta:<br>`)
cuentaA.informar();
cuentaA.ingresar(prompt(`ingrese dinero a la cuenta`));
cuentaA.extraer(prompt(`ingrese monto que desea extraer`));
document.write(`Estado final de la cuenta despues de ingresar y extraer dinero:<br>`)
cuentaA.informar();