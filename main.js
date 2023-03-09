class datosAuto{
    constructor (identificator, marca, modelo, año, precio,img){
        this.ideintificator = identificator
        this.marca = marca
        this.modelo = modelo
        this.año = año
        this.precio = precio
        this.img = img
    }

}

const auto1= new datosAuto(1, "Volkswagen", "Vento GLI", 2019, 31000);
const auto2= new datosAuto(2, "Fiat", "Cronos", 2022, 11000,);
const auto3= new datosAuto(3, "Ford", "Mondeo", 2015, 9000);
const auto4= new datosAuto(4, "Chevrolet", "Cruze LTZ", 2021, 18000);
const auto5= new datosAuto(5, "Toyota", "Corolla XR", 2023, 24000);
const auto6= new datosAuto(6, "Hyundai", "Veloster", 2010, 15000);
const camioneta1= new datosAuto(7, "Dodge", "Ram 1500", 2018, 50000);
const camioneta2= new datosAuto(8, "Jeep", "GrandCherokee", 2016, 42000);


const autos = [auto1, auto2, auto3, auto4, auto5, auto6];
const camionetas = [camioneta1, camioneta2];

const vehiculos = [auto1, auto2, auto3, auto4, auto5, auto6, camioneta1, camioneta2];

const btnCamionetas= document.getElementById("btnCamionetas");
btnCamionetas.addEventListener("click", () =>{
    console.log(camionetas);
})

const btnAutos= document.getElementById("btnAutos");
btnAutos.addEventListener("click", () => {
    console.log(autos);
})

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


const contenedorAutos = document.getElementById("contenedorAutos");

vehiculos.forEach( vehiculo => {
    const divAutos = document.createElement("div");
    divAutos.innerHTML = `<p> ${vehiculo.marca} ${vehiculo.modelo} </p>
                                    <img> ${vehiculo.img}</img>
                                    <p> $ ${vehiculo.precio} </p>
                                    <button> Agregar a mi carrito </button>`;
                                    contenedorAutos.appendChild(divAutos);
    
})

