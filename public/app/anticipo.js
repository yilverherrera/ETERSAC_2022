const createAnticipoContr = (frm) => {
const inpEfectivo = document.getElementById("efectivo");
const inpUnidad = document.getElementById("unidadId");
  if (!inpEfectivo.checkValidity()) {
    document.getElementById("validate").innerHTML = inpEfectivo.validationMessage;
    frm.preventDefault();
  }
  if (!inpUnidad.checkValidity()) {
    document.getElementById("validate").innerHTML = inpUnidad.validationMessage;
    frm.preventDefault();
  }
}

const plusAntContr = (ev) => {
  const id = document.getElementById('unidadId');
  let overlaySpinner = document.querySelector('.overlay_spinner');
  let overlay = document.querySelector('.overlay_max');
  let overlay_content = document.querySelector('.overlay_content_max');
    overlaySpinner.classList.add('opened');
    overlay_content.innerHTML = '';


  window.setTimeout(() => {
    overlay.classList.add('opened');
  }, 500);

  getDataanticipos(id.value);
}

function getDataanticipos(id) {
  let overlaySpinner = document.querySelector('.overlay_spinner');
  fetch(`${serverUrl}anticipos/${id}`)
    .then((res) => res.json())
    .then((data) => printDataAnticipos(data));
    overlaySpinner.classList.remove('opened');
}

function printDataAnticipos(data) {
  let overlay_content = document.querySelector('.overlay_content_max');
  overlay_content.innerHTML += `<div class="row">
  <div class="col-1">
        Mon:
    </div>
    <div class="col-2">
        Fecha:
    </div>
    <div class="col-2">
        Fecha Aplicar:
    </div>
    <div class="col-2">
        Saldo:
    </div>
    <div class="col-3">
        Despacho:
    </div>
    <div class="col-1">
        Mod.
    </div>
    <div class="col-1">
        Rest.
    </div>
    </div>`;

  data.forEach((item) => {
    const itemContainer = document.createElement('div');
    itemContainer.className = 'row';
    itemContainer.innerHTML += createDomAnticipos(item);
    overlay_content.append(itemContainer);
  });
   overlay_content.innerHTML += `<button class="button_secundario cancelarOverlaymax" type="button">Cerrar</button>`;
}

function createDomAnticipos(item) {
  let itemHtml = `
    <div class="col-1">
        ${item.monto}
    </div>
    <div class="col-2">
        ${item.fechaCaja}
    </div>
    <div class="col-2">
        ${item.fecha}
    </div>
    <div class="col-2">
        ${item.saldo}
    </div>
    <div class="col-3">
        ${item.despacho}
    </div>
    <div class="col-1">`;
    if (item.saldo > 0){
      itemHtml += `<i class="fa-regular fa-pen-to-square cursorpointer modFecha" data-id="${item.id}"></i>`;
    }
    itemHtml +=`</div>
    <div class="col-1">`;
    if (item.fechaCaja !== item.fecha){
     itemHtml += `<i class="fa-solid fa-arrow-rotate-left cursorpointer restFecha" data-id="${item.id}"></i>`;
    }
    itemHtml += `</div>
    `;
  return itemHtml;
}

const  modFechaContr = (ev) => {
  const cajaId = document.getElementById('cajaId').value;
  const id = ev.target.getAttribute('data-id');
  fetch(`${serverUrl}anticipos/${id}/mod?cajaId=${cajaId}`)
    .then((res) => res.json())
    .then((data) => {
let overlay_content = document.querySelector('.overlay_content_max');
  overlay_content.innerHTML = `<h2>${data.message}</h2>`
  overlay_content.innerHTML += `<button class="button_secundario cancelarOverlaymax refresh" data-refresh="${data.refresh}" type="button">Cerrar</button>`;
    });
}

const  restFechaContr = (ev) => {
  const id = ev.target.getAttribute('data-id');
  fetch(`${serverUrl}anticipos/${id}/rest`)
    .then((res) => res.json())
    .then((data) => {
let overlay_content = document.querySelector('.overlay_content_max');
  overlay_content.innerHTML = `<h2>${data.message}</h2>`
  overlay_content.innerHTML += `<button class="button_secundario cancelarOverlaymax refresh" data-refresh="${data.refresh}" type="button">Cerrar</button>`;
    });
}
