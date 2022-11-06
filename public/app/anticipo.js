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