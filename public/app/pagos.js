const searchProContr = () => {
  const proveedorId = document.getElementById("proveedorId");
  const cajaId = document.getElementById("caja").value;

  if (proveedorId.value === '0') { 
    alert('Seleccione un Proveedor');
    return false;
  }
  
  window.location.href = '/cajas/' + cajaId + '/pagoproveedors/' + proveedorId.value;
  
}

const pagarDocContr = (ev) =>  {

 let overlay_content = document.querySelector('.overlay_content');
  let overlaySpinner = document.querySelector('.overlay_spinner');
  let overlay = document.querySelector('.overlay');
    overlaySpinner.classList.add('opened');


  window.setTimeout(() => {
    overlay.classList.add('opened');
  }, 500);
overlaySpinner.classList.remove('opened');

  overlay_content.innerHTML = ev.target.getAttribute("data-id");
}