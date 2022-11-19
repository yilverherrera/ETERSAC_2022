const calcMontoContr = (sel) => {
  let monto = document.getElementById("monto");
  let monto2 = document.getElementById("monto2");
  var chMontos = document.getElementsByName("chMonto"); 
  const cant = document.getElementById("cant");
  let overlay = document.querySelector('.overlay');
  let overlay_content = document.querySelector('.overlay_content');
  overlay_content.innerHTML = '';
  let restamonto = 0;
  let total = 0;

  if (cant.value === "" || cant.value === "0" || isNaN(cant.value)) {
     overlay.classList.add('opened');

    overlay_content.innerHTML += `
    <img align="top" width="20px" height="20px" src="/assets/img/eleccion.png">
    <div class="row">
    <div class="col-12">
    Debes especificar la Cantidad
    </div>
    
    </div>`;
    overlay_content.innerHTML += `<button class="button_secundario cancelarOverlay" type="button">Cerrar</button>`;
    return false;
    cant.value = 1;
    sel = 1;
  }

  if (document.getElementById("tmpmonto")) {
    restamonto = document.getElementById("tmpmonto").value;
  }
  
  if (document.getElementsByName("cpcIds[]")){
    var radioscpc = document.getElementsByName("cpcIds[]");
  for (var radiocpc of radioscpc) {
    if (radiocpc.type === "checkbox" && radiocpc.checked) {
      radiocpc.checked = false;
    }
  }
}
  if (document.getElementsByName("cpcOper")){
    var radiosope = document.getElementsByName("cpcOper");
  for (var radioope of radiosope) {
    if (radioope.type === "checkbox" && radioope.checked) {
      radioope.checked = false;
    }
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

  
  [...document.querySelectorAll("input[type=number]")].forEach(el => {

    el.classList.remove("error");

    if (el.value=="") {

      el.classList.add("error");
      return false;

    }
    total += parseFloat(el.value);

  });
  if (document.getElementById("lbsumaAnt")){
    const anticipo = document.getElementById("lbsumaAnt");
  total += parseFloat(anticipo.innerHTML);
}

  monto = parseFloat(monto.value);
  monto = monto - total;
  document.getElementById('restaVta').innerHTML = '<br><b>Resta:'+monto.toFixed(2)+'</b>';
}


const createVentaContr = (frm) => {
 const servuelta = document.getElementById("servuelta");
 let monto = document.getElementById("monto");
 const cant = document.getElementById("cant");
 let overlay = document.querySelector('.overlay');
  let overlay_content = document.querySelector('.overlay_content');
  overlay_content.innerHTML = '';
 let dcto = 0;
 let total = 0;

 if (cant.value === "" || cant.value === "0" || isNaN(cant.value)) {
     overlay.classList.add('opened');

    overlay_content.innerHTML += `
    <img align="top" width="20px" height="20px" src="/assets/img/eleccion.png">
    <div class="row">
    <div class="col-12">
    Debes especificar la Cantidad
    </div>
    
    </div>`;
    overlay_content.innerHTML += `<button class="button_secundario cancelarOverlay" type="button">Cerrar</button>`;
    frm.preventDefault();
    return false;
    cant.value = 1;
  }

 if (servuelta.value === 'true') {
  const anticipo = document.getElementById("lbsumaAnt");
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
    overlay.classList.add('opened');

      overlay_content.innerHTML += `
      <img align="top" width="20px" height="20px" src="/assets/img/eleccion.png">
      <div class="row">
      <div class="col-12">
      Seleccione la(s) Vuelta(s) Recorridas por la Unidad (PD)
      </div>

      </div>`;
      overlay_content.innerHTML += `<button class="button_secundario cancelarOverlay" type="button">Cerrar</button>`;
      frm.preventDefault();
      return false;
  }

  const deuda = operador.value.split("T")[2];

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
  total += parseFloat(anticipo.innerHTML);
}

[...document.querySelectorAll("input[type=number]")].forEach(el => {

  el.classList.remove("error");

  if (el.value=="") {

    el.classList.add("error");
    return false;

  }
  total += parseFloat(el.value);

});


monto = parseFloat(monto.value);
const diff = monto - total;
if (diff > -0.5 && diff < 0.2 ) {
  return true;
} else {
   overlay.classList.add('opened');

    overlay_content.innerHTML += `
    <img align="top" width="20px" height="20px" src="/assets/img/eleccion.png">
    <div class="row">
    <div class="col-12">
    Debes especificar el saldo en una o varias opciones. Ej. La venta(monto) es 170, y paga 150 en efectivo el saldo 20 S/ debes especificarlos en una ó varias de las opciones (cpc, dcto....)
    </div>
    
    </div>`;
    overlay_content.innerHTML += `<button class="button_secundario cancelarOverlay" type="button">Cerrar</button>`;
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
  let overlay = document.querySelector('.overlay');
  let overlay_content = document.querySelector('.overlay_content');
  overlay_content.innerHTML = '';

  if (cant.value === "" || cant.value === "0" || isNaN(cant.value)) {
     overlay.classList.add('opened');

    overlay_content.innerHTML += `
    <img align="top" width="20px" height="20px" src="/assets/img/eleccion.png">
    <div class="row">
    <div class="col-12">
    Debes especificar la Cantidad
    </div>
    
    </div>`;
    overlay_content.innerHTML += `<button class="button_secundario cancelarOverlay" type="button">Cerrar</button>`;
    return false;
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


