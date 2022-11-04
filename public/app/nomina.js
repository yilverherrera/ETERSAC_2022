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








