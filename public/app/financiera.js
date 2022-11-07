//-------------------Search Fianciera---------------------------------
const searchFinanContr = (ev) => {
	const financieraId = document.getElementById("financieraId");
  const cajaId = document.getElementById("cajaId").value;

  if (financieraId.value === '0') { 
    alert('Seleccione una Financiera');
    return false;
  }
  
  window.location.href = '/cajas/' + cajaId + '/pagoprestfinancieros/' + financieraId.value;
}

//Pagar Préstamo-----------------------------

const pagarPrestContr = (ev) =>  {

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
   <h2>Moneda:${ev.target.getAttribute("data-descmon")}</h2>
   <input type="hidden" id="abonoId" name="abonoId" value="${ev.target.getAttribute("data-id")}">
   <input type="hidden" id="moneda" name="moneda" value="${ev.target.getAttribute("data-mon")}">
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
   <label>Tasa de Cambio:</label>
   </div>
   <div class="input">
   <input type"text" id="tasa" name="tasa">
   </div>
   <div class="label">
   <label>Observaciones:</label>
   </div>
   <div class="input">
   <input type"text" id="abonoObservaciones" name="abonoObservaciones">
   </div>

<button class="button_secundario cancelarOverlay" type="button">Cerrar</button>
<button class="button_primary guardarPagoPrestamo" type="button">Guardar</button>`

  overlay_content.append(itemContainer);

}

const guardarPagoPrestamoContr = (ev) => {
  const cajaId = document.getElementById("cajaId").value;
  const id = document.getElementById('abonoId').value;
  let efectivo = document.getElementById('abonoEfect').value;
  let banco = document.getElementById('abonoBanco').value;
  let fueradCaja = document.getElementById('abonoFueradCaja').value;
const observaciones = document.getElementById('abonoObservaciones').value;
const moneda = document.getElementById('moneda').value;
let tasa = document.getElementById('tasa').value;

if (isNaN(efectivo) || isNaN(banco) || isNaN(fueradCaja) || isNaN(tasa)) {
  return false;
}
if (efectivo === "") { efectivo = 0; }
if (banco === "") { banco = 0; }
if (fueradCaja === "") { fueradCaja = 0; }
if (tasa === "") { tasa = 0; }

if (moneda === '2' && isNaN(tasa)){
  alert('Debes especificar la Tasa de cambio');
  return false;
}
if (moneda === '2' && tasa === '0'){
  alert('Debes especificar la Tasa de cambio');
  return false;
}

if (moneda === '2' && tasa === 0){
  alert('Debes especificar la Tasa de cambio');
  return false;
}

const sum = parseFloat(efectivo) + parseFloat(banco) + parseFloat(fueradCaja);

if (sum === 0) { return false; }

  const pago = {
    id: id,
    efectivo: efectivo,
    banco: banco,
    fueradCaja: fueradCaja,
    observaciones: observaciones,
    moneda: moneda,
    tasa: tasa,
  }

postData(`${serverUrl}cajas/${cajaId}/pagoprestfinancieros`,  pago);

}

//-----------------Show Pagos Préstamo----------
const showPagosPrestContr = (ev) => {
  let overlaySpinner = document.querySelector('.overlay_spinner');
  let overlay = document.querySelector('.overlay');
  let overlay_content = document.querySelector('.overlay_content');
    overlaySpinner.classList.add('opened');
    overlay_content.innerHTML = '';


  window.setTimeout(() => {
    overlay.classList.add('opened');
  }, 500);

  const id = ev.target.getAttribute("data-id");
  getDataPagosPrest(id);
}

function getDataPagosPrest(id) {
  const cajaId = document.getElementById("cajaId").value;
  let overlaySpinner = document.querySelector('.overlay_spinner');
  fetch(`${serverUrl}cajas/${cajaId}/pagoprestfinancieros/${id}/show`)
    .then((res) => res.json())
    .then((data) => printDataPagos(data));
    overlaySpinner.classList.remove('opened');
}

