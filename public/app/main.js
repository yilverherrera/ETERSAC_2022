

//----------------------ANIMATIONS-----------------
let toggle = document.querySelector(".toggle span");
let main = document.querySelector("#mainSection");
let sidebar = document.querySelector(".sidebar");
let sidebarItems = document.querySelectorAll(".sidebar_item");
let sidebarOpened = false;
let animationIn = null;
let animationOut = null;

let animationIn_end_promise;

/**
 * Con special transforms...
 */
 anime.remove([toggle, sidebar, sidebarItems]);
 anime.set(sidebar, {
  translateX: "-100%",
});
 anime.set(sidebarItems, {
  translateX: "-40%",
});

 let sidebarAnimationIn = function () {
  animationIn = anime.timeline();
  animationOut = null;
  sidebarOpened = !sidebarOpened;

  // move sidebar
  animationIn.add({
    targets: [sidebar],
    translateX: "0%",
    opacity: 1,
    duration: 650,
  });

  // move toggle
  animationIn.add(
  {
    targets: [toggle],
    scale: "1.3",
    duration: 650,
  },
  "-=600"
  );

  // stagger elements
  animationIn.add(
  {
    targets: [sidebarItems],
    translateX: "0%",
    opacity: 1,
    duration: 650,
    delay: anime.stagger(100),
  },
  "-=500"
  );
};

let sidebarAnimationOut = function () {
  animationOut = anime.timeline();
  animationIn = null;
  sidebarOpened = !sidebarOpened;

  // stagger elements
  animationOut.add({
    targets: [sidebarItems],
    translateX: "-40%",
    opacity: 0,
    duration: 650,
    delay: anime.stagger(100),
  });

  // move toggle
  animationOut.add(
  {
    targets: [toggle],
    scale: 1,
    backgroundColor: "",
    duration: 650,
  },
  "-=600"
  );

  // move sidebar
  animationOut.add(
  {
    targets: [sidebar],
    translateX: ["0%", "-100%"],
    opacity: [1, 0],
    duration: 650,
  },
  "-=600"
  );
};

toggle.addEventListener("click", function () {
  if (!sidebarOpened) {
    sidebarAnimationIn();
  } else {
    sidebarAnimationOut();
  }
});


if (document.querySelector(".toggle2")) {
  let toggle2 = document.querySelector(".toggle2 span");
  let miBox = document.querySelector(".miBox");
  let miBoxOpened = false;
  let animationIn2 = null;
  let animationOut2 = null;
  /**
   * Con special transforms...
   */
   anime.remove([toggle2, miBox]);
   anime.set(miBox, {
    translateX: "100%",
  });

   let miboxAnimationIn = function () {
    animationIn2 = anime.timeline();
    animationOut2 = null;
    miBoxOpened = !miBoxOpened;

    // move sidebar
    animationIn2.add({
      targets: [miBox],
      translateX: "0%",
      opacity: 1,
      duration: 650,
    });

    // move toggle
    animationIn2.add(
    {
      targets: [toggle2],
      scale: "1.3",
      duration: 650,
    },
    "-=600"
    );
  };

  let miboxAnimationOut = function () {
    animationOut2 = anime.timeline();
    animationIn2 = null;
    miBoxOpened = !miBoxOpened;

    // move toggle
    animationOut2.add(
    {
      targets: [toggle2],
      scale: 1,
      backgroundColor: "",
      duration: 650,
    },
    "-=600"
    );

    // move sidebar
    animationOut2.add(
    {
      targets: [miBox],
      translateX: ["0%", "100%"],
      opacity: [1, 0],
      duration: 650,
    },
    "-=600"
    );
  };

  toggle2.addEventListener("click", function () {
    if (!miBoxOpened) {
      miboxAnimationIn();
    } else {
      miboxAnimationOut();
    }
  });
}
//----------------------------------------------------------------
//----------------------------------------------------------------



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



function validarSer() {
  const unidad = document.getElementById("unidadId").value;
  const servicio = document.getElementById("serviceId").value;
  const servuelta = document.getElementById("servuelta");
  let monto = document.getElementById("monto").value;
  const fecha = document.getElementById("fecha").value;
  let efectivo = document.getElementById("efectivo").value;
  let banco = document.getElementById("banco").value;
  let cpc = document.getElementById("cpc").value;
  let anticipo = document.getElementById("anticipo").value;
  let dcto = 0;

  if (unidad == 0) {
    alert("Seleccione un PD");
    return false;
  }
  if (servicio == 0) {
    alert("Seleccione un Servicio");
    return false;
  }
  if (isNaN(efectivo) || isNaN(banco) || isNaN(cpc) || isNaN(anticipo)) {
    alert("No es un número");
    return false;
  }
  if (efectivo === "") {
    efectivo = 0;
  }
  if (banco === "") {
    banco = 0;
    document.getElementById("banco").value = 0;
  }
  if (cpc === "") {
    cpc = 0;
    document.getElementById("cpc").value = 0;
  }
  if (anticipo === "") {
    anticipo = 0;
    document.getElementById("anticipo").value = 0;
  }
  if (servuelta.value === 'true') {
    let dctoFalla = document.getElementById("dctoFalla").value;
    let dctoSinietro = document.getElementById("dctoSinietro").value;
    let dctoAutoridad = document.getElementById("dctoAutoridad").value;
    const operador = document.getElementById("operadorId");
    var cpcOper = document.getElementsByName("cpcOper");
    const cobro = document.getElementById("cobrotxt");
    var selected = false;
    var selected2 = false;
    var radios2 = document.getElementsByName("catvueltId2");
    var radios = document.getElementsByName("catvueltId");

    for (var radio2 of radios2) {
      if (radio2.type === "radio" && radio2.checked) {
        selected2 = true;
      }
    }

    if (!selected2) {
      alert("Seleccione la(s) Vuelta(s) a Cancelar");
      return false;
    }

    for (var radio of radios) {
      if (radio.type === "radio" && radio.checked) {
        selected = true;
      }
    }

    if (!selected) {
      alert("Seleccione la(s) Vuelta(s) Recorridas por la Unidad (PD)");
      return false;
    }

    if (operador.value === "0") {
      alert("Seleccione un Operador");
      return false;
    }
    const deuda = operador.value.split("T")[2];
    if (isNaN(dctoFalla) || isNaN(dctoSinietro) || isNaN(dctoAutoridad)) {
      alert("No es un número");
      return false;
    }
    if (dctoFalla === "") {
      dctoFalla = 0;
    }
    if (dctoSinietro === "") {
      dctoSinietro = 0;
    }
    if (dctoAutoridad === "") {
      dctoAutoridad = 0;
    }
    for (var cpcOpe of cpcOper) {
      if (cpcOpe.checked) {
        if (cobro.value === "" || isNaN(cobro.value) || cobro.value === "0") {
          alert("Debes especificar el monto del abono a la deuda del operador");
          return false;
        }
        if (parseFloat(cobro.value) > parseFloat(deuda)) {
          alert("El cobro no puede ser mayor a saldo deudor");
          return false;
        }
      }
    }
    dcto =
    parseFloat(dctoFalla) +
    parseFloat(dctoSinietro) +
    parseFloat(dctoAutoridad);
  }
  console.log(dcto);
  let total =
  parseFloat(efectivo) +
  parseFloat(banco) +
  parseFloat(cpc) +
  parseFloat(dcto);
  monto = parseFloat(monto);
  if (monto !== total) {
    alert(
      "Debes especificar el saldo en una o varias opciones. Ej. La cuenta(monto) es 170, y deja 150 en efectivo el saldo 20 S/ debes especificarlos en una ó varias de las opciones (cpc, dcto....)"
      );
    return false;
  } else {
    return true;
  }
}

if (document.getElementById("monto")) {
  function vueltCancelar(vuelta) {
    let monto = document.getElementById("monto");
    let monto2 = document.getElementById("monto2");
    var radioscpc = document.getElementsByName("cpcIds[]");
    var radiosope = document.getElementsByName("cpcOper");
    var chMontos = document.getElementsByName("chMonto");	
    let restamonto = 0;
    let restamonto2 = 0;
    
    if (document.getElementById("tmpmonto")) {
      restamonto = document.getElementById("tmpmonto").value;
    }

    for (var radiocpc of radioscpc) {
      if (radiocpc.type === "checkbox" && radiocpc.checked) {
        radiocpc.checked = false;
      }
    }

    for (var radioope of radiosope) {
      if (radioope.type === "checkbox" && radioope.checked) {
        radioope.checked = false;
      }
    }
    for (var chMonto of chMontos) {
      if (chMonto.type === "radio" && chMonto.checked) {
        restamonto2 = chMonto.value.split("T")[1];
        monto2 = chMonto.value.split('T')[0];
      }
    }

    monto.value = monto2 * vuelta;
    monto.value = monto.value - restamonto;
    monto.value = monto.value - restamonto2;

  }

  function cuenta(cta) {
    let monto = document.getElementById("monto");
    let monto2 = document.getElementById("monto2");
    var radios = document.getElementsByName("catvueltId2");
    var radioscpc = document.getElementsByName("cpcIds[]");
    var radiosope = document.getElementsByName("cpcOper");
    const cuenta = cta.split("T")[0];
    const restamonto = cta.split("T")[1];

    if (cuenta>0) {
     for (var radio of radios) {
      if (radio.type === "radio" && radio.checked) {
        radio.checked = false;
      }
    }
    for (var radiocpc of radioscpc) {
      if (radiocpc.type === "checkbox" && radiocpc.checked) {
        radiocpc.checked = false;
      }
    }

    for (var radioope of radiosope) {
      if (radioope.type === "checkbox" && radioope.checked) {
        radioope.checked = false;
      }
    }

    monto.value = cuenta - restamonto;
  }
}


function cobrarOper(check) {
  let monto = document.getElementById("monto");
  const cobro = document.getElementById("cobrotxt");
  const operador = document.getElementById("operadorId");
  const cpc = operador.value.split("T")[2];
  var radios2 = document.getElementsByName("catvueltId2");
  var selected2 = false;

  if (operador.value === "0") {
    check.checked = false;
    return false;
  }

  if (isNaN(cobro.value) || cobro.value === "" || cobro.value === "0") {
    check.checked = false;
    return false;
  }
  for (var radio2 of radios2) {
    if (radio2.type === "radio" && radio2.checked) {
      selected2 = true;
    }
  }

  if (!selected2) {
    alert("Seleccione la(s) Vuelta(s) a Cancelar");
    check.checked = false;
    return false;
  }

  if (check.checked) {
    if (parseFloat(cobro.value) > parseFloat(cpc)) {
      alert("El cobro no puede ser mayor a saldo deudor");
      check.checked = false;
      return false;
    }
    monto.value = parseFloat(monto.value) + parseFloat(cobro.value);
  } else {
    monto.value = parseFloat(monto.value) - parseFloat(cobro.value);
  }
}

function cobrarCpc(cpc, check) {
  let monto = document.getElementById("monto");
  var radios2 = document.getElementsByName("catvueltId2");
  var selected2 = false;
  for (var radio2 of radios2) {
    if (radio2.type === "radio" && radio2.checked) {
      selected2 = true;
    }
  }

  if (!selected2) {
    alert("Seleccione la(s) Vuelta(s) a Cancelar");
    check.checked = false;
    return false;
  }

  if (check.checked) {
    monto.value = parseFloat(monto.value) + parseFloat(cpc);
  } else {
    monto.value = parseFloat(monto.value) - parseFloat(cpc);
  }
}
}

function envia(cajaId, serviceId){
  const unidadId = document.getElementById("unidadId");

  if (unidadId.value === '0') { 
    alert('Seleccione una Unidad (PD)');
    document.getElementById("serviceId").value = 0;
    return false;
  }
  
  window.location.href = '/cajas/' + cajaId + '/buses/' + unidadId.value + '/' + serviceId.value;
  
}









/*----------Ventas------------*/


function enviavta(cajaId, productoId){
  const unidadId = document.getElementById("unidadId");

  if (unidadId.value === '0') { 
    alert('Seleccione una Unidad (PD)');
    document.getElementById("productoId").value = 0;
    return false;
  }
  
  window.location.href = '/cajas/' + cajaId + '/sale/' + unidadId.value + '/' + productoId.value + '/newven';
  
}
if (document.getElementById("serviceId"))
{
  function cotizar(cotiza) {
    const servuelta = document.getElementById("servuelta");
    if (servuelta.value === 'false') { 
      let monto = document.getElementById("monto");
      var chMontos = document.getElementsByName("chMonto"); 
      let monto2 = 1;
      let dias = cotiza.value.split(",");
      dias = dias.length;
      for (var chMonto of chMontos) {
        if (chMonto.type === "radio" && chMonto.checked) {
          monto2 = chMonto.value.split('T')[0];
        }
      }

      monto.value = monto2.value * dias;
    }
  }
  
}

// CONTROLADORES

//---------------Servicios----------------------------------------------------
//---------------------------------------------------------------------------- 
function sumCot(event) {
  
  const servuelta = document.getElementById("servuelta");
  if (servuelta.value === 'false') { 

    let monto = document.getElementById("monto");
    var chMontos = document.getElementsByName("chMonto"); 
    let monto2 = 1;
    let dias = event.value.split(",");
    dias = dias.length;
    for (var chMonto of chMontos) {
      if (chMonto.type === "radio" && chMonto.checked) {
        monto2 = chMonto.value.split('T')[0];
      }
    }

    monto.value = monto2 * dias;
  }

}
  //--------------------------------------------------------------------------
//----------------------------------------------------------------------------




//---------------Ventas----------------------------------------------------
//----------------------------------------------------------------------------
const calcMontoContr = (sel) => {
  let monto = document.getElementById("monto");
  let monto2 = document.getElementById("monto2");
  var radioscpc = document.getElementsByName("cpcIds[]");
  var radiosope = document.getElementsByName("cpcOper");
  var chMontos = document.getElementsByName("chMonto"); 
  const cant = document.getElementById("cant");
  const efectivo = document.getElementById("efectivo");
  const banco = document.getElementById("banco");
  const cpc = document.getElementById("cpc");
  const anticipo = document.getElementById("lbsumaAnt");
  const dctoFalla = document.getElementById("dctoFalla");
  const dctoSinietro = document.getElementById("dctoSinietro");
  const dctoAutoridad = document.getElementById("dctoAutoridad");
  let restamonto = 0;

  if (cant.value === "" || cant.value === "0" || isNaN(cant.value)) {
    alert('Debes especificar la Cantidad');
    cant.value = 1;
    sel = 1;
  }

  if (document.getElementById("tmpmonto")) {
    restamonto = document.getElementById("tmpmonto").value;
  }

  for (var radiocpc of radioscpc) {
    if (radiocpc.type === "checkbox" && radiocpc.checked) {
      radiocpc.checked = false;
    }
  }

  for (var radioope of radiosope) {
    if (radioope.type === "checkbox" && radioope.checked) {
      radioope.checked = false;
    }
  }
  for (var chMonto of chMontos) {
    if (chMonto.type === "radio" && chMonto.checked) {
      monto2 = chMonto.value;
    }
  }

  monto.value = monto2 * sel;
  monto.value = monto.value - restamonto;
  monto.value = parseFloat(monto.value).toFixed(4);

  if (efectivo.value === "" || isNaN(efectivo.value)) {
    efectivo.value = 0;
  }
  if (banco.value === "" || isNaN(banco.value)) {
    banco.value = 0;
  }
  if (cpc.value === "" || isNaN(cpc.value)) {
    cpc.value = 0;
  }
  if (dctoFalla.value === "" || isNaN(dctoFalla.value)) {
    dctoFalla.value = 0;
  }
  if (dctoSinietro.value === "" || isNaN(dctoSinietro.value)) {
    dctoSinietro.value = 0;
  }
  if (dctoAutoridad.value === "" || isNaN(dctoAutoridad)) {
    dctoAutoridad.value = 0;
  }
  const dcto =
  parseFloat(dctoFalla.value) +
  parseFloat(dctoSinietro.value) +
  parseFloat(dctoAutoridad.value);
  const total =
  parseFloat(efectivo.value) +
  parseFloat(banco.value) +
  parseFloat(cpc.value) +
  parseFloat(anticipo.innerHTML) +
  parseFloat(dcto);
  monto = parseFloat(monto.value);
  monto = monto - total;
  document.getElementById('restaVta').innerHTML = '<br><b>Resta:'+monto.toFixed(2)+'</b>';
}


const createVentaContr = (frm) => {
 const unidad = document.getElementById("unidadId");
 const producto = document.getElementById("productoId");
 const servuelta = document.getElementById("servuelta");
 let monto = document.getElementById("monto");
 let efectivo = document.getElementById("efectivo");
 let banco = document.getElementById("banco");
 let cpc = document.getElementById("cpc");
 let anticipo = document.getElementById("lbsumaAnt");
 let dcto = 0;

 if (unidad.value == 0) {
  alert("Seleccione un PD");
  frm.preventDefault();
  return false;
}
if (producto.value == 0) {
  alert("Seleccione un Servicio");
  frm.preventDefault();
  return false;
}
if (isNaN(efectivo.value) || isNaN(banco.value) || isNaN(cpc.value)) {
  alert("No es un número");
  frm.preventDefault();
  return false;
}
if (efectivo.value === "") {
  efectivo.value = 0;
}
if (banco.value === "") {
  banco.value = 0;
}
if (cpc.value === "") {
  cpc.value = 0;
}

if (servuelta.value === 'true') {
  let dctoFalla = document.getElementById("dctoFalla");
  let dctoSinietro = document.getElementById("dctoSinietro");
  let dctoAutoridad = document.getElementById("dctoAutoridad");
  const operador = document.getElementById("operadorId");
  var cpcOper = document.getElementsByName("cpcOper");
  const cobro = document.getElementById("cobrotxt");
  var selected = false;
  var radios = document.getElementsByName("catvueltId");

  for (var radio of radios) {
    if (radio.type === "radio" && radio.checked) {
      selected = true;
    }
  }

  if (!selected) {
    alert("Seleccione la(s) Vuelta(s) Recorridas por la Unidad (PD)");
    frm.preventDefault();
    return false;
  }

  if (operador.value === "0") {
    alert("Seleccione un Operador");
    frm.preventDefault();
    return false;
  }

  const deuda = operador.value.split("T")[2];
  if (isNaN(dctoFalla.value) || isNaN(dctoSinietro.value) || isNaN(dctoAutoridad.value)) {
    alert("No es un número");
    frm.preventDefault();
    return false;
  }

  if (dctoFalla.value === "") {
    dctoFalla.value = 0;
  }
  if (dctoSinietro.value === "") {
    dctoSinietro.value = 0;
  }
  if (dctoAutoridad.value === "") {
    dctoAutoridad.value = 0;
  }
  for (var cpcOpe of cpcOper) {
    if (cpcOpe.checked) {
      if (cobro.value === "" || isNaN(cobro.value) || cobro.value === "0") {
        alert("Debes especificar el monto del abono a la deuda del operador");
        frm.preventDefault();
        return false;
      }
      if (parseFloat(cobro.value) > parseFloat(deuda)) {
        alert("El cobro no puede ser mayor a saldo deudor");
        frm.preventDefault();
        return false;
      }
    }
  }
  dcto =
  parseFloat(dctoFalla.value) +
  parseFloat(dctoSinietro.value) +
  parseFloat(dctoAutoridad.value);
}

let total =
parseFloat(efectivo.value) +
parseFloat(banco.value) +
parseFloat(cpc.value) +
parseFloat(anticipo.innerHTML) +
parseFloat(dcto);
monto = parseFloat(monto.value);
if (monto !== total) {
  alert(
    "Debes especificar el saldo en una o varias opciones. Ej. El Monto es 170, y deja 150 en efectivo el saldo 20 S/ debes especificarlos en una ó varias de las opciones (cpc, dcto....)"
    );
  frm.preventDefault();
  return false;
} else {
  return true;
}
};


const sumAntContr = (sel) => {
  const selectAnt = document.getElementById("anticipo");
  let monto = document.getElementById("monto");
  const efectivo = document.getElementById("efectivo");
  const banco = document.getElementById("banco");
  const cpc = document.getElementById("cpc");
  const anticipo = document.getElementById("lbsumaAnt");
  const dctoFalla = document.getElementById("dctoFalla");
  const dctoSinietro = document.getElementById("dctoSinietro");
  const dctoAutoridad = document.getElementById("dctoAutoridad");
  const cant = document.getElementById("cant");
  const anticSel = document.getElementById("anticSel");
  const lbselAnt = document.getElementById("lbselAnt");
  const indexAnticip = document.getElementById("indexAnticip");

  if (cant.value === "" || cant.value === "0" || isNaN(cant.value)) {
    alert('Debes especificar la Cantidad');
  } else {

    let select = false;
    let max = 0;
    let index = 0;

    let sumaAnt = 0;
    for (var i = 0; i < selectAnt.length; i++) 
    {
     var opt = selectAnt[i];
     if (opt.selected) {
      sumaAnt = sumaAnt + parseFloat(opt.value.split('T')[1]);
      if (opt.value.split('T')[0] == sel.split('T')[0]) {
        max = opt.getAttribute("data-my-id");
        select = true;  
        index = i;     
      }
    }
  }

  if (select === true) {
    max = sumaAnt - max;
    anticSel.value = selectAnt[index].value.split('T')[1];
    lbselAnt.innerHTML = selectAnt[index].text;
    indexAnticip.value = selectAnt[index].index;
  }

  if (max < monto.value) {
    document.getElementById('lbsumaAnt').innerHTML = sumaAnt.toFixed(2);
    if (efectivo.value === "" || isNaN(efectivo.value)) {
      efectivo.value = 0;
    }
    if (banco.value === "" || isNaN(banco.value)) {
      banco.value = 0;
    }
    if (cpc.value === "" || isNaN(cpc.value)) {
      cpc.value = 0;
    }
    if (dctoFalla.value === "" || isNaN(dctoFalla.value)) {
      dctoFalla.value = 0;
    }
    if (dctoSinietro.value === "" || isNaN(dctoSinietro.value)) {
      dctoSinietro.value = 0;
    }
    if (dctoAutoridad.value === "" || isNaN(dctoAutoridad)) {
      dctoAutoridad.value = 0;
    }
    const dcto =
    parseFloat(dctoFalla.value) +
    parseFloat(dctoSinietro.value) +
    parseFloat(dctoAutoridad.value);
    const total =
    parseFloat(efectivo.value) +
    parseFloat(banco.value) +
    parseFloat(cpc.value) +
    parseFloat(sumaAnt) +
    parseFloat(dcto);
    monto = parseFloat(monto.value);
    monto = monto - total;
    document.getElementById('restaVta').innerHTML = '<br><b>Resta:'+monto.toFixed(2)+'</b>';
  } else {
    selectAnt[indexAnticip.value].selected = false;
  }
} 
};

const sumEfecContr = (sel) => {
  let monto = document.getElementById("monto");
  const efectivo = document.getElementById("efectivo");
  const banco = document.getElementById("banco");
  const cpc = document.getElementById("cpc");
  const anticipo = document.getElementById("lbsumaAnt");
  const dctoFalla = document.getElementById("dctoFalla");
  const dctoSinietro = document.getElementById("dctoSinietro");
  const dctoAutoridad = document.getElementById("dctoAutoridad");

  if (efectivo.value === "" || isNaN(efectivo.value)) {
    efectivo.value = 0;
  }
  if (banco.value === "" || isNaN(banco.value)) {
    banco.value = 0;
  }
  if (cpc.value === "" || isNaN(cpc.value)) {
    cpc.value = 0;
  }
  if (dctoFalla.value === "" || isNaN(dctoFalla.value)) {
    dctoFalla.value = 0;
  }
  if (dctoSinietro.value === "" || isNaN(dctoSinietro.value)) {
    dctoSinietro.value = 0;
  }
  if (dctoAutoridad.value === "" || isNaN(dctoAutoridad)) {
    dctoAutoridad.value = 0;
  }
  const dcto =
  parseFloat(dctoFalla.value) +
  parseFloat(dctoSinietro.value) +
  parseFloat(dctoAutoridad.value);
  const total =
  parseFloat(efectivo.value) +
  parseFloat(banco.value) +
  parseFloat(cpc.value) +
  parseFloat(anticipo.innerHTML) +
  parseFloat(dcto);
  monto = parseFloat(monto.value);
  monto = monto - total;
  document.getElementById('restaVta').innerHTML = '<br><b>Resta:'+monto.toFixed(2)+'</b>';

};

const sumCpcContr = (sel) => {
  let monto = document.getElementById("monto");
  const efectivo = document.getElementById("efectivo");
  const banco = document.getElementById("banco");
  const cpc = document.getElementById("cpc");
  const anticipo = document.getElementById("lbsumaAnt");
  const dctoFalla = document.getElementById("dctoFalla");
  const dctoSinietro = document.getElementById("dctoSinietro");
  const dctoAutoridad = document.getElementById("dctoAutoridad");

  if (efectivo.value === "" || isNaN(efectivo.value)) {
    efectivo.value = 0;
  }
  if (banco.value === "" || isNaN(banco.value)) {
    banco.value = 0;
  }
  if (cpc.value === "" || isNaN(cpc.value)) {
    cpc.value = 0;
  }
  if (dctoFalla.value === "" || isNaN(dctoFalla.value)) {
    dctoFalla.value = 0;
  }
  if (dctoSinietro.value === "" || isNaN(dctoSinietro.value)) {
    dctoSinietro.value = 0;
  }
  if (dctoAutoridad.value === "" || isNaN(dctoAutoridad)) {
    dctoAutoridad.value = 0;
  }
  const dcto =
  parseFloat(dctoFalla.value) +
  parseFloat(dctoSinietro.value) +
  parseFloat(dctoAutoridad.value);
  const total =
  parseFloat(efectivo.value) +
  parseFloat(banco.value) +
  parseFloat(cpc.value) +
  parseFloat(anticipo.innerHTML) +
  parseFloat(dcto);
  monto = parseFloat(monto.value);
  monto = monto - total;
  document.getElementById('restaVta').innerHTML = '<br><b>Resta:'+monto.toFixed(2)+'</b>';

};

const sumBancoContr = (sel) => {
  let monto = document.getElementById("monto");
  const efectivo = document.getElementById("efectivo");
  const banco = document.getElementById("banco");
  const cpc = document.getElementById("cpc");
  const anticipo = document.getElementById("lbsumaAnt");
  const dctoFalla = document.getElementById("dctoFalla");
  const dctoSinietro = document.getElementById("dctoSinietro");
  const dctoAutoridad = document.getElementById("dctoAutoridad");

  if (efectivo.value === "" || isNaN(efectivo.value)) {
    efectivo.value = 0;
  }
  if (banco.value === "" || isNaN(banco.value)) {
    banco.value = 0;
  }
  if (cpc.value === "" || isNaN(cpc.value)) {
    cpc.value = 0;
  }
  if (dctoFalla.value === "" || isNaN(dctoFalla.value)) {
    dctoFalla.value = 0;
  }
  if (dctoSinietro.value === "" || isNaN(dctoSinietro.value)) {
    dctoSinietro.value = 0;
  }
  if (dctoAutoridad.value === "" || isNaN(dctoAutoridad)) {
    dctoAutoridad.value = 0;
  }
  const dcto =
  parseFloat(dctoFalla.value) +
  parseFloat(dctoSinietro.value) +
  parseFloat(dctoAutoridad.value);
  const total =
  parseFloat(efectivo.value) +
  parseFloat(banco.value) +
  parseFloat(cpc.value) +
  parseFloat(anticipo.innerHTML) +
  parseFloat(dcto);
  monto = parseFloat(monto.value);
  monto = monto - total;
  document.getElementById('restaVta').innerHTML = '<br><b>Resta:'+monto.toFixed(2)+'</b>';

};

const sumFallContr = (sel) => {
  let monto = document.getElementById("monto");
  const efectivo = document.getElementById("efectivo");
  const banco = document.getElementById("banco");
  const cpc = document.getElementById("cpc");
  const anticipo = document.getElementById("lbsumaAnt");
  const dctoFalla = document.getElementById("dctoFalla");
  const dctoSinietro = document.getElementById("dctoSinietro");
  const dctoAutoridad = document.getElementById("dctoAutoridad");

  if (efectivo.value === "" || isNaN(efectivo.value)) {
    efectivo.value = 0;
  }
  if (banco.value === "" || isNaN(banco.value)) {
    banco.value = 0;
  }
  if (cpc.value === "" || isNaN(cpc.value)) {
    cpc.value = 0;
  }
  if (dctoFalla.value === "" || isNaN(dctoFalla.value)) {
    dctoFalla.value = 0;
  }
  if (dctoSinietro.value === "" || isNaN(dctoSinietro.value)) {
    dctoSinietro.value = 0;
  }
  if (dctoAutoridad.value === "" || isNaN(dctoAutoridad)) {
    dctoAutoridad.value = 0;
  }
  const dcto =
  parseFloat(dctoFalla.value) +
  parseFloat(dctoSinietro.value) +
  parseFloat(dctoAutoridad.value);
  const total =
  parseFloat(efectivo.value) +
  parseFloat(banco.value) +
  parseFloat(cpc.value) +
  parseFloat(anticipo.innerHTML) +
  parseFloat(dcto);
  monto = parseFloat(monto.value);
  monto = monto - total;
  document.getElementById('restaVta').innerHTML = '<br><b>Resta:'+monto.toFixed(2)+'</b>';

};

const sumSinContr = (sel) => {
  let monto = document.getElementById("monto");
  const efectivo = document.getElementById("efectivo");
  const banco = document.getElementById("banco");
  const cpc = document.getElementById("cpc");
  const anticipo = document.getElementById("lbsumaAnt");
  const dctoFalla = document.getElementById("dctoFalla");
  const dctoSinietro = document.getElementById("dctoSinietro");
  const dctoAutoridad = document.getElementById("dctoAutoridad");

  if (efectivo.value === "" || isNaN(efectivo.value)) {
    efectivo.value = 0;
  }
  if (banco.value === "" || isNaN(banco.value)) {
    banco.value = 0;
  }
  if (cpc.value === "" || isNaN(cpc.value)) {
    cpc.value = 0;
  }
  if (dctoFalla.value === "" || isNaN(dctoFalla.value)) {
    dctoFalla.value = 0;
  }
  if (dctoSinietro.value === "" || isNaN(dctoSinietro.value)) {
    dctoSinietro.value = 0;
  }
  if (dctoAutoridad.value === "" || isNaN(dctoAutoridad)) {
    dctoAutoridad.value = 0;
  }
  const dcto =
  parseFloat(dctoFalla.value) +
  parseFloat(dctoSinietro.value) +
  parseFloat(dctoAutoridad.value);
  const total =
  parseFloat(efectivo.value) +
  parseFloat(banco.value) +
  parseFloat(cpc.value) +
  parseFloat(anticipo.innerHTML) +
  parseFloat(dcto);
  monto = parseFloat(monto.value);
  monto = monto - total;
  document.getElementById('restaVta').innerHTML = '<br><b>Resta:'+monto.toFixed(2)+'</b>';

};

const sumAutContr = (sel) => {
  let monto = document.getElementById("monto");
  const efectivo = document.getElementById("efectivo");
  const banco = document.getElementById("banco");
  const cpc = document.getElementById("cpc");
  const anticipo = document.getElementById("lbsumaAnt");
  const dctoFalla = document.getElementById("dctoFalla");
  const dctoSinietro = document.getElementById("dctoSinietro");
  const dctoAutoridad = document.getElementById("dctoAutoridad");

  if (efectivo.value === "" || isNaN(efectivo.value)) {
    efectivo.value = 0;
  }
  if (banco.value === "" || isNaN(banco.value)) {
    banco.value = 0;
  }
  if (cpc.value === "" || isNaN(cpc.value)) {
    cpc.value = 0;
  }
  if (dctoFalla.value === "" || isNaN(dctoFalla.value)) {
    dctoFalla.value = 0;
  }
  if (dctoSinietro.value === "" || isNaN(dctoSinietro.value)) {
    dctoSinietro.value = 0;
  }
  if (dctoAutoridad.value === "" || isNaN(dctoAutoridad)) {
    dctoAutoridad.value = 0;
  }
  const dcto =
  parseFloat(dctoFalla.value) +
  parseFloat(dctoSinietro.value) +
  parseFloat(dctoAutoridad.value);
  const total =
  parseFloat(efectivo.value) +
  parseFloat(banco.value) +
  parseFloat(cpc.value) +
  parseFloat(anticipo.innerHTML) +
  parseFloat(dcto);
  monto = parseFloat(monto.value);
  monto = monto - total;
  document.getElementById('restaVta').innerHTML = '<br><b>Resta:'+monto.toFixed(2)+'</b>';

};


const modAntContr = () => {
  const selectAnt = document.getElementById("anticipo");
  let monto = document.getElementById("monto");
  const efectivo = document.getElementById("efectivo");
  const banco = document.getElementById("banco");
  const cpc = document.getElementById("cpc");
  const anticipo = document.getElementById("lbsumaAnt");
  const dctoFalla = document.getElementById("dctoFalla");
  const dctoSinietro = document.getElementById("dctoSinietro");
  const dctoAutoridad = document.getElementById("dctoAutoridad");
  const cant = document.getElementById("cant");
  const lbselAnt = document.getElementById("lbselAnt");
  const indexAnticip = document.getElementById("indexAnticip");
  const anticSel = document.getElementById("anticSel");


  if (parseFloat(anticSel.value) < parseFloat(selectAnt[indexAnticip.value].value.split('T')[1])) {

    const id = selectAnt[indexAnticip.value].value.split('T')[0];
    selectAnt[indexAnticip.value].value = id+'T'+anticSel.value;
    selectAnt[indexAnticip.value].text = selectAnt[indexAnticip.value].text+' Apli:'+anticSel.value;
    selectAnt[indexAnticip.value].getAttribute("data-my-id") = anticSel.value;
/*
  if (cant.value === "" || cant.value === "0" || isNaN(cant.value)) {
    alert('Debes especificar la Cantidad');
  } else {

  let select = false;
  let max = 0;
  let index = 0;
  
  let sumaAnt = 0;
  for (var i = 0; i < selectAnt.length; i++) 
  {
   var opt = selectAnt[i];
   if (opt.selected) {
    sumaAnt = sumaAnt + parseFloat(opt.getAttribute("data-my-id"));
    if (opt.value.split('T')[0] == sel.split('T')[0]) {
      max = opt.getAttribute("data-my-id");
      select = true;  
      index = i;     
    }
  }
}

if (select === true) {
  max = sumaAnt - max;
  anticSel.value = selectAnt[index].value.split('T')[1];
  lbselAnt.innerHTML = selectAnt[index].text;
}

if (max < monto.value) {
  document.getElementById('lbsumaAnt').innerHTML = sumaAnt;
  if (efectivo.value === "" || isNaN(efectivo.value)) {
    efectivo.value = 0;
  }
  if (banco.value === "" || isNaN(banco.value)) {
    banco.value = 0;
  }
  if (cpc.value === "" || isNaN(cpc.value)) {
    cpc.value = 0;
  }
  if (dctoFalla.value === "" || isNaN(dctoFalla.value)) {
    dctoFalla.value = 0;
  }
  if (dctoSinietro.value === "" || isNaN(dctoSinietro.value)) {
    dctoSinietro.value = 0;
  }
  if (dctoAutoridad.value === "" || isNaN(dctoAutoridad)) {
    dctoAutoridad.value = 0;
  }
  const dcto =
  parseFloat(dctoFalla.value) +
  parseFloat(dctoSinietro.value) +
  parseFloat(dctoAutoridad.value);
  const total =
  parseFloat(efectivo.value) +
  parseFloat(banco.value) +
  parseFloat(cpc.value) +
  parseFloat(sumaAnt) +
  parseFloat(dcto);
  monto = parseFloat(monto.value);
  monto = monto - total;
  document.getElementById('restaVta').innerHTML = 'Resta:'+monto.toFixed(2);
} else {
  selectAnt[index].selected = false;
}
}*/
}
};

const cobrarOperVtaContr = (check) => {
  let monto = document.getElementById("monto");
  const cobro = document.getElementById("cobrotxt");
  const operador = document.getElementById("operadorId");
  const radiosope = document.getElementsByName("cpcOper");
  const cpc = operador.value.split("T")[2];
  let selected = false;

  for (var radioope of radiosope) {
    if (radioope.type === "checkbox" && radioope.checked) {
      selected = true;
    }
  }

  if (operador.value === "0") {
    selected = false;
  }

  if (isNaN(cobro.value) || cobro.value === "" || cobro.value === "0") {
    cobro.value = 0;
    selected = false;
  }
  
  if (selected === true) {
    if (parseFloat(cobro.value) > parseFloat(cpc)) {
      alert("El cobro no puede ser mayor a saldo deudor");
    } else {
      monto.value = parseFloat(monto.value) + parseFloat(cobro.value);
    }
  } else {
    monto.value = parseFloat(monto.value) - parseFloat(cobro.value);
    for (var radioope of radiosope) {
      if (radioope.type === "checkbox" && radioope.checked) {
        radioope.checked = false;
      }
    }
  }
}


//--------------------------------------------------------------------
//--------------------------------------------------------------------



//-----------------------GASTOS OPE--------------------------------
//--------------------------------------------------------------------

const items = document.querySelector('.items');

const addProductoContr = () => {
 const cantidad = document.getElementById('cant');
 const precio = document.getElementById('precio');
 const unidad =document.getElementById('unidadId');
 const producto =document.getElementById('reproductoId');

 if (unidad.value == 0) {
  alert("Seleccione un PD");
  return false;
}
if (producto.value == 0) {
  alert("Seleccione un Producto");
  return false;
}

if (cantidad.value === '' || cantidad.value === 0 || isNaN(cantidad.value)) {
  alert('Agregue la Cantidad');
} else if (precio.value === '' || precio.value === 0 || isNaN(precio.value)) {
  alert('Agregue el Precio');
} else {

  const itemContainer = document.createElement('div');
  itemContainer.className = 'row item';

  itemContainer.innerHTML += createDomElement();
  items.append(itemContainer);
  itemContainer
  .querySelector('.buttonDelete')
  .addEventListener('click', removeItem);
  updateTotal();
}

}

const createDomElement = () => {
  const producto =document.getElementById('reproductoId');
  const indiceP = producto.selectedIndex;
  const opcionSeleccionadaP = producto.options[indiceP];
  const unidad =document.getElementById('unidadId');
  const indiceU = unidad.selectedIndex;
  const opcionSeleccionadaU = unidad.options[indiceU];
  const cantidad = document.getElementById('cant');
  const precio = document.getElementById('precio');

  const itemHtml = `
  <div class="col-2">
  <p class='unidad' data-id='${opcionSeleccionadaU.value}'> ${opcionSeleccionadaU.text} </p>
  </div>
  <div class="col-6">
  <p class='producto' data-id='${opcionSeleccionadaP.value}'> ${opcionSeleccionadaP.text} </p>
  </div>
  <div class="col-2">
  <p class='precio'> ${precio.value} </p>
  </div>
  <div class="col-1">
  <p class="cantidad">${cantidad.value}</p>
  </div>
  <div class="col-1">
<button class="buttonDelete" type="button">x</button>
</div>
  `;
  return itemHtml;
  
}

const updateTotal = () => {
  let total = 0;
  
  const totalSel = document.querySelector('.total');

  const Items = document.querySelectorAll('.item');

  Items.forEach((Item) => {
   const unidadElement = Item.querySelector(
    '.unidad'
    );

   const unidad = Number(
    unidadElement.getAttribute("data-id")
    );

   const productoElement = Item.querySelector(
    '.producto'
    );

   const producto = Number(
    productoElement.getAttribute("data-id")
    );

   const precioElement = Item.querySelector(
    '.precio'
    );
   const precio = Number(
    precioElement.textContent
    );

   const cantidadElement = Item.querySelector(
    '.cantidad'
    );
   const cantidad = Number(
    cantidadElement.textContent
    );
   total = total + precio * cantidad;

 });
  totalSel.innerHTML = `${total.toFixed(2)}S/`;
}

function removeItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.item').remove();
  updateTotal();
}

const createBusGastoContr = (frm) => {
  const unidad = document.getElementById('unidadId');
  const proveedor = document.getElementById('proveedorId');
  const tipoPago = document.getElementById('tipoPago');
  const doc = document.getElementById('doc');
  const abonado = document.getElementById('abonado');
  const Items = document.querySelectorAll('.item');

  let productos = [];
  let total = 0;

  if (unidad.value == 0) {
    alert("Seleccione un PD");
    return false;
  }

  if (tipoPago.value == 0) {
    alert("Seleccione un Tipo de Pago");
    return false;
  }

  if (doc.value == '') {
    alert("Doc no puede estar vacío");
    return false;
  }  

  if (abonado.value == '' || isNaN(abonado.value)) {
    abonado.value = 0;
  }  


  Items.forEach((Item) => {
   const unidadElement = Item.querySelector(
    '.unidad'
    );

   const unidad = Number(
    unidadElement.getAttribute("data-id")
    );

   const productoElement = Item.querySelector(
    '.producto'
    );

   const producto = Number(
    productoElement.getAttribute("data-id")
    );

   const precioElement = Item.querySelector(
    '.precio'
    );
   const precio = Number(
    precioElement.textContent
    );

   const cantidadElement = Item.querySelector(
    '.cantidad'
    );
   const cantidad = Number(
    cantidadElement.textContent
    );

   const productoObj = {
    costoUni: precio,
    cant: cantidad,
    reproductoId: producto,
    unidadId: unidad,
  };

  productos.push(productoObj);
  total = total + precio * cantidad;
});

  if (JSON.stringify(productos) === '[]'){
    alert("Agregue los productos");
    return false;
  }

  const busgastoObj = {
    monto: total,
    doc: doc.value,
    tipoPago: tipoPago.value,
    abonado: abonado.value,
    proveedor: proveedor.value,
    productos: productos,
  }

  postData('http://localhost:3000/cajas/1/busgastos',  busgastoObj);

}

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

function printData(data) {
  const cajaId = document.getElementById('cajaId');
  let overlay_content = document.querySelector('.overlay_content');
  let overlaySpinner = document.querySelector('.overlay_spinner');
  let overlay = document.querySelector('.overlay');
  
  overlaySpinner.classList.remove('opened');

  overlay_content.innerHTML = data.gasto;

  window.location.href = `/cajas/${cajaId.value}/busgastos`;

}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------











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
})

document.addEventListener('submit', ev => {
  if (matchEvent(ev, '.formVenta')) createVentaContr (ev);
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
})



