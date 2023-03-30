class datosVehiculos{
    constructor (id, marca, modelo, año, precio,img){
        this.id = id
        this.marca = marca
        this.modelo = modelo
        this.año = año
        this.precio = precio
        this.img = img
    }

}

const vehiculo1= new datosVehiculos(1, "Volkswagen", "Vento GLI", 2019, 31000, "img/ventoGLI.jpg");
const vehiculo2= new datosVehiculos(2, "Fiat", "Cronos", 2022, 11000, "img/cronos.png");
const vehiculo3= new datosVehiculos(3, "Ford", "Mondeo", 2015, 9000, "img/mondeo.jpg");
const vehiculo4= new datosVehiculos(4, "Chevrolet", "Cruze LTZ", 2021, 18000, "img/cruzeLTZ.jpg");
const vehiculo5= new datosVehiculos(5, "Toyota", "Corolla GR", 2023, 24000, "img/corollaGR.png");
const vehiculo6= new datosVehiculos(6, "Hyundai", "Veloster", 2010, 15000, "img/veloster.jpg");
const vehiculo7= new datosVehiculos(7, "Dodge", "Ram 1500", 2018, 50000, "img/ram.jpg");
const vehiculo8= new datosVehiculos(8, "Jeep", "GrandCherokee", 2016, 42000, "img/grandcherokee.jpg");


const vehiculos = [vehiculo1, vehiculo2, vehiculo3, vehiculo4, vehiculo5, vehiculo6, vehiculo7, vehiculo8];


const btnFondo=document.getElementById("btnFondo");

btnFondo.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("modo", "dark");
    }else{
        localStorage.setItem("modo","ligth");
    }
})

const modo = localStorage.getItem("modo");
if(modo === "dark"){
    document.body.classList.add("dark");
}else{
    document.body.classList.remove("dark");
}



const contenedorVehiculos = document.getElementById("contenedor-vehiculos");

for(let i = 0; i < vehiculos.length; i++){
  const vehiculo = vehiculos[i];

  const divAuto = document.createElement("div");
  divAuto.innerHTML = `<img src="${vehiculo.img}"><h5>${vehiculo.marca} ${vehiculo.modelo}</h5><p>Año: ${vehiculo.año}</p><p>Precio: $${vehiculo.precio.toFixed(2)}</p>`;
  const btnAgregar = btnAddCarritoF(vehiculo);
  divAuto.appendChild(btnAgregar);
  contenedorVehiculos.appendChild(divAuto);
}
