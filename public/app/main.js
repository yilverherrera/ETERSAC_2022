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

main.addEventListener("click", function () {
  if (sidebarOpened) {
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
 
if (document.getElementById("unidadId")) {
  
  $(document).ready(function () {
   
    $("#unidadId").select2();
  });
  
  $(document).on("select2:open", () => {
  document.querySelector(".select2-container--open .select2-search__field").focus()
});
 
   const service = document.getElementById("serviceId");
 if (parseInt(service.value) === 1) { 
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

if (document.getElementById("operadorId")) {
  $(document).ready(function () {
    $("#operadorId").select2();
  });
}


function validarSer() {
  const unidad = document.getElementById("unidadId").value;
  const servicio = document.getElementById("serviceId").value;
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
  if (servicio === "1") {
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
    parseFloat(anticipo) +
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
        restamonto = restamonto + chMonto.value.split("T")[1];
	 monto2 = chMonto.value.split('T')[0];
      }
    }
    monto.value = monto2 * vuelta;
    monto.value = monto.value - restamonto;
  }

 function cuenta(cta) {
    let monto = document.getElementById("monto");
    let monto2 = document.getElementById("monto2");
    var radios = document.getElementsByName("catvueltId2");
    var radioscpc = document.getElementsByName("cpcIds[]");
    var radiosope = document.getElementsByName("cpcOper");
    const cuenta = cta.split("T")[0];
    const restamonto = cta.split("T")[1];

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
if (document.getElementById("serviceId"))
    {
    function cotizar(cotiza) {
  let service = document.getElementById("serviceId");
  if (parseInt(service.value)>1) {
  let monto = document.getElementById("monto");
    let monto2 = document.getElementById("monto2");
  let dias = cotiza.value.split(",");
  dias = dias.length;
  
  monto.value = monto2.value * dias;
  }
  }
  
}


