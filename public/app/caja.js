//-----------------Show Detalle-Productos----------
const showCajaContr = (ev) => {
  let overlaySpinner = document.querySelector('.overlay_spinner');
  let overlay = document.querySelector('.overlay');
  let overlay_content = document.querySelector('.overlay_content');
  const id = ev.target.getAttribute('data-id');
    overlaySpinner.classList.add('opened');
    overlay_content.innerHTML = '';


  window.setTimeout(() => {
    overlay.classList.add('opened');
  }, 500);

  getDataCaja(id);
}

function getDataCaja(id) {
  let overlaySpinner = document.querySelector('.overlay_spinner');
  fetch(`${serverUrl}cajas/${id}`)
    .then((res) => res.json())
    .then((data) => printDataCaja(data));
    overlaySpinner.classList.remove('opened');
}

function printDataCaja(data) {
  let overlay_content = document.querySelector('.overlay_content');
  overlay_content.innerHTML += `
  <div class="row">
    <div class="coll-3"></div>
    <div class="col-6"><b>Ingresos:</b></div>
    <div class="coll-3"></div>
</div>    
<div class="row">
    <div class="coll-3"></div>
    <div class="col-3">Servicios:</div>
    <div class="col-3">${data.servbus}</div>
    <div class="coll-3"></div>
</div>    
<div class="row">
    <div class="coll-3"></div>
    <div class="col-3">Ventas:</div>
    <div class="col-3">${data.vent}</div>
    <div class="coll-3"></div>
</div>    
<div class="row">
    <div class="coll-3"></div>
    <div class="col-3">Cobros:</div>
    <div class="col-3">${data.cobro}</div>
    <div class="coll-3"></div>
</div>    
<div class="row">
    <div class="coll-3"></div>
    <div class="col-3">Anticipos:</div>
    <div class="col-3">${data.anticipo}</div>
    <div class="coll-3"></div>
</div>    
<div class="row">
    <div class="coll-3"></div>
    <div class="col-3">Total:</div>
    <div class="col-3"><b>${data.totalIng}</b></div>
    <div class="coll-3"></div>
</div>    
<div class="row">
    <div class="coll-3"></div>
    <div class="col-6"><b>Egresos:</b></div>
    <div class="coll-3"></div>
</div>    
<div class="row">
    <div class="coll-3"></div>
    <div class="col-3">Gasto Mant. Buses:</div>
    <div class="col-3">${data.busgasto}</div>
    <div class="coll-3"></div>
</div>    
<div class="row">
    <div class="coll-3"></div>
    <div class="col-3">Gastos Administrativos:</div>
    <div class="col-3">${data.admgasto}</div>
    <div class="coll-3"></div>
</div>    
<div class="row">
    <div class="coll-3"></div>
    <div class="col-3">Pagos:</div>
    <div class="col-3">${data.pago}</div>
    <div class="coll-3"></div>
</div>    
<div class="row">
    <div class="coll-3"></div>
    <div class="col-3">Total:</div>
    <div class="col-3"><b>${data.totalEgr}</b></div>
    <div class="coll-3"></div>
</div>    
<div class="row">
    <div class="coll-3"></div>
    <div class="col-6"><b>Retiros:</b></div>
    <div class="coll-3"></div>
</div>  
<div class="row">
    <div class="coll-3"></div>
    <div class="col-3">Retiros:</div>
    <div class="col-3"><b>${data.retiro}</b></div>
    <div class="coll-3"></div>
</div>    
<div class="row">
    <div class="coll-3"></div>
    <div class="col-6"><b>Caja:</b></div>
    <div class="coll-3"></div>
</div>  
<div class="row">
    <div class="coll-3"></div>
    <div class="col-3"><b>Efectivo en Caja:</b></div>
    <div class="col-3"><b>${data.efectivo}</b></div>
    <div class="coll-3"></div>
</div> 
    `;

   overlay_content.innerHTML += `<button class="button_secundario cancelarOverlay" type="button">Cerrar</button>`;
}

