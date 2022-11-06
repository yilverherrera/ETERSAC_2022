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
const diff = monto - total;
if (diff > -0.5 && diff < 0.1 ) {
  return true;
} else {
  alert(
    "Debes especificar el saldo en una o varias opciones. Ej. El Monto es 170, y deja 150 en efectivo el saldo 20 S/ debes especificarlos en una ó varias de las opciones (cpc, dcto....)"
    );
  frm.preventDefault();
  return false;
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


