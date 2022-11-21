const reporteCotizacionContr = (ev) => {
  const fecha = document.querySelector('.mes');
  const unidadId = document.getElementById('unidadId');
  const serviceId = ev.target.getAttribute('data-id');
  if (fecha.value === "") { return false; }
  
  getDataCotizacion(fecha.value, unidadId.value, serviceId);
}

const descargarServiceContr = (ev) => {
const fecha = document.querySelector('.mes');
  const unidadId = document.getElementById('unidadId');
  const serviceId = ev.target.getAttribute('data-id');

  window.location.href = `${serverUrl}reportes/cotizaciones/downloadExcel?serviceId=${serviceId}&fecha=${fecha}&unidadId=${unidadId}`;
}

function getDataCotizacion(fecha, unidadId, serviceId) {
  let overlaySpinner = document.querySelector('.overlay_spinner');
  let overlay = document.querySelector('.overlay_max');  
   let overlay_content = document.querySelector('.overlay_content_max');
  overlay_content.innerHTML = '';
  overlaySpinner.classList.add('opened');
  overlay_content.innerHTML += `
      <a href="${serverUrl}reportes/cotizaciones/downloadExcel?serviceId=${serviceId}&fecha=${fecha}&unidadId=${unidadId}"><img src="../assets/img/xlsx.png" width="50"></a>`;



  fetch(`${serverUrl}reportes/cotizaciones?serviceId=${serviceId}&fecha=${fecha}&unidadId=${unidadId}`)
  .then((res) => res.json())
  .then((data) => {
    printDataCotizacion(data, fecha);
    overlay.classList.add('opened');
    overlaySpinner.classList.remove('opened');
  });
  
}
function printDataCotizacion(data, fecha) {
  let overlay_content = document.querySelector('.overlay_content_max');
  if (data.message === undefined){
   overlay_content.innerHTML += `
     
      <br>
    <div class="row">
      <div class="col-3"> Placa:</div>
    
      <div class="col-3"> Fecha Caja:</div>
   
      <div class="col-3"> Fecha a Aplicar:</div>
   
      <div class="col-3"> Monto:</div>
    </div>
    `;     

const itemContainer = document.createElement('div');
  itemContainer.className = 'item';
  itemContainer.innerHTML += createDomCot(data);
  overlay_content.append(itemContainer);
  overlay_content.innerHTML += `<button class="button_secundario cancelarOverlaymax" type="button">Cerrar</button>`;
} else {

    overlay_content.innerHTML = `<h2>${data.message}</h2>`;

    overlay_content.innerHTML += `
    <button class="button_secundario cancelarOverlaymax refresh" data-refresh="${data.refresh}" type="button">Cerrar</button>`;

  }
 

}


const createDomCot = (data) => {
   let montoTotal = 0;
      let itemHtml = '';
   
        data.forEach((item) => {
      itemHtml += `
       <div class="row">
      <div class="col-3"> ${item.pertUniSer.codigo}-${item.pertUniSer.placa}</div>
      <div class="col-3"> ${item.fechaCaja}</div>
      <div class="col-3"> ${item.fecha}</div>
      <div class="col-3"> ${item.monto}</div>
    </div>
    `;
    montoTotal += item.monto;
        });
         itemHtml += `
<div class="row">
      <div class="coll-3"> </div>
      <div class="coll-3"> </div>
      <div class="coll-3"> </div>
      <div class="col-3"> ${montoTotal}</div>
    </div>
    `;

       return itemHtml;
  
}




