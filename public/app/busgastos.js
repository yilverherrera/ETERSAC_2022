const items = document.querySelector('.items');

const addProductoContr = () => {
 const cantidad = document.getElementById('cant');
 const precio = document.getElementById('precio');
 const unidad =document.getElementById('unidadId');
 const producto =document.getElementById('reproductoId');

 if (unidad.value == 0) {
  alert("Seleccione un PD");
  return false;
}
if (producto.value == 0) {
  alert("Seleccione un Producto");
  return false;
}

if (cantidad.value === '' || cantidad.value === 0 || isNaN(cantidad.value)) {
  alert('Agregue la Cantidad');
} else if (precio.value === '' || precio.value === 0 || isNaN(precio.value)) {
  alert('Agregue el Precio');
} else {

  const itemContainer = document.createElement('div');
  itemContainer.className = 'row item';

  itemContainer.innerHTML += createDomElement();
  items.append(itemContainer);
  itemContainer
  .querySelector('.buttonDelete')
  .addEventListener('click', removeItem);
  updateTotal();
}

}

const createDomElement = () => {
  const producto =document.getElementById('reproductoId');
  const indiceP = producto.selectedIndex;
  const opcionSeleccionadaP = producto.options[indiceP];
  const unidad =document.getElementById('unidadId');
  const indiceU = unidad.selectedIndex;
  const opcionSeleccionadaU = unidad.options[indiceU];
  const cantidad = document.getElementById('cant');
  const precio = document.getElementById('precio');

  const itemHtml = `
  <div class="col-2">
  <p class='unidad' data-id='${opcionSeleccionadaU.value}'> ${opcionSeleccionadaU.text} </p>
  </div>
  <div class="col-6">
  <p class='producto' data-id='${opcionSeleccionadaP.value}'> ${opcionSeleccionadaP.text} </p>
  </div>
  <div class="col-2">
  <p class='precio'> ${precio.value} </p>
  </div>
  <div class="col-1">
  <p class="cantidad">${cantidad.value}</p>
  </div>
  <div class="col-1">
<button class="buttonDelete" type="button">x</button>
</div>
  `;
  return itemHtml;
  
}

const updateTotal = () => {
  let total = 0;
  
  const totalSel = document.querySelector('.total');

  const Items = document.querySelectorAll('.item');

  Items.forEach((Item) => {
   const unidadElement = Item.querySelector(
    '.unidad'
    );

   const unidad = Number(
    unidadElement.getAttribute("data-id")
    );

   const productoElement = Item.querySelector(
    '.producto'
    );

   const producto = Number(
    productoElement.getAttribute("data-id")
    );

   const precioElement = Item.querySelector(
    '.precio'
    );
   const precio = Number(
    precioElement.textContent
    );

   const cantidadElement = Item.querySelector(
    '.cantidad'
    );
   const cantidad = Number(
    cantidadElement.textContent
    );
   total = total + precio * cantidad;

 });
  totalSel.innerHTML = `${total.toFixed(2)}S/`;
}

function removeItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.item').remove();
  updateTotal();
}

const createBusGastoContr = (frm) => {
  const unidad = document.getElementById('unidadId');
  const proveedor = document.getElementById('proveedorId');
  const tipoPago = document.getElementById('tipoPago');
  const doc = document.getElementById('doc');
  const abonado = document.getElementById('abonado');
  const Items = document.querySelectorAll('.item');
  const cajaId = document.getElementById("cajaId").value;

  let productos = [];
  let total = 0;

  if (unidad.value == 0) {
    alert("Seleccione un PD");
    return false;
  }

  if (tipoPago.value == 0) {
    alert("Seleccione un Tipo de Pago");
    return false;
  }

  if (doc.value == '') {
    alert("Doc no puede estar vacío");
    return false;
  }  

  if (abonado.value == '' || isNaN(abonado.value)) {
    abonado.value = 0;
  }  


  Items.forEach((Item) => {
   const unidadElement = Item.querySelector(
    '.unidad'
    );

   const unidad = Number(
    unidadElement.getAttribute("data-id")
    );

   const productoElement = Item.querySelector(
    '.producto'
    );

   const producto = Number(
    productoElement.getAttribute("data-id")
    );

   const precioElement = Item.querySelector(
    '.precio'
    );
   const precio = Number(
    precioElement.textContent
    );

   const cantidadElement = Item.querySelector(
    '.cantidad'
    );
   const cantidad = Number(
    cantidadElement.textContent
    );

   const productoObj = {
    costoUni: precio,
    cant: cantidad,
    reproductoId: producto,
    unidadId: unidad,
  };

  productos.push(productoObj);
  total = total + precio * cantidad;
});

  if (JSON.stringify(productos) === '[]'){
    alert("Agregue los productos");
    return false;
  }

  const busgastoObj = {
    monto: total,
    doc: doc.value,
    tipoPago: tipoPago.value,
    abonado: abonado.value,
    proveedor: proveedor.value,
    productos: productos,
  }

  postData('http://localhost:3000/cajas/'+ cajaId +'/busgastos',  busgastoObj);

}
