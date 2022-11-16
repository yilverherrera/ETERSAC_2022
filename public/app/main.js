const serverUrl = 'http://localhost:3000/';



//--Carga se select2 jquery---------------------------------------
if (document.getElementById("unidadId")) {
  $(document).ready(function () {
    $("#unidadId").select2(
    {
      height: '60px'
    });
  });
}
if (document.getElementById("operadorId")) {
  $(document).ready(function () {
    $("#operadorId").select2();
  });
}

if (document.getElementById("cpcId")) {
  $(document).ready(function () {
    $("#cpcId").select2();
  });
}

$(document).on("select2:open", () => {
  document.querySelector(".select2-container--open .select2-search__field").focus()
});

//-------------------------------------------------------------------------
//----------------------------------------------------------------



//--Carga de Datepicker-------------------------------------------------
if (document.getElementById("servuelta")) {
  const servuelta = document.getElementById("servuelta");
  if (servuelta.value === 'true') { 
    $('#fecha').datepicker({
      multidate: false,
      format: 'yyyy-mm-dd',
      todayHighlight: true,
      autoclose: true
    });
  } else {
   $('#fecha').datepicker({
    multidate: true,
    format: 'yyyy-mm-dd',
    todayHighlight: true
  }); 
 }
}

//-------------------------------------------------------------------------
//----------------------------------------------------------------













function enviavta(cajaId, productoId){
  const unidadId = document.getElementById("unidadId");

  if (unidadId.value === '0') { 
    alert('Seleccione una Unidad (PD)');
    document.getElementById("productoId").value = 0;
    return false;
  }
  
  window.location.href = '/cajas/' + cajaId + '/sale/' + unidadId.value + '/' + productoId.value + '/newven';
  
}

// CONTROLADORES

async function postData(url = '', data = {}) {
  let overlaySpinner = document.querySelector('.overlay_spinner');
  let overlay = document.querySelector('.overlay');
  overlaySpinner.classList.add('opened');


  window.setTimeout(() => {
    overlay.classList.add('opened');
  }, 500);

  
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then((res) => res.json())
  .then((data) => printData(data));
}

async function delData(url = '', data = {}) {
  let overlaySpinner = document.querySelector('.overlay_spinner');
  let overlay = document.querySelector('.overlay');
  overlaySpinner.classList.add('opened');


  window.setTimeout(() => {
    overlay.classList.add('opened');
  }, 500);

  
  const response = await fetch(url, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then((res) => res.json())
  .then((data) => printData(data));
}

function printData(data) {
  let overlay_content = document.querySelector('.overlay_content');
  let overlaySpinner = document.querySelector('.overlay_spinner');
  let overlay = document.querySelector('.overlay');
  
  overlaySpinner.classList.remove('opened');

  overlay_content.innerHTML = `<h2>${data.message}</h2>`;

  overlay_content.innerHTML += `
  <button class="button_secundario cancelarOverlay refresh" data-refresh="${data.refresh}" type="button">Cerrar</button>`;
  

}

//-----------------------------------------------------------------------------
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

//-----------------------------------------------------------------------------

const cancelarOverlayContr = (ev) => {
  let overlay = document.querySelector('.overlay');
 if (ev.target && ev.target.className.includes('refresh')) {
    refreshContr(ev.target.getAttribute("data-refresh"));
  }
  else{
 overlay.classList.remove('opened');    
  }
}

const cancelarOverlaymaxContr = (ev) => {
  let overlay = document.querySelector('.overlay_max');
 if (ev.target && ev.target.className.includes('refresh')) {
    refreshContrMax(ev.target.getAttribute("data-refresh"));
  }
  else{
 overlay.classList.remove('opened');    
  }
 
}


const refreshContr = (view) => {
  let overlay = document.querySelector('.overlay');
  if (document.getElementById("cajaId") && view !== '/login'){
  const cajaId = document.getElementById("cajaId").value;
  window.location.href = `http://localhost:3000/cajas/${cajaId}/${view}`;
}else{
  window.location.href = `http://localhost:3000/${view}`;
}
 
 overlay.classList.remove('opened'); 

}

const refreshContrMax = (view) => {
  let overlay = document.querySelector('.overlay_max');
  if (document.getElementById("cajaId") && view !== '/login'){
  const cajaId = document.getElementById("cajaId").value;
  window.location.href = `http://localhost:3000/cajas/${cajaId}/${view}`;
}else{
  window.location.href = `http://localhost:3000${view}`;
}
 
 overlay.classList.remove('opened'); 

}





// ROUTER de eventos

const matchEvent = (ev, sel) => ev.target.matches(sel);
const myId = (ev) => Number(ev.target.dataset.myId);
const value = (ev) => ev.target.value;
const formVenta = document.getElementById('formVenta');
const formBusGasto = document.getElementById('formBusGasto');

document.addEventListener('click', ev => {
  if (matchEvent(ev, '.sumAnt')) sumAntContr (value(ev));
  else  if (matchEvent(ev, '.modAnt')) modAntContr (ev);
  else  if (matchEvent(ev, '.addProducto')) addProductoContr (ev);
  else if (matchEvent(ev, '.enviarBus')) createBusGastoContr (ev);
  else if (matchEvent(ev, '.pagarDoc')) pagarDocContr (ev);
  else if (matchEvent(ev, '.cancelarOverlay')) cancelarOverlayContr (ev);
  else if (matchEvent(ev, '.cancelarOverlaymax')) cancelarOverlaymaxContr (ev);
  else if (matchEvent(ev, '.guardarPagoProveedor')) guardarPagoProveedorContr (ev);
  else if (matchEvent(ev, '.backPagos')) backPagosContr (ev);
  else if (matchEvent(ev, '.showPagos')) showPagosContr (ev);
  else if (matchEvent(ev, '.showProductos')) showProductosContr (ev);
  else if (matchEvent(ev, '.crearNomina')) crearNominaContr (ev);
  else if (matchEvent(ev, '.nuevaFalta')) nuevaFaltaContr (ev);
  else if (matchEvent(ev, '.guardarFalta')) guardarFaltaContr (ev);
  else if (matchEvent(ev, '.nuevoPagoNomina')) nuevoPagoNominaContr (ev);
  else if (matchEvent(ev, '.guardarPagoNomina')) guardarPagoNominaContr (ev);
  else if (matchEvent(ev, '.showPagoNomina')) showPagoNominaContr (ev);
  else if (matchEvent(ev, '.delFalta')) delFaltaContr (ev);
  else if (matchEvent(ev, '.pagarPrest')) pagarPrestContr (ev);
  else if (matchEvent(ev, '.guardarPagoPrestamo')) guardarPagoPrestamoContr (ev);
  else if (matchEvent(ev, '.showPagosPrest')) showPagosPrestContr (ev);
  else if (matchEvent(ev, '.showCaja')) showCajaContr (ev);
  else if (matchEvent(ev, '.monitor')) monitorContr (ev);
  else if (matchEvent(ev, '.showSaldoAnt')) showSaldoAntContr (ev);
  else if (matchEvent(ev, '.showDetalle')) showDetalleContr (ev);
  else if (matchEvent(ev, '.cerrarDiv')) cerrarDivContr (ev);
})

document.addEventListener('submit', ev => {
  if (matchEvent(ev, '.formVenta')) createVentaContr (ev);
  else if (matchEvent(ev, '.formAnticipo')) createAnticipoContr (ev);
  else if (matchEvent(ev, '.formRetiro')) createRetiroContr (ev);
  else if (matchEvent(ev, '.formServbus')) createServbusContr (ev);
})


document.addEventListener('change', ev => {
  if (matchEvent(ev, '.calcMonto')) calcMontoContr (value(ev));
  else if  (matchEvent(ev, '.sumEfec')) sumEfecContr (value(ev));
  else if  (matchEvent(ev, '.sumCpc')) sumCpcContr (value(ev));
  else if  (matchEvent(ev, '.sumBanco')) sumBancoContr (value(ev));
  else if  (matchEvent(ev, '.sumFall')) sumFallContr (value(ev));
  else if  (matchEvent(ev, '.sumSin')) sumSinContr (value(ev));
  else if  (matchEvent(ev, '.sumAut')) sumAutContr (value(ev));
  else if  (matchEvent(ev, '.cobrarOperVta')) cobrarOperVtaContr (ev);
  else if  (matchEvent(ev, '.searchProv')) searchProContr (ev);
  else if  (matchEvent(ev, '.searchNom')) searchNomContr (ev);
  else if  (matchEvent(ev, '.searchFinan')) searchFinanContr (ev);
  else if  (matchEvent(ev, '.sumRetiro')) sumRetiroContr (ev);
})



