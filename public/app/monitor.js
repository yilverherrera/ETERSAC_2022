//-----------------Show Monitor----------
const monitorContr = (ev) => {
  let overlaySpinner = document.querySelector('.overlay_spinner');
  let overlay = document.querySelector('.overlay_max');
  let overlay_content = document.querySelector('.overlay_content_max');
  const fecha = document.querySelector('.fechaMonitor');
  if (fecha.value === "") { return false; }
  overlaySpinner.classList.add('opened');
  overlay_content.innerHTML = '';

  overlay.classList.add('opened');


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
  let overlay_content = document.querySelector('.overlay_content_max');
  
  if (data.message === undefined){
  data.groups.forEach((grupo) => {
    let efectivoGrupo = 0;
    let vltasGrupo = 0;
    let d2Grupo = 0;
    let anticipoGrupo = 0;
    overlay_content.innerHTML += `<div class="row">
    <div class="col-11">
    <b>${grupo.nombre}</b>
    </div>
    <div class="col-1">
<span class="buttonDelete cursorpointer cancelarOverlaymax">Cerrar</span>
</div>
    </div>`;
    overlay_content.innerHTML += `<div class="row">
    <div class="col-1">
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
    <div class="col-1">
    Total Liq:
    </div>
    <div class="col-1">
    Total Vltas:
    </div>
    <div class="col-1">
    D2:
    </div>
    <div class="col-mm">
    Ant:
    </div>
    <div class="col-mm">
    Ant. Acum:
    </div>
    <div class="col-mm">
    Vltas S.Tanq:
    </div>
    </div>`;
    grupo.unidads.forEach((unidad) => {
        const unidadPlaca = data.unidadsPlaca.find(unid => unid.id === unidad);
        let row = '';
        row += `<div class="row">
        <div class="col-1">
        ${unidadPlaca.padron}
        </div>`;
        let liq = 0;
        let vltas = 0;
        data.catVlta.forEach((item) => {
            const vlta = data.servicios.filter((dat) => dat.unidadId === unidad).find( dato => dato.vuelta === item.valor );
            if (vlta){
                vltas += item.valor;
                liq += vlta.efectivo;
                row += `<div class="col-1">
                ${vlta.efectivo}
                </div>`;
            } else {
              row += `<div class="col-1">
              
              </div>`;
          }
      })
        efectivoGrupo += liq;
        vltasGrupo += vltas;
        d2Grupo += unidadPlaca.d2;
        anticipoGrupo += unidadPlaca.anticipo;
        row +=     `<div class="col-1">
        <b>${liq}</b>
        </div>
        <div class="col-1">
        <b>${vltas}</b>
        </div>
        <div class="col-1">
        ${unidadPlaca.d2}
        </div>
        <div class="col-mm">
        ${unidadPlaca.anticipo}
        </div>
         <div class="col-mm cursorpointer showSaldoAnt" data-ant="${unidadPlaca.fechasAnticipos}">
        ${unidadPlaca.saldosAnticipos}
        </div>
        <div class="col-mm cursorpointer showSaldoAnt" data-ant="${unidadPlaca.fechasVltas}">
        ${unidadPlaca.VltasAcum}
        </div>
        </div>`;
        overlay_content.innerHTML += row;
    }) 
    overlay_content.innerHTML += `<div class="row">
    <div class="col-7">

    </div>
    <div class="col-1">
    <b>${efectivoGrupo}</b>
    </div>
<div class="col-1">
    <b>${vltasGrupo}</b>
    </div>
    <div class="col-1">
    <b>${d2Grupo}</b>
    </div>
<div class="col-mm">
    <b>${anticipoGrupo}</b>
    </div>
    <div class="col-mm">
    <b></b>
    </div>
    <div class="col-mm">
    <b></b>
    </div>
    </div>`;
});
  overlay_content.innerHTML += `<button class="button_secundario cancelarOverlaymax" type="button">Cerrar</button>`;
} else {

  overlay_content.innerHTML = `<h2>${data.message}</h2>`;

  overlay_content.innerHTML += `
  <button class="button_secundario cancelarOverlay refresh" data-refresh="${data.refresh}" type="button">Cerrar</button>`;
  
}

  
  
}


const showSaldoAntContr = (ev) => {
  let overlaySpinner = document.querySelector('.overlay_spinner');
  let overlay = document.querySelector('.overlay');
  let overlay_content = document.querySelector('.overlay_content');
    overlaySpinner.classList.add('opened');
    overlay_content.innerHTML = '';


  window.setTimeout(() => {
    overlay.classList.add('opened');
  }, 500);

  let anticipos = ev.target.getAttribute("data-ant");
  anticipos = anticipos.split('T');

  anticipos.forEach((ant) => {
    overlay_content.innerHTML += `<div class="row">
    <div class="coll-3">

    </div>
    <div class="col-6">
    <b>${ant}</b>
    </div>
    <div class="coll-3">

    </div>
    </div>`;
  });
   overlay_content.innerHTML += `<button class="button_secundario cancelarOverlay" type="button">Cerrar</button>`;
  overlaySpinner.classList.remove('opened');
}


