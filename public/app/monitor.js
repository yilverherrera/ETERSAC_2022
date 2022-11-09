//-----------------Show Monitor----------
const monitorContr = (ev) => {
  let overlaySpinner = document.querySelector('.overlay_spinner');
  let overlay = document.querySelector('.overlay');
  let overlay_content = document.querySelector('.overlay_content');
  const fecha = document.querySelector('.fechaMonitor');
  if (fecha.value === "") { return false; }
    overlaySpinner.classList.add('opened');
    overlay_content.innerHTML = '';


  window.setTimeout(() => {
    overlay.classList.add('opened');
  }, 500);

  getDataMonitor(fecha.value);
}

function getDataMonitor(fecha) {
  let overlaySpinner = document.querySelector('.overlay_spinner');
  fetch(`${serverUrl}monitors?fecha=${fecha}`)
    .then((res) => res.json())
    .then((data) => printDataMonitor(data));
    overlaySpinner.classList.remove('opened');
}

function printDataMonitor(data) {
  let overlay_content = document.querySelector('.overlay_content');
  overlay_content.innerHTML += `<div class="row">
  <div class="col-2">
        PD:
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
        Liq:
    </div>
     <div class="col-2">
        D2:
    </div>
    </div>`;

  data.forEach((item) => {
    const itemContainer = document.createElement('div');
    itemContainer.className = 'row';
    itemContainer.innerHTML += createDomMonitor(item);
    overlay_content.append(itemContainer);
  });
   overlay_content.innerHTML += `<button class="button_secundario cancelarOverlay" type="button">Cerrar</button>`;
}

function createDomMonitor(item) {
  const itemHtml = `
    <div class="col-2">
        ${item.unidadId}
    </div>
    <div class="col-1">
        ${item.vuelta === 0.5 ? item.efectivo : 0}
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
        Liq:
    </div>
     <div class="col-2">
        D2:
    </div>

    `;
  return itemHtml;
}

