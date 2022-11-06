//------Crer Nómina----------------------------
const crearNominaContr = () => {
	

	const quincenaId = document.getElementById("quincenaId").value;
	const empleados = document.getElementById('empleadoIds');
	const crearNominaButton = document.querySelector('.crearNomina');

	if (quincenaId === '0') { return false; }
	let empleadosIds = [];

	for (var i = 0; i < empleados.length; i++) {
		var empleado = empleados[i];
		if (empleado.selected){
		empleadosIds.push(empleado.value);
	}
	
	}
	if (JSON.stringify(empleadosIds) === '[]'){ 
		alert('Seleccione los empleados');
		return false; 
	}

	const data = {
		quincenaId: quincenaId,
		empleadosIds: empleadosIds,
	}

crearNominaButton.disabled = true;

	postData(`${serverUrl}nominas`, data)
}
//----------------------------------------------







//-----------------Nueva Falta---------------
const nuevaFaltaContr = (ev) =>  {

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
   <h2>Empleado Id:${ev.target.getAttribute("data-emp")}</h2>
   <input type="hidden" id="nominaId" name="nominaId" value="${ev.target.getAttribute("data-id")}">
   <div class="label">
   <label>Fecha:</label>
   </div>
   <div>
   <input type="date" id="FechaFalta" name="FechaFalta" autocomplete="off">
   </div>
   
<button class="button_secundario cancelarOverlay" type="button">Cerrar</button>
<button class="button_primary guardarFalta" type="button">Guardar</button>`

  overlay_content.append(itemContainer);

}

const guardarFaltaContr = (ev) => {
  const id = document.getElementById('nominaId').value;
  let fecha = document.getElementById('FechaFalta').value;
  

if (fecha === "") {
  return false;
}

  const falta = {
    fecha: fecha
  }

postData(`${serverUrl}nominas/${id}/faltas`,  falta);

}

const delFaltaContr = (ev) => {
  const id = ev.target.getAttribute("data-id");
  const fecha = ev.target.getAttribute("data-fecha");
  
  const falta = {
    id: id,
    fecha: fecha,
  }

delData(`/nominas/${id}/faltas`,  falta);

}



//-------------------------------------------------------------------



//-------------------Search Nómina---------------------------------
const searchNomContr = (ev) => {
	const quincenaId = document.getElementById("quincenaId");
  const cajaId = document.getElementById("cajaId").value;

  if (quincenaId.value === '0') { 
    alert('Seleccione una Quincena');
    return false;
  }
  
  window.location.href = '/cajas/' + cajaId + '/quincenas/' + quincenaId.value;
}


//-----------------Pagar Nómina---------------------------------------
const nuevoPagoNominaContr = (ev) =>  {

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
   <h2>Empleado:${ev.target.getAttribute("data-emp")}</h2>
   <input type="hidden" id="nominaId" name="nominaId" value="${ev.target.getAttribute("data-id")}">
   <div class="label">
   <label>Efectivo:</label>
   </div>
   <div>
   <input type"text" id="pagoEfectNomina" name="pagoEfectNomina" size="30" >
   </div>
   
<button class="button_secundario cancelarOverlay" type="button">Cerrar</button>
<button class="button_primary guardarPagoNomina" type="button">Guardar</button>`

  overlay_content.append(itemContainer);

}

const guardarPagoNominaContr = (ev) => {
  const cajaId = document.getElementById("cajaId").value;
  const id = document.getElementById('nominaId').value;
  let efectivo = document.getElementById('pagoEfectNomina').value;

if (isNaN(efectivo) || efectivo === "" || efectivo === "0") {
  return false;
}

  const pagoNom = {
    efectivo: efectivo,
  }

postData(`${serverUrl}cajas/${cajaId}/nominas/${id}/pagos`,  pagoNom);

}


//-----------------Show Pagos Nómina----------
const showPagoNominaContr = (ev) => {
  let overlaySpinner = document.querySelector('.overlay_spinner');
  let overlay = document.querySelector('.overlay');
  let overlay_content = document.querySelector('.overlay_content');
    overlaySpinner.classList.add('opened');
    overlay_content.innerHTML = '';


  window.setTimeout(() => {
    overlay.classList.add('opened');
  }, 500);

  const id = ev.target.getAttribute("data-id");
  getDataPagosNomina(id);
}

function getDataPagosNomina(id) {
  const cajaId = document.getElementById("cajaId").value;
  let overlaySpinner = document.querySelector('.overlay_spinner');
  fetch(`${serverUrl}cajas/${cajaId}/nominas/${id}/pagos/show`)
    .then((res) => res.json())
    .then((data) => printDataPagosNom(data));
    overlaySpinner.classList.remove('opened');
}

function printDataPagosNom(data) {
  let overlay_content = document.querySelector('.overlay_content');
  overlay_content.innerHTML += `<div class="row">
  <div class="col-4">
        Monto:
    </div>
    <div class="col-4">
        Autor:
    </div>
    <div class="col-4">
        Fecha:
    </div>
    </div>`;

  data.forEach((item) => {
    const itemContainer = document.createElement('div');
    itemContainer.className = 'row';
    itemContainer.innerHTML += createDomPagosNomina(item);
    overlay_content.append(itemContainer);
  });
   overlay_content.innerHTML += `<button class="button_secundario cancelarOverlay" type="button">Cerrar</button>`;
}

function createDomPagosNomina(item) {
  const itemHtml = `
    <div class="col-4">
        ${item.monto}
    </div>
    <div class="col-4">
        ${item.author}
    </div>
    <div class="col-4">
        ${item.fecha}
    </div>
    `;
  return itemHtml;
}










