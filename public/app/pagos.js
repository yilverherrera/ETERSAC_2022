
const searchProContr = () => {
  const proveedorId = document.getElementById("proveedorId");
  const cajaId = document.getElementById("cajaId").value;

  if (proveedorId.value === '0') { 
    alert('Seleccione un Proveedor');
    return false;
  }
  
  window.location.href = '/cajas/' + cajaId + '/pagoproveedors/' + proveedorId.value;
  
}

const pagarDocContr = (ev) =>  {

 let overlay_content = document.querySelector('.overlay_content');
  let overlaySpinner = document.querySelector('.overlay_spinner');
  let overlay = document.querySelector('.overlay');
    overlaySpinner.classList.add('opened');
    overlay_content.innerHTML = '';


  window.setTimeout(() => {
    overlay.classList.add('opened');
  }, 500);
overlaySpinner.classList.remove('opened');

const itemContainer = document.createElement('div');
  itemContainer.className = 'form_one_over';
   itemContainer.innerHTML = `
   <h2>Doc:${ev.target.getAttribute("data-doc")}</h2>
   <input type="hidden" id="abonoId" name="abonoId" value="${ev.target.getAttribute("data-id")}">
   <div class="label">
   <label>Efectivo:</label>
   </div>
   <div>
   <input type"text" id="abonoEfect" name="abonoEfect">
   </div>
   <div class="label">
   <label>Banco:</label>
   </div>
   <div class="input">
   <input type"text" id="abonoBanco" name="abonoBanco">
   </div>
   <div class="label">
   <label>Fuera de Caja:</label>
   </div>
   <div class="input">
   <input type"text" id="abonoFueradCaja" name="abonoFueradCaja">
   </div>
   <div class="label">
   <label>Observaciones:</label>
   </div>
   <div class="input">
   <input type"text" id="abonoObservaciones" name="abonoObservaciones">
   </div>

<button class="button_secundario cancelarOverlay" type="button">Cerrar</button>
<button class="button_primary guardarPagoProveedor" type="button">Guardar</button>`

  overlay_content.append(itemContainer);

}

const guardarPagoProveedorContr = (ev) => {
  const cajaId = document.getElementById("cajaId").value;
  const id = document.getElementById('abonoId').value;
  let efectivo = document.getElementById('abonoEfect').value;
  let banco = document.getElementById('abonoBanco').value;
  let fueradCaja = document.getElementById('abonoFueradCaja').value;
const observaciones = document.getElementById('abonoObservaciones').value;

if (isNaN(efectivo) || isNaN(banco) || isNaN(fueradCaja)) {
  return false;
}
if (efectivo === "") { efectivo = 0; }
if (banco === "") { banco = 0; }
if (fueradCaja === "") { fueradCaja = 0; }

const sum = parseFloat(efectivo) + parseFloat(banco) + parseFloat(fueradCaja);

if (sum === 0) { return false; }

  const pago = {
    id: id,
    efectivo: efectivo,
    banco: banco,
    fueradCaja: fueradCaja,
    observaciones: observaciones,
  }

postData(`${serverUrl}cajas/${cajaId}/pagoproveedors`,  pago);

}

const backPagosContr = (ev) => {
  const cajaId = document.getElementById("cajaId").value;
  window.location.href = `${serverUrl}cajas/${cajaId}/pagos`;
}


//-----------------Show Pagos----------
const showPagosContr = (ev) => {
  let overlaySpinner = document.querySelector('.overlay_spinner');
  let overlay = document.querySelector('.overlay');
  let overlay_content = document.querySelector('.overlay_content');
    overlaySpinner.classList.add('opened');
    overlay_content.innerHTML = '';


  window.setTimeout(() => {
    overlay.classList.add('opened');
  }, 500);

  const id = ev.target.getAttribute("data-id");
  getDataPagos(id);
}

function getDataPagos(id) {
  const cajaId = document.getElementById("cajaId").value;
  let overlaySpinner = document.querySelector('.overlay_spinner');
  fetch(`${serverUrl}cajas/${cajaId}/pagoproveedors/${id}/show`)
    .then((res) => res.json())
    .then((data) => printDataPagos(data));
    overlaySpinner.classList.remove('opened');
}

function printDataPagos(data) {
  let overlay_content = document.querySelector('.overlay_content');
  overlay_content.innerHTML += `<div class="row">
  <div class="col-2">
        Efectivo:
    </div>
    <div class="col-2">
        Banco:
    </div>
    <div class="col-2">
        FueradCaja:
    </div>
    <div class="col-3">
        Fecha:
    </div>
    <div class="col-3">
        Observ:
    </div>
    </div>`;

  data.forEach((item) => {
    const itemContainer = document.createElement('div');
    itemContainer.className = 'row';
    itemContainer.innerHTML += createDomPagos(item);
    overlay_content.append(itemContainer);
  });
   overlay_content.innerHTML += `<button class="button_secundario cancelarOverlay" type="button">Cerrar</button>`;
}

function createDomPagos(item) {
  const itemHtml = `
    <div class="col-2">
        ${item.efectivo}
    </div>
    <div class="col-2">
        ${item.banco}
    </div>
    <div class="col-2">
        ${item.fueradCaja}
    </div>
    <div class="col-3">
        ${item.fecha}
    </div>
    <div class="col-3">
        ${item.author} ${item.observaciones}
    </div>
    `;
  return itemHtml;
}



//-----------------Show Detalle-Productos----------
const showProductosContr = (ev) => {
  let overlaySpinner = document.querySelector('.overlay_spinner');
  let overlay = document.querySelector('.overlay');
  let overlay_content = document.querySelector('.overlay_content');
    overlaySpinner.classList.add('opened');
    overlay_content.innerHTML = '';


  window.setTimeout(() => {
    overlay.classList.add('opened');
  }, 500);

  const id = ev.target.getAttribute("data-id");
  getDataProductos(id);
}

function getDataProductos(id) {
  const cajaId = document.getElementById("cajaId").value;
  let overlaySpinner = document.querySelector('.overlay_spinner');
  fetch(`${serverUrl}cajas/${cajaId}/busgastos/${id}`)
    .then((res) => res.json())
    .then((data) => printDataProductos(data));
    overlaySpinner.classList.remove('opened');
}

function printDataProductos(data) {
  let overlay_content = document.querySelector('.overlay_content');
  overlay_content.innerHTML += `<div class="row">
  <div class="col-3">
        Producto:
    </div>
    <div class="col-2">
        Cant:
    </div>
    <div class="col-2">
        Costo Uni:
    </div>
    <div class="col-3">
        Total:
    </div>
    <div class="col-3">
        Placa:
    </div>
    </div>`;

  data.forEach((item) => {
    const itemContainer = document.createElement('div');
    itemContainer.className = 'row';
    itemContainer.innerHTML += createDomProductos(item);
    overlay_content.append(itemContainer);
  });
   overlay_content.innerHTML += `<button class="button_secundario cancelarOverlay" type="button">Cerrar</button>`;
}

function createDomProductos(item) {
  const itemHtml = `
    <div class="col-3">
        ${item.producto}
    </div>
    <div class="col-2">
        ${item.cant}
    </div>
    <div class="col-2">
        ${item.costo}
    </div>
    <div class="col-2">
        ${item.total}
    </div>
    <div class="col-3">
        ${item.pd}
    </div>
    `;
  return itemHtml;
}

