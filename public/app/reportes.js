const reporteServiciosContr = (ev) => {
  const fecha = document.querySelector('.mes');
  const unidadId = document.getElementById('unidadId');
  const serviceId = ev.target.getAttribute('data-id');
  const vlta = ev.target.getAttribute('data-vlta');
  const servicio = ev.target.value;
  if (fecha.value === "") { return false; }
  
  getDataReportServicios(fecha.value, unidadId.value, serviceId, servicio, vlta);
}


function getDataReportServicios(fecha, unidadId, serviceId, servicio, vlta) {
  let overlaySpinner = document.querySelector('.overlay_spinner');
  let overlay = document.querySelector('.overlay_max');  
   let overlay_content = document.querySelector('.overlay_content_max');
   let swvlta = false;
   if (parseInt(vlta) === 1 && unidadId !== ''){
    swvlta = true;
   }
  overlay_content.innerHTML = '';
  overlaySpinner.classList.add('opened');
  overlay_content.innerHTML += `
      <a href="${serverUrl}reportes/servicios/downloadExcel?serviceId=${serviceId}&fecha=${fecha}&unidadId=${unidadId}"><img src="/assets/img/xlsx.png" width="50"></a>`;

 overlay_content.innerHTML += `
    <div class="row">
      <div class="col-12"><b>${servicio}</b></div>
    </div>
    `;     

  fetch(`${serverUrl}reportes/servicios?serviceId=${serviceId}&fecha=${fecha}&unidadId=${unidadId}`)
  .then((res) => res.json())
  .then((data) => {
    if (swvlta === false){
    printReportServicios(data, fecha);
  } else {
    printReportServiciosVta(data, fecha);
  }
    overlay.classList.add('opened');
    overlaySpinner.classList.remove('opened');
  });
  
}

function printReportServicios(data, fecha) {
  let overlay_content = document.querySelector('.overlay_content_max');
  if (data.message === undefined){
   overlay_content.innerHTML += `

    <div class="row">
      <div class="col-2"> Autor:</div>

      <div class="col-2"> Placa:</div>
    
      <div class="col-3"> Fecha Caja:</div>
   
      <div class="col-3"> Fecha a Aplicar:</div>
   
      <div class="col-2"> Monto:</div>
    </div>
    `;     

const itemContainer = document.createElement('div');
  itemContainer.className = 'item';
  itemContainer.innerHTML += createDomRepSer(data);
  overlay_content.append(itemContainer);
  overlay_content.innerHTML += `<button class="button_secundario cancelarOverlaymax" type="button">Cerrar</button>`;
} else {

    overlay_content.innerHTML = `<h2>${data.message}</h2>`;

    overlay_content.innerHTML += `
    <button class="button_secundario cancelarOverlaymax refresh" data-refresh="${data.refresh}" type="button">Cerrar</button>`;

  }
 

}


const createDomRepSer = (data) => {
   let montoTotal = 0;
      let itemHtml = '';
   
        data.forEach((item) => {
      itemHtml += `
       <div class="row">
       <div class="col-2"> ${item.pertCajSer.author.username}</div>
      <div class="col-2"> ${item.pertUniSer.codigo}-${item.pertUniSer.placa}</div>
      <div class="col-3"> ${item.fechaCaja}</div>
      <div class="col-3 modFechaRep cursorpointer" data-id="${item.id}"> ${item.fecha}</div>
      <div class="col-2"> ${item.monto}</div>
    </div>
    `;
    montoTotal += item.monto;
        });
         itemHtml += `
<div class="row">
      <div class="coll-3"> </div>
      <div class="coll-3"> </div>
      <div class="coll-3"> </div>
      <div class="coll-1"> </div>
      <div class="col-2"> ${montoTotal.toFixed(2)}</div>
    </div>
    `;

       return itemHtml;
  
}



function printReportServiciosVta(data) {
  let overlay_content = document.querySelector('.overlay_content_max');
  if (data.message === undefined){

const itemContainer = document.createElement('div');
  itemContainer.className = 'item';
  itemContainer.innerHTML += createDomRepSerVta (data);
  overlay_content.append(itemContainer);
  overlay_content.innerHTML += `<button class="button_secundario cancelarOverlaymax" type="button">Cerrar</button>`;
} else {

    overlay_content.innerHTML = `<h2>${data.message}</h2>`;

    overlay_content.innerHTML += `
    <button class="button_secundario cancelarOverlaymax refresh" data-refresh="${data.refresh}" type="button">Cerrar</button>`;

  }
 

}


const createDomRepSerVta = (data) => {
  let liqTotal = 0;
  
      let itemHtml = '';
      itemHtml += `
      <div class="row">

      <div class="col-3">
      Fecha:
      </div>
      <div class="col-1">
      0.5 Vlta:
      </div>
      <div class="col-1">
      1 Vlta:
      </div>
      <div class="col-1">
      1.5 Vltas:
      </div>
      <div class="col-1">
      2 Vltas:
      </div>
      <div class="col-1">
      2.5 Vltas:
      </div>
      <div class="col-1">
      3 Vltas:
      </div>
      <div class="col-3">
      Total:
      </div>
      
      </div>`;
      data.forEach((vta) => {
        itemHtml += `
      <div class="row">

      <div class="col-3">
      ${vta.fecha}
      </div>`
      let nc = 0;
      vta.vlta.forEach( (item) => {
      itemHtml += `
      <div class="col-1" style=" background-color:${vta.color[nc]};">
      ${item}
      </div>
      `;
      nc++;
    });
      itemHtml += `
      <div class="col-3">
      ${vta.total}
      </div>
      
      </div>`;
      liqTotal += vta.total;
      });
      itemHtml += `
      <div class="row">

      <div class="coll-3">
      
      </div>
      <div class="coll-3">
      
      </div>
      <div class="coll-3">
      
      </div>

      <div class="col-3">
     ${liqTotal}
      </div>
      
      </div>`;
     

       return itemHtml;
  
}

//--------------------------------------------------------------------------------

const reporteVentasContr = (ev) => {
  const fecha = document.querySelector('.mes');
  const unidadId = document.getElementById('unidadId');
  const productoId = ev.target.getAttribute('data-id');
  const vlta = ev.target.getAttribute('data-vlta');
  const producto = ev.target.value;
  if (fecha.value === "") { return false; }
  
  getDataReportVentas(fecha.value, unidadId.value, productoId, producto, vlta);
}

function getDataReportVentas(fecha, unidadId, productoId, producto, vlta) {
  let overlaySpinner = document.querySelector('.overlay_spinner');
  let overlay = document.querySelector('.overlay_max');  
   let overlay_content = document.querySelector('.overlay_content_max');
   let swvlta = false;
   if (parseInt(vlta) === 1 && unidadId !== ''){
    swvlta = true;
   }
  overlay_content.innerHTML = '';
  overlaySpinner.classList.add('opened');
  overlay_content.innerHTML += `
      <a href="${serverUrl}reportes/ventas/downloadExcel?productoId=${productoId}&fecha=${fecha}&unidadId=${unidadId}"><img src="/assets/img/xlsx.png" width="50"></a>`;

 overlay_content.innerHTML += `
    <div class="row">
      <div class="col-12"><b>${producto}</b></div>
    </div>
    `;     

  fetch(`${serverUrl}reportes/ventas?productoId=${productoId}&fecha=${fecha}&unidadId=${unidadId}`)
  .then((res) => res.json())
  .then((data) => {
    if (swvlta === false){
    printReportVentas(data, fecha);
  } else {
    printReportVentasVta(data, fecha);
  }
    overlay.classList.add('opened');
    overlaySpinner.classList.remove('opened');
  });
  
}

function printReportVentas(data, fecha) {
  let overlay_content = document.querySelector('.overlay_content_max');
  if (data.message === undefined){
   overlay_content.innerHTML += `

    <div class="row">
      <div class="col-2"> Autor:</div>

      <div class="col-2"> Placa:</div>
    
      <div class="col-3"> Fecha Caja:</div>
   
      <div class="col-3"> Fecha a Aplicar:</div>
   
      <div class="col-2"> Monto:</div>
    </div>
    `;     

const itemContainer = document.createElement('div');
  itemContainer.className = 'item';
  itemContainer.innerHTML += createDomRepVen(data);
  overlay_content.append(itemContainer);
  overlay_content.innerHTML += `<button class="button_secundario cancelarOverlaymax" type="button">Cerrar</button>`;
} else {

    overlay_content.innerHTML = `<h2>${data.message}</h2>`;

    overlay_content.innerHTML += `
    <button class="button_secundario cancelarOverlaymax refresh" data-refresh="${data.refresh}" type="button">Cerrar</button>`;

  }
 

}


const createDomRepVen = (data) => {
   let montoTotal = 0;
      let itemHtml = '';
   
        data.forEach((item) => {
      itemHtml += `
       <div class="row">
       <div class="col-2"> ${item.pertCajVen.author.username}</div>
      <div class="col-2"> ${item.pertUniVen.codigo}-${item.pertUniVen.placa}</div>
      <div class="col-3"> ${item.fechaCaja}</div>
      <div class="col-3"> ${item.fecha}</div>
      <div class="col-2"> ${item.monto}</div>
    </div>
    `;
    montoTotal += item.monto;
        });
         itemHtml += `
<div class="row">
      <div class="coll-3"> </div>
      <div class="coll-3"> </div>
      <div class="coll-3"> </div>
      <div class="coll-1"> </div>
      <div class="col-2"> ${montoTotal.toFixed(2)}</div>
    </div>
    `;

       return itemHtml;
  
}



function printReportVentasVta(data) {
  let overlay_content = document.querySelector('.overlay_content_max');
  if (data.message === undefined){

const itemContainer = document.createElement('div');
  itemContainer.className = 'item';
  itemContainer.innerHTML += createDomRepVenVta (data);
  overlay_content.append(itemContainer);
  overlay_content.innerHTML += `<button class="button_secundario cancelarOverlaymax" type="button">Cerrar</button>`;
} else {

    overlay_content.innerHTML = `<h2>${data.message}</h2>`;

    overlay_content.innerHTML += `
    <button class="button_secundario cancelarOverlaymax refresh" data-refresh="${data.refresh}" type="button">Cerrar</button>`;

  }
 

}


const createDomRepVenVta = (data) => {
  let liqTotal = 0;
  
      let itemHtml = '';
      itemHtml += `
      <div class="row">

      <div class="col-3">
      Fecha:
      </div>
      <div class="col-1">
      0.5 Vlta:
      </div>
      <div class="col-1">
      1 Vlta:
      </div>
      <div class="col-1">
      1.5 Vltas:
      </div>
      <div class="col-1">
      2 Vltas:
      </div>
      <div class="col-1">
      2.5 Vltas:
      </div>
      <div class="col-1">
      3 Vltas:
      </div>
      <div class="col-2">
      Total:
      </div>
      <div class="col-1">
      Anticipo:
      </div>
      </div>`;
      data.forEach((vta) => {
        itemHtml += `
      <div class="row">

      <div class="col-3">
      ${vta.fecha}
      </div>`
      let nc = 0;
      vta.vlta.forEach( (item) => {
      itemHtml += `
      <div class="col-1" style=" background-color:${vta.color[nc]};">
      <abbr title="${vta.detalleMonto[nc]}">${item}</abbr>
      </div>
      `;
      nc++;
    });
      itemHtml += `
      <div class="col-2">
      ${vta.total}
      </div>
      <div class="col-1" data-aplicado="${vta.aplicado}">
      <abbr title="${vta.aplicado}">${vta.anticipo}</abbr>
      </div>
      </div>`;
      liqTotal += vta.total;
      });
      itemHtml += `
      <div class="row">

      <div class="coll-3">
      
      </div>
      <div class="coll-3">
      
      </div>
      <div class="coll-3">
      
      </div>

      <div class="col-3">
     ${liqTotal}
      </div>
      
      </div>`;
     

       return itemHtml;
  
}

//---------------------------------------------------------------

const reporteBusgastosContr = (ev) => {
 const fecha = document.querySelector('.mes');
  const unidadId = document.getElementById('unidadId');
  const tipoPago = ev.target.getAttribute('data-id');
  if (fecha.value === "") { return false; }
  
  getDataReportBusgastos(fecha.value, unidadId.value, tipoPago);
}


function getDataReportBusgastos(fecha, unidadId, tipoPago) {
  let overlaySpinner = document.querySelector('.overlay_spinner');
  let overlay = document.querySelector('.overlay_max');  
   let overlay_content = document.querySelector('.overlay_content_max');
 
  overlay_content.innerHTML = '';
  overlaySpinner.classList.add('opened');
  overlay_content.innerHTML += `
      <a href="${serverUrl}reportes/busgastos/downloadExcel?tipoPago=${tipoPago}&fecha=${fecha}&unidadId=${unidadId}"><img src="/assets/img/xlsx.png" width="50"></a>`;

 overlay_content.innerHTML += `
    <div class="row">
      <div class="col-12"><b>${tipoPago} ${fecha}</b></div>
    </div>
    `;     

  fetch(`${serverUrl}reportes/busgastos?tipoPago=${tipoPago}&fecha=${fecha}&unidadId=${unidadId}`)
  .then((res) => res.json())
  .then((data) => {   
    printReportBusgastos(data, fecha);
    overlay.classList.add('opened');
    overlaySpinner.classList.remove('opened');
  });
  
}

function printReportBusgastos(data, fecha) {
  let overlay_content = document.querySelector('.overlay_content_max');
  if (data.message === undefined){
   overlay_content.innerHTML += `

    <div class="row">
      <div class="col-2"> Autor:</div>
    
      <div class="col-2"> Doc:</div>
   
      <div class="col-5"> Detalle:</div>
   
      <div class="col-3"> Monto:</div>
    </div>
    `;     

const itemContainer = document.createElement('div');
  itemContainer.className = 'item';
  itemContainer.innerHTML += createDomBus(data);
  overlay_content.append(itemContainer);
  overlay_content.innerHTML += `<button class="button_secundario cancelarOverlaymax" type="button">Cerrar</button>`;
} else {

    overlay_content.innerHTML = `<h2>${data.message}</h2>`;

    overlay_content.innerHTML += `
    <button class="button_secundario cancelarOverlaymax refresh" data-refresh="${data.refresh}" type="button">Cerrar</button>`;

  }
 

}


const createDomBus = (data) => {
   let montoTotal = 0;
      let itemHtml = '';
        data.forEach((item) => {
          let detalle = '';
          item.detbusgastos.forEach( (det) => {
            detalle += `Placa: ${det.pertUniDbg.codigo}-${det.pertUniDbg.placa} Producto:${det.pertProDbg.nombre} Cant:${det.cant} CostoUni:${det.costoUni} Total:${det.total}, `;
          });
      itemHtml += `
       <div class="row">
       <div class="col-2"> ${item.pertCajBug.author.username}</div>
      <div class="col-2"> ${item.doc}</div>
      <div class="col-5"> ${detalle}</div>
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

const modFechaRepContr = (ev) => {
  let overlaySpinner = document.querySelector('.overlay_spinner');
  let overlay = document.querySelector('.overlay');
  const id = ev.target.getAttribute('data-id');
  overlaySpinner.classList.add('opened');
  
  window.setTimeout(() => {
    overlay.classList.add('opened');
  }, 500);

    printDataFechaRep(id);
  overlaySpinner.classList.remove('opened');

}

const  printDataFechaRep = (id) => {
  let overlay_content = document.querySelector('.overlay_content');
   overlay_content.innerHTML = '';
  overlay_content.innerHTML += `

  <div class="label">
   <label>Fecha:</label>
   </div>
   <div class="input">
   <input type="date" id="dateMod" class="dateMod">
   </div>

   <button class="button_secundario cancelarOverlay" type="button">Cerrar</button>
   <button class="button_primary guardarUpdFecha" data-id="${id}" type="button">Modificar</button>`;
}

const guardarUpdFechaContr = (ev) => {
  
  const id = ev.target.getAttribute('data-id');
  const date = document.querySelector('.dateMod');
  const fechaMod = {
    id: id,
    fecha: date.value,
  }

postData(`${serverUrl}reportes/fecha`,  fechaMod);

}
