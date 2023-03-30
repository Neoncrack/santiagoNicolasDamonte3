let carrito = {
    cant:0,
    items: [],
    total: 0,
};


const addCarrito = (vehiculo) => {
    let itemExistente= carrito.items.find(item => item.id === vehiculo.id)

    if(itemExistente){
        itemExistente.cantidad++
        carrito.cant++
    }else{
        carrito.items.push({
            id: vehiculo.id,
            marca: vehiculo.marca,
            modelo: vehiculo.modelo,
            cantidad: 1,
            precio: vehiculo.precio
        });
    }
    carrito.total += vehiculo.precio;
    carrito.cant++;
}

const btnAddCarritoF = (vehiculo) => {
    let btnAddCarrito = document.createElement('button');
    btnAddCarrito.textContent = "Agregar al carrito";
    btnAddCarrito.addEventListener('click', () => {
        addCarrito(vehiculo);
        mostrarCarrito(carrito);
    });
    return btnAddCarrito;
}
    


const mostrarCarrito = (carrito) => {
    let carritoEl = document.getElementById('carrito');

    let itemsEl = document.createElement('ul');
    carrito.items.forEach((item) => {
        let itemEl = document.createElement('li');
        itemEl.textContent = item.marca + ' ' + item.modelo + ' x ' + item.cantidad + ' = $' + item.cantidad * item.precio;
        itemsEl.appendChild(itemEl);
      });

    let totalEl = document.createElement('p');
    totalEl.textContent ='Total; $' + carrito.total;

    carritoEl.innerHTML = '';
    carritoEl.appendChild(itemsEl);
    carritoEl.appendChild(totalEl);
}

const carritoString = JSON.stringify(carrito);

sessionStorage.setItem('carrito', carritoString);

let carritoRecuperado = JSON.parse(sessionStorage.getItem('carrito'));
if (carritoRecuperado) {
  carrito = carritoRecuperado;
  mostrarCarrito(carrito);
}

