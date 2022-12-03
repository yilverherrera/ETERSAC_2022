//-----------------Show Monitor----------
let montoTotalIng = 0;
let montoTotalEgr = 0;
const monitorContr = (ev) => {
  const fecha = document.querySelector('.fechaMonitor');
  if (fecha.value === "") { return false; }
  
  getDataMonitor(fecha.value);
}

function getDataMonitor(fecha) {
  let overlaySpinner = document.querySelector('.overlay_spinner');
  let overlay = document.querySelector('.overlay_max');  
  overlaySpinner.classList.add('opened');


  fetch(`${serverUrl}monitors?fecha=${fecha}`)
  .then((res) => res.json())
  .then((data) => {
    printDataMonitor(data, fecha);
    overlay.classList.add('opened');
    overlaySpinner.classList.remove('opened');
  });
  
}

function printDataMonitor(data, fecha) {
  let overlay_content = document.querySelector('.overlay_content_max');
  overlay_content.innerHTML = '';
  if (data.message === undefined){
   overlay_content.innerHTML += `
   <span class="buttonDelete Close cancelarOverlaymax cursorpointer">X</span>
   <br>
      <span><b>Fecha:${fecha}</b></span>
      `;     
    data.groups.forEach((grupo) => {


const itemContainer = document.createElement('div');
  itemContainer.className = 'item';
  itemContainer.setAttribute('data-id' , grupo.nombre); 
  itemContainer.innerHTML += createDomGroup(data, grupo);
  overlay_content.append(itemContainer);
   });  

  //-----------------Servicios No Vueltas
    data.serviciosNoVltas.forEach((servNoVlt) => {
      overlay_content.innerHTML += `<div class="row">
      <div class="col-12">
      <b>${servNoVlt.nombre}</b>
      </div>
      </div>`; 
      overlay_content.innerHTML += `<div class="row">
      <div class="col-2">
      Autor
      </div>
      <div class="col-8">
      Detalle
      </div>
      <div class="col-2">
      Monto
      </div>
      </div>`;
      let montoSer = 0;
      data.cajas.forEach((caja) => {
        let detalle = '';
        let monto = 0;

        const servbCaja = data.servbus.filter((serv) => serv.cajaId === caja.id && serv.serviceId === servNoVlt.id);
        if (JSON.stringify(servbCaja) !== '[]'){
          servbCaja.forEach((sevCa) => {
            monto += sevCa.efectivo;
            detalle += `${sevCa.pertUniSer.placa}(${sevCa.efectivo})(${sevCa.fecha}), `;
          });
          overlay_content.innerHTML += `<div class="row">
          <div class="col-2">
          ${caja.author.username}
          </div>
          <div class="col-8">
          ${detalle}
          </div>
          <div class="col-2">
          ${monto}
          </div>
          </div>`; 
          montoSer += monto;
        }
      });
      montoTotalIng += montoSer;
      overlay_content.innerHTML += `<div class="row">

      <div class="col-10">

      </div>
      <div class="col-2">
      ${montoSer}
      </div>
      </div>`; 
      overlay_content.innerHTML += `<br>`
    });
  //-----------------------------------------------------------------

  //-----------------Ventas No Vueltas
    data.productosNoVltas.forEach((prodNoVlt) => {
      overlay_content.innerHTML += `<div class="row">
      <div class="col-12">
      <b>${prodNoVlt.nombre}</b>
      </div>
      </div>`; 
      overlay_content.innerHTML += `<div class="row">
      <div class="col-2">
      Autor
      </div>
      <div class="col-8">
      Detalle
      </div>
      <div class="col-2">
      Monto
      </div>
      </div>`;
      let montoVen = 0;
      data.cajas.forEach((caja) => {
        let detalle = '';
        let monto = 0;

        const ventCaja = data.vents.filter((vta) => vta.cajaId === caja.id && vta.productoId === prodNoVlt.id);
        if (JSON.stringify(ventCaja) !== '[]'){
          ventCaja.forEach((vtaCa) => {
            monto += vtaCa.efectivo;
            detalle += `${vtaCa.pertUniVen.placa}(${vtaCa.efectivo})(${vtaCa.fecha}), `;
          });
          overlay_content.innerHTML += `<div class="row">
          <div class="col-2">
          ${caja.author.username}
          </div>
          <div class="col-8">
          ${detalle}
          </div>
          <div class="col-2">
          ${monto}
          </div>
          </div>`; 
          montoVen += monto;
        }
      });
      montoTotalIng += montoVen;
      overlay_content.innerHTML += `<div class="row">

      <div class="col-10">

      </div>
      <div class="col-2">
      ${montoVen}
      </div>
      </div>`; 
      overlay_content.innerHTML += `<br>`
    });
  //-----------------------------------------------------------------

  //-----------------Cobros ServBus No Vueltas

    overlay_content.innerHTML += `<div class="row">
    <div class="col-12">
    <b>Cobros de CPC de Servicios</b>
    </div>
    </div>`; 
    overlay_content.innerHTML += `<div class="row">
    <div class="col-2">
    Autor
    </div>
    <div class="col-8">
    Detalle
    </div>
    <div class="col-2">
    Monto
    </div>
    </div>`;
    let montoCobro = 0;
    data.cajas.forEach((caja) => {
      let detalle = '';
      let monto = 0;

      const cobroCaja = data.cobrosServbus.filter((cobro) => cobro.cajaId === caja.id);
      if (JSON.stringify(cobroCaja) !== '[]'){
        cobroCaja.forEach((cobCa) => {
          monto += cobCa.monto;
          detalle += `CPC:${cobCa.pertServCob.pertSerSer.nombre} ${cobCa.pertServCob.pertUniSer.placa} ${cobCa.pertServCob.pertOpeSer.nombre} ${cobCa.pertServCob.pertOpeSer.apellido} ${cobCa.pertServCob.fecha} Abono:(${cobCa.monto}),  `;
        });
        overlay_content.innerHTML += `<div class="row">
        <div class="col-2">
        ${caja.author.username}
        </div>
        <div class="col-8">
        ${detalle}
        </div>
        <div class="col-2">
        ${monto}
        </div>
        </div>`; 
        montoCobro += monto;
      }
    });
    montoTotalIng += montoCobro;
    overlay_content.innerHTML += `<div class="row">

    <div class="col-10">
    
    </div>
    <div class="col-2">
    ${montoCobro}
    </div>
    </div>`; 
    overlay_content.innerHTML += `<br>`

  //-----------------------------------------------------------------

  //-----------------Cobros Vents No Vueltas

    overlay_content.innerHTML += `<div class="row">
    <div class="col-12">
    <b>Cobros de CPC de Ventas</b>
    </div>
    </div>`; 
    overlay_content.innerHTML += `<div class="row">
    <div class="col-2">
    Autor
    </div>
    <div class="col-8">
    Detalle
    </div>
    <div class="col-2">
    Monto
    </div>
    </div>`;
    montoCobro = 0;
    data.cajas.forEach((caja) => {
      let detalle = '';
      let monto = 0;

      const cobroCaja = data.cobrosVents.filter((cobro) => cobro.cajaId === caja.id);
      if (JSON.stringify(cobroCaja) !== '[]'){
        cobroCaja.forEach((cobCa) => {
          monto += cobCa.monto;
          detalle += `CPC:${cobCa.pertVenCob.pertProVen.nombre} ${cobCa.pertVenCob.pertUniVen.placa} ${cobCa.pertVenCob.pertOpeVen.nombre} ${cobCa.pertVenCob.pertOpeVen.apellido} ${cobCa.pertVenCob.fecha} Abono:(${cobCa.monto}),  `;
        });
        overlay_content.innerHTML += `<div class="row">
        <div class="col-2">
        ${caja.author.username}
        </div>
        <div class="col-8">
        ${detalle}
        </div>
        <div class="col-2">
        ${monto}
        </div>
        </div>`; 
        montoCobro += monto;
      }
    });
    montoTotalIng += montoCobro;
    overlay_content.innerHTML += `<div class="row">

    <div class="col-10">
    
    </div>
    <div class="col-2">
    ${montoCobro}
    </div>
    </div>`; 
    overlay_content.innerHTML += `<br>`

  //-----------------------------------------------------------------

 //-----------------Bus Gastos No Vueltas

    overlay_content.innerHTML += `<div class="row">
    <div class="col-12">
    <b>Gastos Operativos de Mant. de Buses</b>
    </div>
    </div>`; 
    

    data.groups.forEach((group) => {
     montoBusgastos = 0;
     overlay_content.innerHTML += `<div class="row">
     <div class="col-12">
     ${group.nombre}
     </div>

     </div>`;      
     overlay_content.innerHTML += `<div class="row">
     <div class="col-1">
     Doc
     </div>
     <div class="col-1">
     Tipo de Pago
     </div>
     <div class="col-8">
     Detalle
     </div>
     <div class="col-1">
     Total
     </div>
     <div class="col-1">
     Abonado
     </div>
     </div>`;
     data.busgastos.forEach((busgasto) => {
      const busgastosDetalle = busgasto.detbusgastos.filter((bus) => group.unidads.includes(bus.unidadId));
      if (JSON.stringify(busgastosDetalle) !== '[]'){
        let detalle = '';
        let total = 0;
        busgastosDetalle.forEach((busCa) => {   
          detalle += `Pd:${busCa.pertUniDbg.codigo}-${busCa.pertUniDbg.placa} ${busCa.pertProDbg.nombre} Cant:${busCa.cant} Costo Uni:${busCa.costoUni}, `;
          total += busCa.total;
        })

        overlay_content.innerHTML += `<div class="row">
        <div class="col-1">
        ${busgasto.doc}
        </div>
        <div class="col-1">
        ${busgasto.tipoPago}
        </div>
        <div class="col-8">
        ${detalle} Autor:${busgasto.pertCajBug.author.username}
        </div>
        <div class="col-1">
        ${total}
        </div>
        <div class="col-1">
        ${busgasto.abonado}
        </div>
        </div>`; 
        montoBusgastos += busgasto.abonado;
      }
    })
     montoTotalEgr += montoBusgastos;
     overlay_content.innerHTML += `<div class="row">
     
     <div class="col-11">

     </div>
     <div class="col-1">
     ${montoBusgastos}
     </div>
     </div>`; 
     overlay_content.innerHTML += `<br>`


   });

  //-----------------------------------------------------------------    

 //-----------------Gastos Adm No Vueltas

    overlay_content.innerHTML += `<div class="row">
    <div class="col-12">
    <b>Gastos Administrativos</b>
    </div>
    </div>`; 
    overlay_content.innerHTML += `<div class="row">
    <div class="col-2">
    Autor
    </div>
    <div class="col-8">
    Detalle
    </div>
    <div class="col-2">
    Monto
    </div>
    </div>`;
    montoAdm = 0;
    data.cajas.forEach((caja) => {
      let detalle = '';
      let monto = 0;

      const admCaja = data.admgastos.filter((adm) => adm.cajaId === caja.id);
      if (JSON.stringify(admCaja) !== '[]'){
        admCaja.forEach((admCa) => {
          monto += admCa.monto;
          detalle += `${admCa.pertCatAdm.nombre} Monto:(${admCa.monto}),  `;
        });
        overlay_content.innerHTML += `<div class="row">
        <div class="col-2">
        ${caja.author.username}
        </div>
        <div class="col-8">
        ${detalle}
        </div>
        <div class="col-2">
        ${monto}
        </div>
        </div>`; 
        montoAdm += monto;
      }
    });
    montoTotalEgr += montoAdm;
    overlay_content.innerHTML += `<div class="row">

    <div class="col-10">
    
    </div>
    <div class="col-2">
    ${montoAdm}
    </div>
    </div>`; 
    overlay_content.innerHTML += `<br>`

  //-----------------------------------------------------------------

    //-----------------Pagos a Proveedores No Vueltas

    overlay_content.innerHTML += `<div class="row">
    <div class="col-12">
    <b>Pagos a Proveedores</b>
    </div>
    </div>`; 
    overlay_content.innerHTML += `<div class="row">
    <div class="col-2">
    Autor
    </div>
    <div class="col-8">
    Detalle
    </div>
    <div class="col-2">
    Monto
    </div>
    </div>`;
    let pagosProveedores = 0;
    data.cajas.forEach((caja) => {
      let detalle = '';
      let monto = 0;
      let abono = 0;
      const pagoCaja = data.pagosProveedors.filter((pago) => pago.cajaId === caja.id);
      if (JSON.stringify(pagoCaja) !== '[]'){
        pagoCaja.forEach((pagCa) => {
         monto += pagCa.efectivo;
         abono += pagCa.efectivo + pagCa.banco + pagCa.fueradCaja;
         pagCa.pertBusPag.detbusgastos.forEach((det) => {
          detalle += `PD:${det.pertUniDbg.placa} Prod:${det.pertProDbg.nombre} Cant:${det.cant} CostoUni:${det.costoUni} Total:${det.total} ,  `;
        });
         detalle += `Abono:(${abono})`;
         overlay_content.innerHTML += `<div class="row">
         <div class="col-2">
         ${caja.author.username}
         </div>
         <div class="col-8">
         ${detalle}
         </div>
         <div class="col-2">
         ${monto}
         </div>
         </div>`; 
         pagosProveedores += monto;
       });
      }
    });
    montoTotalEgr += pagosProveedores;
    overlay_content.innerHTML += `<div class="row">

    <div class="col-10">
    
    </div>
    <div class="col-2">
    ${pagosProveedores}
    </div>
    </div>`; 
    overlay_content.innerHTML += `<br>`

  //-----------------------------------------------------------------


    //-----------------Pagos de Nóminas No Vueltas

    overlay_content.innerHTML += `<div class="row">
    <div class="col-12">
    <b>Pagos de Nómina</b>
    </div>
    </div>`; 
    overlay_content.innerHTML += `<div class="row">
    <div class="col-2">
    Autor
    </div>
    <div class="col-8">
    Detalle
    </div>
    <div class="col-2">
    Monto
    </div>
    </div>`;
    let pagosNom = 0;
    data.cajas.forEach((caja) => {
      let detalle = '';
      let monto = 0;
      let abono = 0;
      const pagoCaja = data.pagosNominas.filter((pago) => pago.cajaId === caja.id);
      if (JSON.stringify(pagoCaja) !== '[]'){
        pagoCaja.forEach((pagCa) => {
         monto += pagCa.monto;
         detalle += `Empleado:${pagCa.pertNomPan.pertEmpNom.nombres} Quin:${pagCa.pertNomPan.pertQuiNom.desde}->${pagCa.pertNomPan.pertQuiNom.hasta} Monto:${pagCa.monto},  `;
        });
         overlay_content.innerHTML += `<div class="row">
         <div class="col-2">
         ${caja.author.username}
         </div>
         <div class="col-8">
         ${detalle}
         </div>
         <div class="col-2">
         ${monto}
         </div>
         </div>`; 
         pagosNom += monto;
      }
    });
    montoTotalEgr += pagosNom;
    overlay_content.innerHTML += `<div class="row">

    <div class="col-10">
    
    </div>
    <div class="col-2">
    ${pagosNom}
    </div>
    </div>`; 
    overlay_content.innerHTML += `<br>`

  //-----------------------------------------------------------------

 //-----------------Pagos de Préstamos Financieros No Vueltas

    overlay_content.innerHTML += `<div class="row">
    <div class="col-12">
    <b>Pagos de Préstamos Financieros</b>
    </div>
    </div>`; 
    overlay_content.innerHTML += `<div class="row">
    <div class="col-2">
    Autor
    </div>
    <div class="col-8">
    Detalle
    </div>
    <div class="col-2">
    Monto
    </div>
    </div>`;
    let pagosPrest = 0;
    data.cajas.forEach((caja) => {
      let detalle = '';
      let monto = 0;
      const pagoCaja = data.pagosPrest.filter((pago) => pago.cajaId === caja.id);
      if (JSON.stringify(pagoCaja) !== '[]'){
        pagoCaja.forEach((pagCa) => {
         monto += pagCa.efectivo;
         detalle += `Financiera:${pagCa.pertPrePaf.pertFinPre.nombre} Monto:${pagCa.efectivo},  `;
        });
         overlay_content.innerHTML += `<div class="row">
         <div class="col-2">
         ${caja.author.username}
         </div>
         <div class="col-8">
         ${detalle}
         </div>
         <div class="col-2">
         ${monto}
         </div>
         </div>`; 
         pagosPrest += monto;
      }
    });
    montoTotalEgr += pagosPrest;
    overlay_content.innerHTML += `<div class="row">

    <div class="col-10">
    
    </div>
    <div class="col-2">
    ${pagosPrest}
    </div>
    </div>`; 
    overlay_content.innerHTML += `<br>`

  //-----------------------------------------------------------------

    //-----------------Retiros No Vueltas

    overlay_content.innerHTML += `<div class="row">
    <div class="col-12">
    <b>Retiros de Caja</b>
    </div>
    </div>`; 
    overlay_content.innerHTML += `<div class="row">
    <div class="col-2">
    Autor
    </div>
    <div class="col-8">
    Detalle
    </div>
    <div class="col-2">
    Monto
    </div>
    </div>`;
    montoRet = 0;
    data.cajas.forEach((caja) => {
      let detalle = '';
      let monto = 0;

      const retCaja = data.retiros.filter((ret) => ret.cajaId === caja.id);
      if (JSON.stringify(retCaja) !== '[]'){
        retCaja.forEach((retCa) => {
          monto += retCa.monto;
          detalle += `Entregado a:${retCa.pertEmpRet.nombres} Destino:${retCa.pertDesRet.destino} Monto:(${retCa.monto}),  `;
        });
        overlay_content.innerHTML += `<div class="row">
        <div class="col-2">
        ${caja.author.username}
        </div>
        <div class="col-8">
        ${detalle}
        </div>
        <div class="col-2">
        ${monto}
        </div>
        </div>`; 
        montoRet += monto;
      }
    });
    overlay_content.innerHTML += `<div class="row">

    <div class="col-10">
    
    </div>
    <div class="col-2">
    ${montoRet}
    </div>
    </div>`; 
    overlay_content.innerHTML += `<br>`

  //-----------------------------------------------------------------
    const neto = montoTotalIng - montoTotalEgr;
    const saldo = neto - montoRet;
 overlay_content.innerHTML += `<div class="row">

    <div class="coll-8">
    
    </div>
    <div class="col-2">
   <h2>Ingresos:</h2> 
    </div>
    <div class="col-2">
   <h2>${montoTotalIng.toFixed(2)}</h2>
    </div>
    
    </div>
    <div class="row">

    <div class="coll-8">
    
    </div>

    <div class="col-2">
   <h2>Egresos:</h2> 
    </div>
    <div class="col-2">
   <h2>${montoTotalEgr.toFixed(2)}</h2>
    </div>
    
    </div>
    <div class="row">

    <div class="coll-8">
    
    </div>

    <div class="col-2">
   <h2>Neto:</h2> 
    </div>
    <div class="col-2">
   <h2>${neto.toFixed(2)}</h2>
    </div>
    
    </div>
    <br>
     <div class="row">

    <div class="coll-8">
    
    </div>

    <div class="col-2">
   <h2>Retiros:</h2> 
    </div>
    <div class="col-2">
   <h2>${montoRet.toFixed(2)}</h2>
    </div>
    
    </div>
    </div>
    <br>
     <div class="row">

    <div class="coll-8">
    
    </div>

    <div class="col-2">
   <h2>Saldo:</h2> 
    </div>
    <div class="col-2">
   <h2>${saldo.toFixed(2)}</h2>
    </div>
    
    </div>`; 
    overlay_content.innerHTML += `<br>`



    overlay_content.innerHTML += `<button class="button_secundario cancelarOverlaymax" type="button">Cerrar</button>`;
  } else {

    overlay_content.innerHTML = `<h2>${data.message}</h2>`;

    overlay_content.innerHTML += `
    <button class="button_secundario cancelarOverlaymax refresh" data-refresh="${data.refresh}" type="button">Cerrar</button>`;

  }

  
  
}

const createDomGroup = (data, grupo) => {
   let efectivoGrupo = 0;
      let vltasGrupo = 0;
      let d2Grupo = 0;
      let anticipoGrupo = 0;
      let itemHtml = '';
      itemHtml += `
      <span class="buttonDelete cursorpointer cerrarDiv">Resumir</span>
      <div class="row">
      <div class="col-12">
      <b>${grupo.nombre}</b>
      </div>
      </div>
      <div class="row">
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
      </div>`
      grupo.unidads.forEach((unidad) => {
        const unidadPlaca = data.unidadsPlaca.find(unid => unid.id === unidad);
        let row = '';
        row += `<div class="row datos">
        <div class="col-1">
        <span class="pd">${unidadPlaca.padron}</span>
        </div>`;
        let liq = 0;
        let vltas = 0;
        data.catVlta.forEach((item) => {
          const vlta = data.servicios.filter((dat) => dat.unidadId === unidad).find( dato => dato.vuelta === item.valor );
          if (vlta){
            vltas += vlta.vlta;
            liq += vlta.efectivo;
            row += `<div class="col-1 cursorpointer showDetalle" style=" background-color:${vlta.color};" data-autor="${vlta.autor}" data-banco="${vlta.banco}" data-cpc="${vlta.cpc}" data-falla="${vlta.falla}" data-siniestro="${vlta.siniestro}" data-autoridad="${vlta.autoridad}" data-operador="${vlta.nombre} ${vlta.apellido}" data-fecha="${vlta.fechaCaja}">
            ${vlta.efectivo}
            </div>`
          } else {
            row += `<div class="col-1">

            </div>`
          }
        })
        efectivoGrupo += liq;
        vltasGrupo += vltas;
        d2Grupo += unidadPlaca.d2;
        anticipoGrupo += unidadPlaca.anticipo;
        row +=     `<div class="col-1">
        <b><span class="liq">${liq}</span></b>
        </div>
        <div class="col-1">
        <b>${vltas}</b>
        </div>
        <div class="col-1">
        <span class="diesel">${unidadPlaca.d2.toFixed(2)}</span>
        </div>
        <div class="col-mm">
        <span class="anticipo">${unidadPlaca.anticipo}</span>
        </div>
        <div class="col-mm cursorpointer showSaldoAnt" data-ant="${unidadPlaca.fechasAnticipos}">
        ${unidadPlaca.saldosAnticipos}
        </div>
        <div class="col-mm cursorpointer showSaldoAnt" data-ant="${unidadPlaca.fechasVltas}">
        ${unidadPlaca.VltasAcum}
        </div>
        </div>`
        itemHtml += row;
      }) 
      montoTotalIng += efectivoGrupo + d2Grupo + anticipoGrupo;
      itemHtml += `<div class="row">
      <div class="col-7">

      </div>
      <div class="col-1">
      <b>${efectivoGrupo}</b>
      </div>
      <div class="col-1">
      <b>${vltasGrupo}</b>
      </div>
      <div class="col-1">
      <b>${d2Grupo.toFixed(2)}</b>
      </div>
      <div class="col-mm">
      <b>${anticipoGrupo.toFixed(2)}</b>
      </div>
      <div class="col-mm">
      <b></b>
      </div>
      <div class="col-mm">
      <b></b>
      </div>
      </div>`;

       return itemHtml;
  
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


const showDetalleContr = (ev) => {
  let overlaySpinner = document.querySelector('.overlay_spinner');
  let overlay = document.querySelector('.overlay');
  let overlay_content = document.querySelector('.overlay_content');
  overlaySpinner.classList.add('opened');
  overlay_content.innerHTML = '';


  window.setTimeout(() => {
    overlay.classList.add('opened');
  }, 500);

  const efectivo = ev.target.innerHTML;
  const autor = ev.target.getAttribute("data-autor");
  const banco = ev.target.getAttribute("data-banco");
  const cpc = ev.target.getAttribute("data-cpc");
  const falla = ev.target.getAttribute("data-falla");
  const siniestro = ev.target.getAttribute("data-siniestro");
  const autoridad = ev.target.getAttribute("data-autoridad");
  const operador = ev.target.getAttribute("data-operador");
  const fecha = ev.target.getAttribute("data-fecha");

  overlay_content.innerHTML += `<div class="row">
  <div class="coll-3">

  </div>
  <div class="col-6">
  Autor: <b>${autor}</b>
  </div>
  <div class="coll-3">

  </div>
  </div>`;
  overlay_content.innerHTML += `<div class="row">
  <div class="coll-3">

  </div>
  <div class="col-6">
  Efectivo: <b>${efectivo}</b>
  </div>
  <div class="coll-3">

  </div>
  </div>`;
  overlay_content.innerHTML += `<div class="row">
  <div class="coll-3">

  </div>
  <div class="col-6">
  Banco: <b>${banco !== 'undefined' ? banco : 0}</b>
  </div>
  <div class="coll-3">

  </div>
  </div>`;
  overlay_content.innerHTML += `<div class="row">
  <div class="coll-3">

  </div>
  <div class="col-6">
  Cuenta por Cobrar (CPC): <b>${cpc !== 'undefined' ? cpc : 0}</b>
  </div>
  <div class="coll-3">

  </div>
  </div>`;
  overlay_content.innerHTML += `<div class="row">
  <div class="coll-3">

  </div>
  <div class="col-6">
  Dcto por Falla Mecánica: <b>${falla !== 'undefined' ? falla : 0}</b>
  </div>
  <div class="coll-3">

  </div>
  </div>`;
  overlay_content.innerHTML += `<div class="row">
  <div class="coll-3">

  </div>
  <div class="col-6">
  Dcto por Siniestro: <b>${siniestro !== 'undefined' ? siniestro : 0}</b>
  </div>
  <div class="coll-3">

  </div>
  </div>`;
  overlay_content.innerHTML += `<div class="row">
  <div class="coll-3">

  </div>
  <div class="col-6">
  Dcto por Inconv. con la Autoridad: <b>${autoridad !== 'undefined' ? autoridad : 0}</b>
  </div>
  <div class="coll-3">

  </div>
  </div>`;
  overlay_content.innerHTML += `<div class="row">
  <div class="coll-3">

  </div>
  <div class="col-6">
  Operador: <b>${operador}</b>
  </div>
  <div class="coll-3">

  </div>
  </div>`;
  overlay_content.innerHTML += `<div class="row">
  <div class="coll-3">

  </div>
  <div class="col-6">
  Fecha de Caja: <b>${fecha}</b>
  </div>
  <div class="coll-3">

  </div>
  </div>`;
  overlay_content.innerHTML += `<button class="button_secundario cancelarOverlay" type="button">Cerrar</button>`;
  overlaySpinner.classList.remove('opened');
}

function cerrarDivContr(event) {
const buttonClicked = event.target;
  const Node = buttonClicked.closest('.item');
  const grupo = Node.getAttribute('data-id');
  const Items = Node.querySelectorAll('.datos');
  let detalle = '';
  let monto = 0;
  Items.forEach((Item) => {
  
   
  const pdElement = Item.querySelector('.pd');
  const pd = pdElement.textContent
    
 const liqElement = Item.querySelector('.liq');
  const liq = Number(
    liqElement.textContent
    );
 
 const dieselElement = Item.querySelector('.diesel');
  const diesel = Number(
    dieselElement.textContent
    );
  const anticipoElement = Item.querySelector('.anticipo');
  const anticipo = Number(
    anticipoElement.textContent
    );

  if (diesel > 0 || liq > 0 || anticipo >0){
   detalle += `Placa:${pd} Liq:${liq} Comb:${diesel} Anticipo:${anticipo}, `; 
   monto += liq + diesel + anticipo;
  }
  
  });

  buttonClicked.closest('.item').innerHTML = `
  <br>
<div class="row">
  <div class="col-12">
  <b>${grupo}</b>
  </div>
</div>  

<div class="row">
  <div class="col-10">
  Detalle
  </div>
  <div class="col-2">
  Monto
  </div>
</div>  
<div class="row">
  <div class="col-10">
  ${detalle}
  </div>
  <div class="col-2">
  ${monto.toFixed(2)}
  </div>
</div>
<br>
  `;
  
}

