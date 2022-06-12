/*
 Crea un objeto llamado auto que tenga algunas características como el color,
marca, modelo y si está encendido o apagado. Crea los métodos necesarios para
permitir encender y apagar el auto.
*/
let ObjetoAuto = {
  color: "negro",
  marca: "volkswagen",
  modelo: "golf",
  estado: "",
  estadoVehiculo: () => {
    if (confirm("¿Desea encender el auto?") == true) {
      ObjetoAuto.estado = "encendido";
    } else {
      ObjetoAuto.estado = "apagado";
    }
  }
}

ObjetoAuto.estadoVehiculo();

let auto = Object.keys(ObjetoAuto);

for (let indice = 0; indice < auto.length-1; indice++) {
  document.write(`<br>${auto[indice]}:${ObjetoAuto[auto[indice]]}`);
}
