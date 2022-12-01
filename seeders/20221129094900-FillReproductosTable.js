'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let now = new Date();
        await queryInterface.bulkInsert('Reproductos', [
{
    "id": "1",
    "nombre": "ABRAZADERA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2",
    "nombre": "ABRAZADERA DE BANANO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "3",
    "nombre": "ABRAZADERA DE MUELLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "4",
    "nombre": "ABRAZADERA DE TUBO DE ESCAPE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "5",
    "nombre": "ABRAZADERA DE TURBO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "6",
    "nombre": "ABRAZADERAS DE INTERCOOLER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "7",
    "nombre": "ACC. B\/ AGUA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "8",
    "nombre": "ACC. B\/ACEITE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "9",
    "nombre": "ACC. BOMBIN ENBRAGUE ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "10",
    "nombre": "ACC. COMPRESORA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "11",
    "nombre": "ACC. SELECTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "12",
    "nombre": "ACCESORIO C TIMON ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "13",
    "nombre": "ACCESORIO CILINDRO DE MANDO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "14",
    "nombre": "ACCESORIO DE PEDAL DE FRENO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "15",
    "nombre": "ACCESORIO DEL SELECIONADOR DE CAMBIOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "16",
    "nombre": "ACCESORIO EMBRAGUE VENTIL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "17",
    "nombre": "ACEITE PARA CAJA BALDE",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "18",
    "nombre": "ACEITE PARA CAJA CILINDRO",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "19",
    "nombre": "ACEITE PARA CAJA GALON",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "20",
    "nombre": "ACEITE PARA CAJA LTS",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "21",
    "nombre": "ACEITE PARA CORONA BALDE",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "22",
    "nombre": "ACEITE PARA CORONA CILINDRO",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "23",
    "nombre": "ACEITE PARA CORONA GALON",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "24",
    "nombre": "ACEITE PARA CORONA LTS",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "25",
    "nombre": "ACEITE PARA MOTOR BALDE",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "26",
    "nombre": "ACEITE PARA MOTOR CILINDRO",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "27",
    "nombre": "ACEITE PARA MOTOR GALON",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "28",
    "nombre": "ACEITE PARA MOTOR LTS",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "29",
    "nombre": "ACEITE PARA TRANSMISION BALDE",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "30",
    "nombre": "ACEITE PARA TRANSMISION CILINDRO",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "31",
    "nombre": "ACEITE PARA TRANSMISION GALON",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "32",
    "nombre": "ACEITE PARA TRANSMISION LTS",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "33",
    "nombre": "ACEITE QUEMADO BALDE",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "34",
    "nombre": "ACUMULADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "35",
    "nombre": "AFLOJATODO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "36",
    "nombre": "AGUA MINERAL LTS",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "37",
    "nombre": "AJUSTADOR DE RODAJE ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "38",
    "nombre": "AJUSTADOR DEL EJE DE CALIPER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "39",
    "nombre": "AJUSTADOR PARA REPARO DE CALIPER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "40",
    "nombre": "ALAMBRE MTS",
    "unidad": "MTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "41",
    "nombre": "ALTERNADOR 12V",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "42",
    "nombre": "AMORTIGUADOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "43",
    "nombre": "ANILLO ARRASTRE 1RA 2DA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "44",
    "nombre": "ANILLO COMPRESORA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "45",
    "nombre": "ANILLO ELASTICO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "46",
    "nombre": "ANILLO FILTRO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "47",
    "nombre": "ANILLO MOTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "48",
    "nombre": "ARANDELA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "49",
    "nombre": "ARANDELA B \/ INYECC. ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "51",
    "nombre": "ARANDELA PLANETARIO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "52",
    "nombre": "ARANDELA SATELITE ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "54",
    "nombre": "ARBOL PRIMARIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "55",
    "nombre": "ARMADURA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "56",
    "nombre": "ARO CORREDERA 1RA 2DA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "57",
    "nombre": "ARO CORREDERA 3RA 4TA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "58",
    "nombre": "ARO CORREDERA RETRO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "59",
    "nombre": "ARO EMBRAGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "60",
    "nombre": "ARO GUIA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "61",
    "nombre": "ARO SELECTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "62",
    "nombre": "ARO SINCRONIZADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "63",
    "nombre": "ARO(ROTOR)",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "64",
    "nombre": "ARRANCADOR 12V",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "65",
    "nombre": "ARTICULACION ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "66",
    "nombre": "ASIENTO VALVULA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "67",
    "nombre": "ASIENTOS DE VALVULA DE ADMISION",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "68",
    "nombre": "ASIENTOS DE VALVULA DE ESCAPE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "69",
    "nombre": "ASPA DE VENTILADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "70",
    "nombre": "AUTOMATICO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "71",
    "nombre": "BALANCIN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "72",
    "nombre": "BAQUELINA DE PALANCA DE CAMBIOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "73",
    "nombre": "BARRA CORTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "74",
    "nombre": "BARRA DIREECION CORTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "75",
    "nombre": "BARRA ESTABILIZADORA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "76",
    "nombre": "BARRA MATRIZ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "77",
    "nombre": "BARRA TEMPLADORA DELANTERA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "78",
    "nombre": "BARRITA DE TEMPLADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "79",
    "nombre": "BASE C\/FILTRO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "80",
    "nombre": "BASE DE RESERVORIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "81",
    "nombre": "BASE FILTRO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "82",
    "nombre": "BASE TURBO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "83",
    "nombre": "BATERIA 12V",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "84",
    "nombre": "BAY PASS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "85",
    "nombre": "BENDIX ARRANCADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "86",
    "nombre": "BIELA DE COMPRESORA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "87",
    "nombre": "BIELAS MOTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "88",
    "nombre": "BISAGRA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "89",
    "nombre": "BOCINA CUMMINS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "90",
    "nombre": "BOCINA DE BIELA CUMMINS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "91",
    "nombre": "BOCINA DE BIELA MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "92",
    "nombre": "BOCINA DE LEVAS MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "93",
    "nombre": "BOCINA DE MUELLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "94",
    "nombre": "BOCINA FRONTAL DE EJE PIVOTE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "95",
    "nombre": "BOCINAS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "96",
    "nombre": "BOCINAS BIELA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "98",
    "nombre": "BOCINAS EJE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "99",
    "nombre": "BOCINAS EMBRAGUE ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "100",
    "nombre": "BOCINAS JEBES BARRA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "103",
    "nombre": "BOCINAS STD",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "104",
    "nombre": "BOCINAS ZAPATA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "105",
    "nombre": "BOLSA AIRE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "106",
    "nombre": "BOLSA CABINA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "108",
    "nombre": "BOMBA ACEITE CAJA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "109",
    "nombre": "BOMBA DE ACEITE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "110",
    "nombre": "BOMBA DE ACEITE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "111",
    "nombre": "BOMBA DE AGUA 125MM",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "112",
    "nombre": "BOMBA DE AGUA COMPLETA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "113",
    "nombre": "BOMBA DE COMBUSTIBLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "114",
    "nombre": "BOMBA DE INYECCION",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "115",
    "nombre": "BOMBIN DE BOLSA DE AIRE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "116",
    "nombre": "BOMBIN DE EMBRAGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "117",
    "nombre": "BOMBIN DE PEDAL CAJA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "118",
    "nombre": "BOMBIN FRENO DE MOTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "119",
    "nombre": "BOMBIN SUPER MARCHA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "120",
    "nombre": "BOMBIN SUSP. NEUMATICO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "121",
    "nombre": "BOTIQUIN DE PRIMEROS AUXILIOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "122",
    "nombre": "BOYA DE RETARDADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "123",
    "nombre": "BOYA VOITH DE RETARDADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "124",
    "nombre": "BRAZO APAGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "125",
    "nombre": "BRAZO DENTADO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "126",
    "nombre": "BRIDA ACOPLAMIENTO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "127",
    "nombre": "BRIDA ART. P.C 375827",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "128",
    "nombre": "BRIDA B\/ ACEITE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "129",
    "nombre": "BRIDA CARDAN ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "130",
    "nombre": "BRIDA PORTA ELEMENTO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "131",
    "nombre": "BRIDA SINCRONIZADOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "132",
    "nombre": "BROCA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "133",
    "nombre": "BRONCE SINC DE CORONA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "135",
    "nombre": "BUJE DE HORQUILLA DE EMBRAGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "136",
    "nombre": "BUJE TRANSVERSAL DE VIGA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "137",
    "nombre": "BUJIA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "138",
    "nombre": "CABEZAL DE COMPRESOR AIRE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "139",
    "nombre": "CABEZOTE DIFERENCIAL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "140",
    "nombre": "CABLE #08",
    "unidad": "MTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "141",
    "nombre": "CABLE #10",
    "unidad": "MTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "142",
    "nombre": "CABLE #12",
    "unidad": "MTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "143",
    "nombre": "CABLE #14",
    "unidad": "MTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "144",
    "nombre": "CABLE #16",
    "unidad": "MTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "145",
    "nombre": "CABLE #18",
    "unidad": "MTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "146",
    "nombre": "CABLE DE CAJA DE CAMBIO",
    "unidad": "MTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "147",
    "nombre": "CABLE ELECTRICO VICOSTATICO DE VENTILADOR",
    "unidad": "MTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "148",
    "nombre": "CABLE ENCENDIDO ",
    "unidad": "MTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "149",
    "nombre": "CABLE RAMAL DE MOTOR",
    "unidad": "MTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "150",
    "nombre": "CADENA DE CALIPER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "151",
    "nombre": "CAJA DE CAMBIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "152",
    "nombre": "CAJA DE DIRECCION",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "153",
    "nombre": "CAJA VALVULA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "154",
    "nombre": "CALAMINA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "155",
    "nombre": "CAMISA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "156",
    "nombre": "CAMISA CUMMINS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "157",
    "nombre": "CAMISA MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "158",
    "nombre": "CAMPANA VOLANTE ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "159",
    "nombre": "CANALETAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "165",
    "nombre": "CARACOL TURBO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "166",
    "nombre": "CARBON ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "167",
    "nombre": "CARBON B\/ AGUA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "168",
    "nombre": "CARCASA VOLANTE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "169",
    "nombre": "CARCAZA B\/ INYECTOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "170",
    "nombre": "CARCAZA CILINDRO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "171",
    "nombre": "CARDAN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "172",
    "nombre": "CARRETE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "173",
    "nombre": "CARRETE(MANGO)",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "174",
    "nombre": "CARTER DE BOMBA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "175",
    "nombre": "CARTER DE BOMBA DE ACEITE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "176",
    "nombre": "CASCO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "177",
    "nombre": "CASQUILLO BOCINAS DE BASE ALTERNADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "178",
    "nombre": "CASQUILLO DE CULATA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "179",
    "nombre": "CASTILLO DIFERENCIAL ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "180",
    "nombre": "CAZOLETA DE FRENO DE MOTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "181",
    "nombre": "CEMENTO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "182",
    "nombre": "CHAPA COLECTORA DE ACEITE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "183",
    "nombre": "CHAPA DE LUA AMARILLA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "184",
    "nombre": "CHAPA FARO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "185",
    "nombre": "CHAPA TIMBRE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "186",
    "nombre": "CHAVETA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "187",
    "nombre": "CHOCLITO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "188",
    "nombre": "CHOCLITO SUPER MARCHA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "190",
    "nombre": "CILINDRO 001 260 9963 ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "191",
    "nombre": "CILINDRO DE ENGANCHE ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "192",
    "nombre": "CILINDRO EMBRAGUE ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "193",
    "nombre": "CINTA AISLANTE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "194",
    "nombre": "CINTA AMARILLA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "195",
    "nombre": "CINTA CHICA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "196",
    "nombre": "CINTA GRANDE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "197",
    "nombre": "CINTA REFLECTORA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "198",
    "nombre": "CINTA ROJA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "199",
    "nombre": "CIRCUITO IMPRESO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "200",
    "nombre": "CLAVIJA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "201",
    "nombre": "CLAXON",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "202",
    "nombre": "CODO MULTIPLE ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "204",
    "nombre": "COLADOR ACEITE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "205",
    "nombre": "COLLARIN DE EMBRAGUE MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "206",
    "nombre": "COLLARIN DE EMBRAGUE MODASA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "207",
    "nombre": "COMBUSTIBLE (USO MANT DE BUS, TALLER)",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "208",
    "nombre": "COMPRESOR A\/C",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "209",
    "nombre": "COMPRESOR DE CULATA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "210",
    "nombre": "COMPRESORA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "211",
    "nombre": "CONECTOR DE INSERCION",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "212",
    "nombre": "CONECTORES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "214",
    "nombre": "CONO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "215",
    "nombre": "CONO DE ACOPLAMIENTO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "216",
    "nombre": "CONO DE SINCRONIZACION",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "217",
    "nombre": "CONO INTERMEDIARIO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "218",
    "nombre": "CONOS (BOCINAS) ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "219",
    "nombre": "CONTACTO 70351706 ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "220",
    "nombre": "COPIA DE PLACA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "221",
    "nombre": "CORNETA DE AIRE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "222",
    "nombre": "CORONA 3R 4RA 5TA 6TA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "223",
    "nombre": "CORONA CAJA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "224",
    "nombre": "CORONA DENTADA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "225",
    "nombre": "CORONA DESPLAZABLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "226",
    "nombre": "CORONA SELECTOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "227",
    "nombre": "CORREDERA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "228",
    "nombre": "CREMALLERAS VOLANTE ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "230",
    "nombre": "CRUCETAS DE CARDAN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "231",
    "nombre": "CRUZ DE 7.1\/2 COPAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "232",
    "nombre": "CUBIERTA DE CALIPER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "233",
    "nombre": "CUBIERTA DE MOTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "234",
    "nombre": "CUBIERTA DE PLASTICO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "235",
    "nombre": "CUBO SINCRONIZADOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "236",
    "nombre": "CUERPO (PORTA POLEA) ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "237",
    "nombre": "CUERPO SINCRONIZADOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "238",
    "nombre": "CUERPO SINCRONIZADOR 3RA 4TA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "239",
    "nombre": "CUERPO, CASCO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "240",
    "nombre": "CULATA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "241",
    "nombre": "DADO SINCRONIZADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "242",
    "nombre": "DESARMADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "243",
    "nombre": "DIAFRAGMA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "244",
    "nombre": "DISCO ACOPLAMIENTO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "245",
    "nombre": "DISCO DE CORTE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "246",
    "nombre": "DISCO DE EMBRAGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "247",
    "nombre": "DISCO DE FRENO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "248",
    "nombre": "DISCO REDUCTOR P. ACEITE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "249",
    "nombre": "DISCO SINCRONIZADOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "250",
    "nombre": "EJE ACO B\/INYECCION ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "251",
    "nombre": "EJE ACOPLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "252",
    "nombre": "EJE BASTIDOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "253",
    "nombre": "EJE BOMBA AGUA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "254",
    "nombre": "EJE DE TRANSMISION",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "255",
    "nombre": "EJE DESLIZANTE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "256",
    "nombre": "EJE LEVAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "257",
    "nombre": "EJE PROPULSOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "258",
    "nombre": "EJE SERVO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "259",
    "nombre": "EJE T. FIJO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "260",
    "nombre": "ELECTROIMAN DE PARADA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "261",
    "nombre": "ELECTROVALVULA PROPORCIONAL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "262",
    "nombre": "ELEMENTO SEPARADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "263",
    "nombre": "EMBLEMA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "264",
    "nombre": "EMBRAGUE DE VENTILADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "265",
    "nombre": "EMPAQ. TAPA BALNCIN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "266",
    "nombre": "EMPAQ. TAPA RUEDA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "267",
    "nombre": "EMPAQUE BASE AGUA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "268",
    "nombre": "EMPAQUE BASE TURBO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "269",
    "nombre": "EMPAQUE CARACOL TURBO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "270",
    "nombre": "EMPAQUE CARTER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "271",
    "nombre": "EMPAQUE CARTER CHICO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "272",
    "nombre": "EMPAQUE CARTER GRANDE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "273",
    "nombre": "EMPAQUE CULATA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "274",
    "nombre": "EMPAQUE DE CULATA DE COMPRESORA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "275",
    "nombre": "EMPAQUE DE GOMA TAPA BALANCIN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "276",
    "nombre": "EMPAQUE JEBE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "277",
    "nombre": "EMPAQUE MULTIPLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "278",
    "nombre": "EMPAQUE MULTIPLE ADMISION",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "279",
    "nombre": "EMPAQUE TAPA DISTRIBUCION",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "280",
    "nombre": "EMPAQUES CODIGO059",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "281",
    "nombre": "EMPAQUES CODIGO060",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "282",
    "nombre": "ENCHUFE CORONA HEMBRA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "283",
    "nombre": "ENCHUFE CORONA MACHO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "284",
    "nombre": "ENFRIADOR DE TRANSMISION",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "285",
    "nombre": "ENFRIADORA ACEITE DE MOTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "286",
    "nombre": "ESPACIADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "287",
    "nombre": "ESPACIADORES CHICOS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "288",
    "nombre": "ESPACIADORES GRANDES ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "289",
    "nombre": "ESPARRAGO C\/ TUERCA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "291",
    "nombre": "ESPARRAGOS 354160 ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "292",
    "nombre": "ESPEJO INTERIOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "293",
    "nombre": "ESPEJO PLANO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "294",
    "nombre": "ESPEJO PUNTO CIEGO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "295",
    "nombre": "ESPEJO RETROVISOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "296",
    "nombre": "ESPEJOS PANORAMICOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "297",
    "nombre": "ESTRIBO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "298",
    "nombre": "FAJA DISTRIBUCION ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "299",
    "nombre": "FAJA TEMPLADORA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "300",
    "nombre": "FAJAS BX52",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "301",
    "nombre": "FAJAS FRENOS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "302",
    "nombre": "FAJAS TRP-F17621 ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "303",
    "nombre": "FARO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "304",
    "nombre": "FARO CHICO COMP",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "305",
    "nombre": "FARO DELANTERO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "306",
    "nombre": "FARO DIRECCIONAL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "307",
    "nombre": "FARO GRANDE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "308",
    "nombre": "FARO LED AMBAR POSTERIOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "309",
    "nombre": "FARO LUZ DIRECCCIONAL ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "310",
    "nombre": "FARO POSTERIOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "311",
    "nombre": "FARO POSTERIOR LED ROJO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "312",
    "nombre": "FAROS GDES 28V' ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "313",
    "nombre": "FAROS NEBLINEROS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "314",
    "nombre": "FELPA 422145",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "315",
    "nombre": "FELPA CAMPANA MOTOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "316",
    "nombre": "FILTRO DE ACEITE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "317",
    "nombre": "FILTRO DE AGUA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "318",
    "nombre": "FILTRO DE AIRE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "319",
    "nombre": "FILTRO DE AIRE PRIMARIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "320",
    "nombre": "FILTRO DE BY PASS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "321",
    "nombre": "FILTRO DE CAJA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "322",
    "nombre": "FILTRO DE CARBURADOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "323",
    "nombre": "FILTRO DE COMBUSTIBLE ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "324",
    "nombre": "FILTRO DE COMPRESORA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "325",
    "nombre": "FILTRO DE GAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "326",
    "nombre": "FILTRO DE HIDROLINA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "327",
    "nombre": "FILTRO DE PETROLEO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "328",
    "nombre": "FILTRO DE RACOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "329",
    "nombre": "FILTRO DE REFRIGERANTE ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "330",
    "nombre": "FILTRO DE SECADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "331",
    "nombre": "FILTRO DE VENTILADOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "332",
    "nombre": "FILTRO SEPARADOR AGUA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "333",
    "nombre": "FILTRO SEPARADOR COMBUSTIBLE ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "334",
    "nombre": "FILTRON DE PATRON DE A",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "335",
    "nombre": "FLASHER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "336",
    "nombre": "FOCO DELANTERO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "337",
    "nombre": "FOCO H4 75\/70W",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "338",
    "nombre": "FOCOS AHORRATIVOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "339",
    "nombre": "FORRO DE DISCO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "340",
    "nombre": "FRENO 1RA 2DA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "341",
    "nombre": "FRENO 3RA 4TA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "342",
    "nombre": "FRENO SELECTOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "343",
    "nombre": "FRENO SINCRONIZADOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "344",
    "nombre": "FUSIBLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "345",
    "nombre": "GASTOS COMISARIA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "346",
    "nombre": "GOBERNADOR AIRE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "347",
    "nombre": "GOMA BARRA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "348",
    "nombre": "GOMA DE TERMOSTATO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "349",
    "nombre": "GOMAS DE BARRA ESTABILIZADORA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "350",
    "nombre": "GRASA AMALIC",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "351",
    "nombre": "GUARDAPOLVO DE CALIPER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "352",
    "nombre": "GUIA PLASTIC. 1305676 ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "353",
    "nombre": "GUIAS DE ADMISION",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "354",
    "nombre": "GUIAS DE ESCAPE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "355",
    "nombre": "GUIAS DE VALVULA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "356",
    "nombre": "HIDROLINA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "357",
    "nombre": "HOJA DE MUELLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "358",
    "nombre": "HORQUILLA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "359",
    "nombre": "HORQUILLA INYECTOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "360",
    "nombre": "HUACHA CORONA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "361",
    "nombre": "HUACHAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "362",
    "nombre": "INDICADOR VISUAL DE CALIPER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "363",
    "nombre": "INTERCOOLER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "364",
    "nombre": "INTERRUP.PEDAL EMBRAG",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "365",
    "nombre": "INTERRUPTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "366",
    "nombre": "INTERRUPTOR SIMPLES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "367",
    "nombre": "INYECTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "368",
    "nombre": "INYECTOR ISM",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "369",
    "nombre": "INYECTORES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "370",
    "nombre": "JEBE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "371",
    "nombre": "JEBE ADMISION",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "372",
    "nombre": "JEBE AGUA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "373",
    "nombre": "JEBE B\/ AGUA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "374",
    "nombre": "JEBE BASE BOMBA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "375",
    "nombre": "JEBE BOCINA INYECTOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "376",
    "nombre": "JEBE COMPRESORA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "377",
    "nombre": "JEBE DE CARDAN CUMMINS \/S RODAJE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "378",
    "nombre": "JEBE DE CARDAN CUMMINS C\/RODAJE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "379",
    "nombre": "JEBE DE PUERTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "380",
    "nombre": "JEBE ENFRIADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "381",
    "nombre": "JEBE LUNA PARABRISA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "382",
    "nombre": "JEBE RECUPERADOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "383",
    "nombre": "JEBES CAMISAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "384",
    "nombre": "JEBES DELGADOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "385",
    "nombre": "JEBES EMPAQUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "386",
    "nombre": "JEBES GRUESOS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "387",
    "nombre": "JGO DE REPARO BARRA TEMPLADORA",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "388",
    "nombre": "JGO EMPAQUE",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "389",
    "nombre": "JGO METAL 1\/2 JGO. METAL BANC.",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "390",
    "nombre": "JGO METAL 1\/2 JGO. METAL BANC. 0.40 ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "391",
    "nombre": "JGO PISTON",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "392",
    "nombre": "JGO REPARACION 272571 VOLVO ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "393",
    "nombre": "JGO, ACCESORIO 1662417 VOLVO",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "394",
    "nombre": "JGO, REPARACION TIMON ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "395",
    "nombre": "JGO. ANILLO COMPRESORA 3094021 ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "396",
    "nombre": "JGO. ANILLOS STD ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "397",
    "nombre": "JGO. BOCINA INYECTOR ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "398",
    "nombre": "JGO. EMPAQUE BALNCEO ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "399",
    "nombre": "JGO. EMPAQUE COMPLEMENTARIO 276123 ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "400",
    "nombre": "JGO. EMPAQUE COMPRESORA",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "401",
    "nombre": "JGO. EMPAQUE MOTOR ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "402",
    "nombre": "JGO. EMPAQUE MULTIPLE ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "403",
    "nombre": "JGO. EMPAQUE TAPA ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "404",
    "nombre": "JGO. EMPAQUE TURBO ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "405",
    "nombre": "JGO. ESPACIADORES ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "406",
    "nombre": "JGO. JEBES BALANCIN ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "407",
    "nombre": "JGO. LAINAS",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "408",
    "nombre": "JGO. LAINAS CORONA ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "409",
    "nombre": "JGO. MET. BANC. 0.20 ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "410",
    "nombre": "JGO. METAL BANCADA STD ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "411",
    "nombre": "JGO. METALES 0.30 ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "412",
    "nombre": "JGO. METALES BIELA 0.20 ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "413",
    "nombre": "JGO. METALES BIELA STD ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "414",
    "nombre": "JGO. PINES & BOCINAS ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "415",
    "nombre": "JGO. SEPARADORES ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "416",
    "nombre": "JUEGO DE ESCOBILLAS DE CARBON",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "417",
    "nombre": "JUEGO EMPAQUES CAJA",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "418",
    "nombre": "JUEGO JEBES",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "419",
    "nombre": "JUEGO JUNTAS ACUMULADOR",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "421",
    "nombre": "JUEGO REPARACION SECADOR",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "422",
    "nombre": "JUNTA TORICA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "423",
    "nombre": "JUNTAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "424",
    "nombre": "JUNTAS ANULAR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "425",
    "nombre": "JUNTAS DE GOMA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "426",
    "nombre": "JUNTAS ENFRIADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "427",
    "nombre": "JUNTAS REGLA COMBUSTIBLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "428",
    "nombre": "JUNTAS TAPA EJE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "429",
    "nombre": "KIT ACC. 550464",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "430",
    "nombre": "KIT ACCESSORIO 3093099 ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "431",
    "nombre": "KIT ACCESSORIO 3093100 ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "432",
    "nombre": "KIT BUJE EXTREMO TIPO PIN ST",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "433",
    "nombre": "KIT BUJE PIVOTE QA X 1 TERMINAL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "434",
    "nombre": "KIT BUJES DE PALANCA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "435",
    "nombre": "KIT CAMISETA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "436",
    "nombre": "KIT COMPLETO BOMBA DE ACEITE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "437",
    "nombre": "KIT DE ADAPTADORES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "438",
    "nombre": "KIT DE BOMBA DE PUERTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "439",
    "nombre": "KIT DE BOMBIN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "440",
    "nombre": "KIT DE BUJES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "441",
    "nombre": "KIT DE CABEZA EMPUJADOR CALIPER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "442",
    "nombre": "KIT DE CONECTORES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "443",
    "nombre": "KIT DE MANTENIMIENTO DE MOTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "444",
    "nombre": "KIT DE METAL BANCADA MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "445",
    "nombre": "KIT DE METAL DE BANCADA CUMMINS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "446",
    "nombre": "KIT DE MORDAZAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "447",
    "nombre": "KIT DE O-RING",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "448",
    "nombre": "KIT DE OVERHAUL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "450",
    "nombre": "KIT DE REPARO DE PISTON CALIPER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "451",
    "nombre": "KIT DE SECADOR DE AIRE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "452",
    "nombre": "KIT DE SERVO DE EMBRAGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "454",
    "nombre": "KIT EMPAQUE ALTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "455",
    "nombre": "KIT EMPAQUE BAJA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "456",
    "nombre": "KIT EMPAQUE COMPRESORA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "457",
    "nombre": "KIT ENGRANAJE GUARDAPOLVO AJUSTADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "458",
    "nombre": "KIT GUIAS Y SELLOS REPARO CALIPER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "459",
    "nombre": "KIT LAINAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "460",
    "nombre": "KIT PERNO AUTOMATICO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "461",
    "nombre": "KIT PINES Y BOCINAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "463",
    "nombre": "KIT PISTON SELECTOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "464",
    "nombre": "KIT REPARACION 272800 ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "465",
    "nombre": "KIT REPARACION RETARDADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "466",
    "nombre": "KIT REPARO DE CALIPER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "467",
    "nombre": "KIT SECADOR AIRE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "468",
    "nombre": "KIT SELLOS Y GUIAS REPARO CALIPER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "469",
    "nombre": "KIT SINCRONIZADOR ALTA\/BAJA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "470",
    "nombre": "KIT VALVUL PURGA SECADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "471",
    "nombre": "KIT VALVULA FRENO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "472",
    "nombre": "KIT VALVULA RETENCION ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "473",
    "nombre": "LAINA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "474",
    "nombre": "LAINA B\/ INYECCION ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "475",
    "nombre": "LAINA CAMISETA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "476",
    "nombre": "LAINA PLANETARIO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "477",
    "nombre": "LAINA SATELITE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "478",
    "nombre": "LAINAS B\/ OIL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "479",
    "nombre": "LAINAS PLANETARIO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "480",
    "nombre": "LAMINA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "481",
    "nombre": "LAMINA CALIBRADORA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "482",
    "nombre": "LAPICEROS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "483",
    "nombre": "LED BLANCO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "484",
    "nombre": "LED DE PLACA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "485",
    "nombre": "LED DE SALON",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "486",
    "nombre": "LETRAS ROTULADO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "487",
    "nombre": "LIJAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "488",
    "nombre": "LIMPIA CONTACTO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "489",
    "nombre": "LIQUIDO DE FRENO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "490",
    "nombre": "LLANTA DE SEGUNDA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "491",
    "nombre": "LLANTA NUEVA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "492",
    "nombre": "LLAVE DE PUERTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "493",
    "nombre": "LUNA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "494",
    "nombre": "MACHIMBRE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "495",
    "nombre": "MANDO DE LUCES PLUMILLAS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "496",
    "nombre": "MANGUERA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "497",
    "nombre": "MANGUERA AGUA DE RETARDADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "498",
    "nombre": "MANGUERA CODO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "499",
    "nombre": "MANGUERA COMPLETA DESHIDRATADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "500",
    "nombre": "MANGUERA DE AGUA PARA RADIADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "501",
    "nombre": "MANGUERA DE AIRE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "502",
    "nombre": "MANGUERA EMBRAGUE ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "503",
    "nombre": "MANGUERA INTERCOOLER ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "504",
    "nombre": "MANGUERA LUBRICADORA COLLARIN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "505",
    "nombre": "MANGUERA RETORNO ACEITE TURBO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "506",
    "nombre": "MANGUERA TUBO REFRIGERACION RETARDER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "507",
    "nombre": "MANGUERA VASTON",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "508",
    "nombre": "MANGUITO CORREDERA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "509",
    "nombre": "MANIJA EXT. 356085 ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "510",
    "nombre": "MANITO CARRETA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "511",
    "nombre": "MANOJO VOLVO CABLES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "512",
    "nombre": "MASTER DE BOMBIN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "513",
    "nombre": "MASTER DE EMBRAGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "514",
    "nombre": "MASTER DE FRENO COMPLETO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "515",
    "nombre": "MEDIA LUNA DUMPER ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "516",
    "nombre": "MEDIA LUNA JEBE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "517",
    "nombre": "MEDIDOR ACEITE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "518",
    "nombre": "METAL BANCADA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "519",
    "nombre": "METAL BIELA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "520",
    "nombre": "METAL BIELA 0.10",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "521",
    "nombre": "METAL BIELA STD",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "522",
    "nombre": "METAL DE BIELA BAJA CUMMINS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "523",
    "nombre": "METAL DE BIELA BAJA MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "524",
    "nombre": "METAL DE BIELA CUMMINS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "525",
    "nombre": "METAL DE BIELA MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "526",
    "nombre": "MICA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "527",
    "nombre": "MINIRELAY",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "528",
    "nombre": "MORDAZA DE CALIPER DERECHO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "529",
    "nombre": "MORDAZA DE CALIPER IZQUIERDO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "530",
    "nombre": "MULTIPLE ESCAPE ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "532",
    "nombre": "NIPLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "533",
    "nombre": "NIPLE DE MACHIMBRE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "534",
    "nombre": "O-RING 11 X 2",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "535",
    "nombre": "O-RING 15 X 4",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "536",
    "nombre": "O-RING 16 X 3",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "537",
    "nombre": "O-RING 180 X 3",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "538",
    "nombre": "O-RING 190 X 4",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "539",
    "nombre": "O-RING 22 X 2.5",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "540",
    "nombre": "O-RING 25 X 4",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "541",
    "nombre": "O-RING 37 X 3",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "542",
    "nombre": "O-RING 38 X 3",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "543",
    "nombre": "O-RING 41 X 2",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "544",
    "nombre": "O-RING 53 X 3",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "545",
    "nombre": "O-RING 60 X 3",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "546",
    "nombre": "O-RING 66 X 1.5",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "547",
    "nombre": "O-RING 72 X 3",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "548",
    "nombre": "O-RING 76 X 1.5",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "549",
    "nombre": "ORING INYECTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "550",
    "nombre": "ORING TAPA VALVULA TOP BRAKE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "551",
    "nombre": "OTRO FERRETERIA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "552",
    "nombre": "PAGO A PNP",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "553",
    "nombre": "PALANCA LIMPIA P. ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "554",
    "nombre": "PALANCA TRICO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "555",
    "nombre": "PAPEL BOND",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "556",
    "nombre": "PAPEL TERMICO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "557",
    "nombre": "PAPELETA TRANSITO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "558",
    "nombre": "PARABRISA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "559",
    "nombre": "PARACHOQUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "560",
    "nombre": "PARCHE CHICO DE LLANTA (DELANTERA)",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "561",
    "nombre": "PARCHE CHICO DE LLANTA (TRASERA)",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "562",
    "nombre": "PARCHE GRANDE DE LLANTA (DELANTERA)",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "563",
    "nombre": "PARCHE GRANDE DE LLANTA (TRASERA)",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "564",
    "nombre": "PARRILLA MASCARA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "565",
    "nombre": "PASE AGUA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "566",
    "nombre": "PATIN EMBRAGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "567",
    "nombre": "PATINES DELANTEROS MB184 MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "568",
    "nombre": "PATINES POSTERIOR MI88 MERCEDEZ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "569",
    "nombre": "PATINES POSTERIORES 4710 MODASA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "570",
    "nombre": "PATINES POSTERIORES FD88 MODASA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "571",
    "nombre": "PEDAL ACELERADOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "572",
    "nombre": "PEDAL FRENO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "573",
    "nombre": "PERITAJE DE TRANSITO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "574",
    "nombre": "PERNO B\/ INYECCION ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "575",
    "nombre": "PERNO BALANCIN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "576",
    "nombre": "PERNO BANCA MOTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "577",
    "nombre": "PERNO C\/ RUEDA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "578",
    "nombre": "PERNO CULATA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "580",
    "nombre": "PERNO DE CINTA DE CORONA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "581",
    "nombre": "PERNO GUIA CAJA CAMBIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "582",
    "nombre": "PERNO RUEDA POSTERIOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "583",
    "nombre": "PERNO TEMPLADOR DE CORREA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "584",
    "nombre": "PERNOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "585",
    "nombre": "PERNOS CODIGO123",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "586",
    "nombre": "PERNOS CODIGO124",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "587",
    "nombre": "PIEZA DE DESLIZAMIENTO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "588",
    "nombre": "PIN DE MUELLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "589",
    "nombre": "PIN DE PISTON CUMMINS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "590",
    "nombre": "PIN DE PISTON MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "591",
    "nombre": "PINES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "592",
    "nombre": "PINES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "620",
    "nombre": "PISTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "621",
    "nombre": "PISTA CIGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "622",
    "nombre": "PISTON",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "623",
    "nombre": "PISTON COMPRESORA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "624",
    "nombre": "PISTON CUMMINS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "625",
    "nombre": "PISTON DE COMPRESORA CON ANILLOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "626",
    "nombre": "PISTON DE ENFRIADOR DE ACEITE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "627",
    "nombre": "PISTON DE PUERTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "628",
    "nombre": "PISTON MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "629",
    "nombre": "PITON RUEDA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "630",
    "nombre": "PIVOT",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "631",
    "nombre": "PLACA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "632",
    "nombre": "PLATINA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "633",
    "nombre": "PLATO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "634",
    "nombre": "PLATO 1RA 2DA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "635",
    "nombre": "PLATO 1RA 2DA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "636",
    "nombre": "PLATO 5TA RUEDA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "637",
    "nombre": "PLATO DE EMBRAGUE MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "638",
    "nombre": "PLATO SINCRONIZADOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "639",
    "nombre": "PLATO SINCRONIZADOR 5TA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "640",
    "nombre": "PLATO SINCRONIZADOR 5TA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "641",
    "nombre": "PLATO SINCRONIZADOR 6TA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "642",
    "nombre": "PLATO SINCRONIZADOR 6TA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "643",
    "nombre": "PLATO TURBO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "644",
    "nombre": "PLATO VALVULA COMPRESORA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "645",
    "nombre": "PLUMILLA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "646",
    "nombre": "POLEA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "647",
    "nombre": "PORTADIODO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "648",
    "nombre": "PORTADIODO GRANDE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "649",
    "nombre": "PROTECTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "650",
    "nombre": "PUENTE DE VALVULA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "651",
    "nombre": "PULMON DE FRENO FRONTAL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "652",
    "nombre": "PULMON DE FRENO POSTERIOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "653",
    "nombre": "RACHET DELANTERO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "654",
    "nombre": "RACHET FRENO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "655",
    "nombre": "RACHET POSTERIOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "656",
    "nombre": "RACOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "657",
    "nombre": "RADIADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "658",
    "nombre": "RATCHET AUT. FRENO 1-1\/2",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "659",
    "nombre": "REDUCTOR DE GAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "660",
    "nombre": "REDUCTOR TOPOGRAFO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "661",
    "nombre": "REFRIGERANTE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "662",
    "nombre": "REGULADOR RACHET ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "663",
    "nombre": "RELAY",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "664",
    "nombre": "RELAY DE ALTERNADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "665",
    "nombre": "RELE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "666",
    "nombre": "REMACHE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "667",
    "nombre": "REMACHE 10-10",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "668",
    "nombre": "REMACHE 10-8",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "669",
    "nombre": "REMACHE 8-16",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "670",
    "nombre": "REMACHE 8-18",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "672",
    "nombre": "REPARACION DE FRENO DE MOTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "674",
    "nombre": "RESERVORIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "675",
    "nombre": "RESORTE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "676",
    "nombre": "RESORTE ACUMULADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "677",
    "nombre": "RESORTE DE DISCO DE EMBRAGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "678",
    "nombre": "RESORTE MERCEDEZ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "679",
    "nombre": "RESORTE MODASA CHICO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "680",
    "nombre": "RESORTE MODASA GRANDE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "681",
    "nombre": "RESORTES INTER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "682",
    "nombre": "RETARDADOR VOITH COMPLETO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "683",
    "nombre": "RETEN ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "684",
    "nombre": "RETEN ARBOL ACC",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "685",
    "nombre": "RETEN BRIDA DE CAJA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "686",
    "nombre": "RETEN CIGUE. DELANTERO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "687",
    "nombre": "RETEN DE RUEDA POST",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "688",
    "nombre": "RETEN DE TEMPLADOR DE CORREAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "689",
    "nombre": "RETEN DE VALVULA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "690",
    "nombre": "RETEN DELANTERO MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "691",
    "nombre": "RETEN DELANTERO MODASA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "696",
    "nombre": "RETEN POSTERIOR MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "697",
    "nombre": "RETEN POSTERIOR MERCEDES + SEGUROS + SERVICIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "698",
    "nombre": "RETEN POSTERIOR MODASA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "699",
    "nombre": "RETEN POSTERIOR MODASA+SEGUROS+SERVICIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "700",
    "nombre": "RETEN RDA, DELANTERA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "701",
    "nombre": "RETEN RDA, POSTERIOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "702",
    "nombre": "RETEN RETARDADOR DE CAJA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "703",
    "nombre": "RETEN RUEDA DELANTERA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "704",
    "nombre": "RETEN SALIDA CAJA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "705",
    "nombre": "RETENES VALVULA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "706",
    "nombre": "REVISION TECNICA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "707",
    "nombre": "ROD\/PISTA RUEDA CARRETA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "708",
    "nombre": "ROD\/PISTA RUEDA.EXT",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "709",
    "nombre": "RODAJE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "710",
    "nombre": "RODAJE DE POLEA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "711",
    "nombre": "RODAJE DE POLEA TEMPLADOR DE COMPRESORA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "712",
    "nombre": "RODAJE DE RUEDA MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "713",
    "nombre": "RODAJE DE VOLANTE MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "714",
    "nombre": "RODAJE DE VOLANTE MODASA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "715",
    "nombre": "RODAJE PILOTO DE CORONA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "716",
    "nombre": "RODAMIENTO DE COLLARIN ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "717",
    "nombre": "RODAMIENTOS DE CALIPER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "718",
    "nombre": "RODILLO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "719",
    "nombre": "RODILLO TENSOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "720",
    "nombre": "ROTOR INT.",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "721",
    "nombre": "ROTULA DIRECCION",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "722",
    "nombre": "SAPO RUEDA DELANTERA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "723",
    "nombre": "SAPO RUEDA POSTERIOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "724",
    "nombre": "SEGURO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "725",
    "nombre": "SEGURO ARANDELA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "726",
    "nombre": "SEGURO DE ZAPATA POSTERIOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "727",
    "nombre": "SEGURO EJE PROPULSOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "728",
    "nombre": "SEGURO ESTRELLA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "730",
    "nombre": "SELECCIONADOR DE CAMBIOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "731",
    "nombre": "SEMIEJE DE PROPULSION",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "732",
    "nombre": "SENSOR ABC",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "734",
    "nombre": "SENSOR DE FLUJO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "735",
    "nombre": "SENSOR DE NEUTRO (RETROCESO)",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "736",
    "nombre": "SENSOR DE NIVEL DE AGUA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "737",
    "nombre": "SENSOR DE PRESION DE RETARDE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "738",
    "nombre": "SENSOR DE TEMPERATURA DE MOTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "739",
    "nombre": "SENSOR DE VELOCIDAD",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "50",
    "nombre": "ARANDELA DE PRESI?N",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "53",
    "nombre": "ARA?A \/ BRIDA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "97",
    "nombre": "BOCINAS CIGUE?AL ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "101",
    "nombre": "BOCINAS MU?ON",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "102",
    "nombre": "BOCINAS MU?ON GRUESO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "107",
    "nombre": "BOLSA SUSPENSI?N ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "134",
    "nombre": "BUJE 5? RUEDA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "160",
    "nombre": "CA?ERIA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "161",
    "nombre": "CA?ERIA DE AGUA DE COMPRESORA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "162",
    "nombre": "CA?ERIA DE FRENO DE MOTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "163",
    "nombre": "CA?ERIA DE PETROLEO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "164",
    "nombre": "CA?O DE JARDIN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "189",
    "nombre": "CIG?E?AL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "203",
    "nombre": "COJ?N AGUJAS 5TA MARCHA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "213",
    "nombre": "CONEXI?N CANERIA PLASTICA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "229",
    "nombre": "CRUCETA CA?A DE DIRECCI?N",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "290",
    "nombre": "ESPARRAGO MU?ON ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "420",
    "nombre": "JUEGO PASADOR MU?ON",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "449",
    "nombre": "KIT DE REPARACI?N MAYOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "453",
    "nombre": "KIT DISCOS DE FRICCI?N",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "462",
    "nombre": "KIT PINES Y BUJES DIRECCI?N",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "531",
    "nombre": "MU?ON",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "579",
    "nombre": "PERNO DE CALIBRACI?N",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "593",
    "nombre": "PI?O 4TA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "594",
    "nombre": "PI?ON",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "595",
    "nombre": "PI?ON & CORONA 40?13 ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "596",
    "nombre": "PI?ON 1RA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "597",
    "nombre": "PI?ON 2DA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "598",
    "nombre": "PI?ON 3RA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "599",
    "nombre": "PI?ON 4TA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "600",
    "nombre": "PI?ON 5TA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "601",
    "nombre": "PI?ON 5TA TREN FIJO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "602",
    "nombre": "PI?ON 6TA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "603",
    "nombre": "PI?ON ARRANCADOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "604",
    "nombre": "PI?ON AUTOMATICO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "605",
    "nombre": "PI?ON B\/ ACEITE ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "606",
    "nombre": "PI?ON BOMBA DE ACEITE EXT",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "607",
    "nombre": "PI?ON CAJA 3RA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "608",
    "nombre": "PI?ON CIG?E?AL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "609",
    "nombre": "PI?ON DE ATAQUE Y CORONA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "610",
    "nombre": "PI?ON DISTRIBUCION ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "611",
    "nombre": "PI?ON DOBLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "612",
    "nombre": "PI?ON EJE AUTOMATICO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "613",
    "nombre": "PI?ON EJE DESLIZANTE ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "614",
    "nombre": "PI?ON HELICOIDAL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "615",
    "nombre": "PI?ON MELLIZO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "616",
    "nombre": "PI?ON PLANETARIO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "617",
    "nombre": "PI?ON RETROCESO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "618",
    "nombre": "PI?ON SATELITE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "619",
    "nombre": "PI?ON SOLAR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "671",
    "nombre": "REPARACI?N DE BOMBA DE AGUA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "673",
    "nombre": "REPARACION DE MU?ON",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "692",
    "nombre": "RET?N ENTRADA 1? CORONA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "693",
    "nombre": "RETEN ENTRADA PI?ON DIF",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "694",
    "nombre": "RETEN PI?O DE ATAQUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "695",
    "nombre": "RETEN POST. CIG?E?AL ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "729",
    "nombre": "SEGUROS(CU?A)",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "733",
    "nombre": "SENSOR CIG?E?AL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "740",
    "nombre": "SENSOR INDICADOR DESGASTE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "741",
    "nombre": "SENSOR PRESI?N ACEITE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "742",
    "nombre": "SENSOR PRESION DE AIRE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "743",
    "nombre": "SENSOR RETARDADOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "744",
    "nombre": "SENSOR RETRO CAJA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "745",
    "nombre": "SENSOR REVOLUCI?N EJE LEVAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "746",
    "nombre": "SENSOR TACOMETRO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "747",
    "nombre": "SENSOR TEMPERATURA DE RETARDADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "748",
    "nombre": "SERVICIO  AUXILIO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "749",
    "nombre": "SERVICIO  INSPECCIONAR REFRIGERANTE DEL MOTOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "750",
    "nombre": "SERVICIO ADAPTACION DE BOMBIN",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "751",
    "nombre": "SERVICIO ALINEACION",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "752",
    "nombre": "SERVICIO AMARRE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "753",
    "nombre": "SERVICIO ASEGURADO DE PARACHOQUE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "754",
    "nombre": "SERVICIO ASEGURADO Y EMBOCINADO DE BRAZO DE ESPEJO Y PERNOS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "755",
    "nombre": "SERVICIO ASEGURAR:",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "756",
    "nombre": "SERVICIO BALANCEO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "757",
    "nombre": "SERVICIO BASE DE ESPEJO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "758",
    "nombre": "SERVICIO BODEGA DE PUERTA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "759",
    "nombre": "SERVICIO CAMBIAR ACEITE DE LA DIRECCI?N HIDR?ULICA \n",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "760",
    "nombre": "SERVICIO CAMBIAR CUBOS DE RUEDA DELANTEROS Y TRASEROS ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "761",
    "nombre": "SERVICIO CAMBIAR ELEMENTO FILTRO DE AIRE POR INTERIOR ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "762",
    "nombre": "SERVICIO CAMBIAR ELEMENTO FILTRO DE AIRE SECUNDARIO POR EXTERIOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "763",
    "nombre": "SERVICIO CAMBIAR FILTRO DE COMBUSTIBLE SECUNDARIO ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "764",
    "nombre": "SERVICIO CAMBIE MANGUERAS DEL SISTEMA HIDR?ULICO Y DE\nREFRIGERACI?N. ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "765",
    "nombre": "SERVICIO CAMBIO BASE DE ASIENTO DE PASJEROS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "766",
    "nombre": "SERVICIO CAMBIO BUJES Y ENGRASE EL MOTOR DE ARRANQUE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "767",
    "nombre": "SERVICIO CAMBIO CABLE DE BUJ?AS ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "768",
    "nombre": "SERVICIO CAMBIO CABLES",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "769",
    "nombre": "SERVICIO CAMBIO DE ACCESORIO DE BOTELLA DE PUERTA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "770",
    "nombre": "SERVICIO CAMBIO DE ACEESORIO DE SECADOR DE AIRE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "771",
    "nombre": "SERVICIO CAMBIO DE ACEITE DE MOTOR Y FILTRO ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "772",
    "nombre": "SERVICIO CAMBIO DE ACEITE DIFERENCIAL ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "773",
    "nombre": "SERVICIO CAMBIO DE ACEITE TRANSMISI?N",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "774",
    "nombre": "SERVICIO CAMBIO DE BRAZO DE ESPEJO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "775",
    "nombre": "SERVICIO CAMBIO DE EMPAQUE DE CORONA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "776",
    "nombre": "SERVICIO CAMBIO DE FORRO DE DISCO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "777",
    "nombre": "SERVICIO CAMBIO DE KIT DE BOMBIN DE EMBRAGUE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "778",
    "nombre": "SERVICIO CAMBIO DE LLANTA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1112",
    "nombre": "BOCINA AUTOMOTRICES 10X",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "780",
    "nombre": "SERVICIO CAMBIO DE PISTON DE PUERTA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "781",
    "nombre": "SERVICIO CAMBIO DE PITON",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "782",
    "nombre": "SERVICIO CAMBIO DE RACHET",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "783",
    "nombre": "SERVICIO CAMBIO DE RESORTES RUEDA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "784",
    "nombre": "SERVICIO CAMBIO DE RETEN DE RUEDA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "785",
    "nombre": "SERVICIO CAMBIO DE SEGURO DE PATIN RUEDA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "786",
    "nombre": "SERVICIO CAMBIO DE SELLO DE EMBRAGUE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "787",
    "nombre": "SERVICIO CAMBIO DE SOPORTE DE CAJA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "788",
    "nombre": "SERVICIO CAMBIO DE TAMBOR DE FRENOS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "789",
    "nombre": "SERVICIO CAMBIO DE VIBRADOR ESCAPE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "790",
    "nombre": "SERVICIO CAMBIO DE VIBRADOX",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "791",
    "nombre": "SERVICIO CAMBIO DE ZAPATA DE FRENOS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "792",
    "nombre": "SERVICIO CAMBIO EL FILTRO DE LA TRANSMISI?N. ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "793",
    "nombre": "SERVICIO CAMBIO LOS BOMBILLOS QUEMADOS. ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "794",
    "nombre": "SERVICIO CAMBIO LOS SWICHES AVERIADOS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "795",
    "nombre": "SERVICIO CAMBIO REMACHES RUEDA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "796",
    "nombre": "SERVICIO CAMBIO RODAMIENTO DE LA RUEDA. ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "797",
    "nombre": "SERVICIO COLOCACION DE ESPEJOS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "798",
    "nombre": "SERVICIO COLOCACION DE VENTANA FIJA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "799",
    "nombre": "SERVICIO COLOCACION PASAMANO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "800",
    "nombre": "SERVICIO COLOCADA DE BOCINA\/PERNO BARRA ESTABILIZADORA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "801",
    "nombre": "SERVICIO COLOCADA DE LLANTA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "802",
    "nombre": "SERVICIO COLOCADO DE PLANCHA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "803",
    "nombre": "SERVICIO CONSTRUCCI?N TALLER",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "804",
    "nombre": "SERVICIO CUADRADO CARROCERIA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "805",
    "nombre": "SERVICIO CUADRADO DE PUERTA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "806",
    "nombre": "SERVICIO DE:",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "807",
    "nombre": "SERVICIO DESMONTAR ? LAVAR TANQUE DE COMBUSTIBLE-MONTAR ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "808",
    "nombre": "SERVICIO DESMONTAR PARABRISA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "809",
    "nombre": "SERVICIO DIAGNOSTICO DE FALLA PERDIDA DE POTENCIA (SCANNER)",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "810",
    "nombre": "SERVICIO ELAINAR BRAZO GIRATORIO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "811",
    "nombre": "SERVICIO ENDEREZADO CARROCERIA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "812",
    "nombre": "SERVICIO ENDEREZADO DE BRAZO DE ESPEJO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "813",
    "nombre": "SERVICIO ENDEREZADO DE PATIN",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "814",
    "nombre": "SERVICIO ENDEREZAR Y SOLDAR ESTRUCTURA LATERAL",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "815",
    "nombre": "SERVICIO ENGRASE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "816",
    "nombre": "SERVICIO ENGRASE RODAMIENTOS DEL ALTERNADOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "817",
    "nombre": "SERVICIO ENTORNILLADO DE JEBE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "818",
    "nombre": "SERVICIO ESMERILLAR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "819",
    "nombre": "SERVICIO EXTRACCION DE RODAJE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "820",
    "nombre": "SERVICIO FABRICACION DE BRAZOS DE ESPEJO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "821",
    "nombre": "SERVICIO FABRICACION DE MULTIPLE DE TUBO DE ESCAPE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "822",
    "nombre": "SERVICIO FABRICACION DE:",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "823",
    "nombre": "SERVICIO FIBRA DE VIDRIO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "824",
    "nombre": "SERVICIO FIBRA DE VIDRIO PARACHOQUE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "825",
    "nombre": "SERVICIO GRUA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "826",
    "nombre": "SERVICIO INSTALACION DE FARO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "827",
    "nombre": "SERVICIO INSTALACION DE FOCO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "828",
    "nombre": "SERVICIO INSTALACION DE FUNDA COMPLETA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "829",
    "nombre": "SERVICIO INSTALACION DE LED",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "830",
    "nombre": "SERVICIO INSTALACION DE MICA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "831",
    "nombre": "SERVICIO INSTALACION DE PARABRISA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "832",
    "nombre": "SERVICIO LAVADO DE INTERCOOLER",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "833",
    "nombre": "SERVICIO LAVADO DE RADIADOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "834",
    "nombre": "SERVICIO LIMPIAR GOBERNADOR DE LA V?LVULA DEL FRENO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "835",
    "nombre": "SERVICIO LIMPIAR V?LVULA DE DESCARGA ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "836",
    "nombre": "SERVICIO LIMPIEZA LOS BORNES DE LA BATER?A. ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "837",
    "nombre": "SERVICIO MANTENIMIENTO AL MOTOR DE ARRANQUE Y\nCAMBIE LOS CARBONES.",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "838",
    "nombre": "SERVICIO MANTENIMIENTO DE SISTEMA DE UREA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "839",
    "nombre": "SERVICIO MANTENIMIENTO DE:",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "840",
    "nombre": "SERVICIO MANTENIMIENTO GENERAL DE LA BOMBA DEL\nCOMBUSTIBLE. ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "841",
    "nombre": "SERVICIO MASILLADO CARROCERIA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "842",
    "nombre": "SERVICIO MONTURA DE:",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "843",
    "nombre": "SERVICIO PARCHE DE LLANTA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "844",
    "nombre": "SERVICIO PEAJE AUXULIO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "845",
    "nombre": "SERVICIO PINTURA CARROCERIA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "846",
    "nombre": "SERVICIO PINTURA DE PARACHOQUE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "847",
    "nombre": "SERVICIO PLANCHADO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "848",
    "nombre": "SERVICIO POLARIZADO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "849",
    "nombre": "SERVICIO PRENSADO BARRA AUXILIAR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "850",
    "nombre": "SERVICIO PRENSADO BARRA CENTRAL",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "851",
    "nombre": "SERVICIO PRENSADO DE BARRA CORTA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "852",
    "nombre": "SERVICIO PRENSADO DE CA?ERIA DE AIRE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "853",
    "nombre": "SERVICIO PRENSADO TERMINALES",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "854",
    "nombre": "SERVICIO PRESTADA DE LLANTA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "855",
    "nombre": "SERVICIO RECARGA DE EXTINTOR DE 30 LIBRAS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "856",
    "nombre": "SERVICIO RECONSTRUCCION DE:",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "857",
    "nombre": "SERVICIO RECTIFICACION DE BASE DE PLATO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "858",
    "nombre": "SERVICIO RECTIFICACION DE BASE DE RODAJE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "859",
    "nombre": "SERVICIO RECTIFICADA DE VOLANTE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "860",
    "nombre": "SERVICIO REFORZADO DE TUBOS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "861",
    "nombre": "SERVICIO REFORZADO DE:",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "862",
    "nombre": "SERVICIO REGULACION DE CORONA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "863",
    "nombre": "SERVICIO REGULADA DE FRENOS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "864",
    "nombre": "SERVICIO REGULADA DE PUERTA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "865",
    "nombre": "SERVICIO REMACHADO CUPULA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "866",
    "nombre": "SERVICIO REMACHADO PARRILLA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "867",
    "nombre": "SERVICIO REMACHAR PLANCHA LATERAL",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "868",
    "nombre": "SERVICIO REPARACION ,CUADRADA Y COLOCADA FRONTAL DE 2 PARABRISAS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "869",
    "nombre": "SERVICIO REPARACION DE ALTERNADOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "870",
    "nombre": "SERVICIO REPARACION DE ARRANCADOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "871",
    "nombre": "SERVICIO REPARACION DE BOTELLA DE PUERTA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "872",
    "nombre": "SERVICIO REPARACION DE CAJA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "873",
    "nombre": "SERVICIO REPARACION DE CAMPANA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1142",
    "nombre": "REPARACION DE CORONA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "876",
    "nombre": "SERVICIO REPARACION DE MOTOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "877",
    "nombre": "SERVICIO REPARACION DE MUELLES (BAJAR PIQUETE DE MUELLE)",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "878",
    "nombre": "SERVICIO REPARACION DE MUELLES (CAMBIO ABRAZADERA)",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "879",
    "nombre": "SERVICIO REPARACION DE MUELLES (CAMBIO DE BOCINAS)",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "880",
    "nombre": "SERVICIO REPARACION DE MUELLES (CAMBIO HOJA 1)",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "881",
    "nombre": "SERVICIO REPARACION DE MUELLES (CAMBIO HOJA 2)",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "882",
    "nombre": "SERVICIO REPARACION DE MUELLES (CAMBIO HOJA 3)",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "883",
    "nombre": "SERVICIO REPARACION DE MUELLES (CAMBIO HOJA 4)",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "884",
    "nombre": "SERVICIO REPARACION DE MUELLES (CAMBIO HOJA 5",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "885",
    "nombre": "SERVICIO REPARACION DE MUELLES (CAMBIO HOJA 6)",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "886",
    "nombre": "SERVICIO REPARACION DE MUELLES (CAMBIO HOJA 7)",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "887",
    "nombre": "SERVICIO REPARACION DE MUELLES (CAMBIO PERNO CENTRAL)",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "888",
    "nombre": "SERVICIO REPARACION DE MUELLES (CAMBIO PIN)",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "889",
    "nombre": "SERVICIO REPARACION DE MUELLES (CAMBIO SOPORTE)",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "890",
    "nombre": "SERVICIO REPARACION DE MUELLES (CENTRADO DE FUNDA)",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "891",
    "nombre": "SERVICIO REPARACION DE MUELLES (EXTRAER SOPORTE DE MUELLE)",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "892",
    "nombre": "SERVICIO REPARACION DE MUELLES (RELLENADO SOPORTE DE MUELLE)",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "893",
    "nombre": "SERVICIO REPARACION DE PALANCA DE CAMBIOS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "894",
    "nombre": "SERVICIO REPARACION DE PEDAL DE FRENO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "895",
    "nombre": "SERVICIO REPARACION DE PISTON DE PUERTA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "896",
    "nombre": "SERVICIO REPARACION DE PUERTA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "897",
    "nombre": "SERVICIO REPARACION DE SERVO DE EMBRAGUE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "898",
    "nombre": "SERVICIO REPARACION LETRERO ELECTRONICO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "899",
    "nombre": "SERVICIO REPATACION PANEL",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "900",
    "nombre": "SERVICIO REVESTIMIENTO DE EJE DESLIZANTE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "901",
    "nombre": "SERVICIO REVISADA DE PITON DE LLANTA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "902",
    "nombre": "SERVICIO REVISION DE LLANTA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "903",
    "nombre": "SERVICIO RIMADO DE BOCINAS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "904",
    "nombre": "SERVICIO ROTACION DE LLANTA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "905",
    "nombre": "SERVICIO RUEDA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "906",
    "nombre": "SERVICIO SOLDADURA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "907",
    "nombre": "SERVICIO SOLDADURA ASIENTO DE CONDUCTOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "908",
    "nombre": "SERVICIO SOLDADURA BASE DE ASIENTOS DE PASAJEROS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "909",
    "nombre": "SERVICIO SOLDADURA BISAGRA DE PUERTA + PERNOS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "910",
    "nombre": "SERVICIO SOLDADURA DE BASE DE:",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "911",
    "nombre": "SERVICIO SOLDADURA DE PATIN",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "912",
    "nombre": "SERVICIO SOLDADURA DE PUERTA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "913",
    "nombre": "SERVICIO SOLDADURA DE SOPORTE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "914",
    "nombre": "SERVICIO SOLDADURA DEBRAZO DE ESPEJO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "915",
    "nombre": "SERVICIO SOLDADURA EJE PIN DE ZAPATA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "916",
    "nombre": "SERVICIO SOLDAR TAPA DE ROSCA DE CORONA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "917",
    "nombre": "SERVICIO SOPORTE DE PARACHOQUE POSTERIOR Y PERNOS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "918",
    "nombre": "SERVICIO STICKER ROTULADO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "919",
    "nombre": "SERVICIO TORNO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "920",
    "nombre": "SERVO DE DIRECCION ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "921",
    "nombre": "SERVO DE EMBRAGUE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "922",
    "nombre": "SERVO DIRECCIONAL ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "923",
    "nombre": "SIKAFLEX",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "924",
    "nombre": "SILICONA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "925",
    "nombre": "SILICONA MEGAGREY",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "926",
    "nombre": "SINCRONIZADOR ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "927",
    "nombre": "SINCRONOZADOR COMPLETO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "928",
    "nombre": "SINIESTRO DE:",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "929",
    "nombre": "SOAT\/RC",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "930",
    "nombre": "SOCKET",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "931",
    "nombre": "SOLDIMIX",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "932",
    "nombre": "SOLENOIDE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "933",
    "nombre": "SOLENOIDE ARRANCADOR 12V",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "934",
    "nombre": "SOPORTE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "935",
    "nombre": "SOPORTE CARDAN ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "936",
    "nombre": "SOPORTE CHASIS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "937",
    "nombre": "SOPORTE DAMPER",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "938",
    "nombre": "SOPORTE DE CARDAN ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "939",
    "nombre": "SOPORTE DE MUELLE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "940",
    "nombre": "SOPORTE MOTOR ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "941",
    "nombre": "SOPORTE RODAJE CARDAN",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "942",
    "nombre": "SOPORTE VALVULA PROPORCIONAL DE MESA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "943",
    "nombre": "SWITCH F. PIE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "944",
    "nombre": "SWITCH PALANCA ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "945",
    "nombre": "TACOGRAFO 24HRS ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "946",
    "nombre": "TACOGRAFO 7DIAS ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "947",
    "nombre": "TALADRO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "948",
    "nombre": "TAMBOR DE FRENO DELANTERO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "949",
    "nombre": "TAMBOR DE FRENO POSTERIOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "950",
    "nombre": "TAMBOR DELANTERO MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "951",
    "nombre": "TAMBOR POSTERIOR MERCEDEZ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "952",
    "nombre": "TAMBORES DELANTERO MODASA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "953",
    "nombre": "TAMBORES POSTERIOR MODASA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "954",
    "nombre": "TANQUE DE EXPANSION",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "955",
    "nombre": "TAPA DE ABRAZADERAS DE CARDAN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "956",
    "nombre": "TAPA DE CIERRE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "957",
    "nombre": "TAPA DE COMPRESORA ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "958",
    "nombre": "TAPA DE MAZA DELANTERA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "959",
    "nombre": "TAPA DE:",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "960",
    "nombre": "TAPA SERVO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "961",
    "nombre": "TAPA T. PETROLEO ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "962",
    "nombre": "TAPA TANQUE AGUA ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "963",
    "nombre": "TAPAS B\/ AGUA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "964",
    "nombre": "TAPAS PORTACARBON ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "965",
    "nombre": "TAPONES",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "966",
    "nombre": "TAQUE DE RODILLOS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "967",
    "nombre": "TAXI AUXILIO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "968",
    "nombre": "TELESCOPICO DE IRECCION",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "969",
    "nombre": "TEMPLADOR CORREA ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "970",
    "nombre": "TENSOR FAJA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "971",
    "nombre": "TENSOR TEMPLADOR ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "972",
    "nombre": "TERMINAL BARRA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "973",
    "nombre": "TERMINAL DE DIRECCI?N",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "974",
    "nombre": "TERMINAL DIRECCIONAL ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "975",
    "nombre": "TERMOSTATO 60?",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "976",
    "nombre": "TERMOSTATO 75? ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "977",
    "nombre": "TERMOSTATO 75?-80? ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "978",
    "nombre": "TERMOSTATO 79? ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "979",
    "nombre": "TERMOSTATO 80? ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "980",
    "nombre": "TERMOSTATO 81?",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "981",
    "nombre": "TERMOSTATO 87? ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "982",
    "nombre": "TERMOSTATO MELLIZO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "983",
    "nombre": "TIMBRE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "984",
    "nombre": "TINTA PARA IMPRESORA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "985",
    "nombre": "TIRANTE BARRA ESTABILIZADORA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "986",
    "nombre": "TOPE DE PEDAL DE FRENO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "987",
    "nombre": "TOPES DISTANCIADORES ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "988",
    "nombre": "TOPES VALVULA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "989",
    "nombre": "TORNILLOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "990",
    "nombre": "TRAPECIO EJE LOCO ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "991",
    "nombre": "TRAPOS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "992",
    "nombre": "TREN FIJO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "993",
    "nombre": "TUBO FLEXIBLE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "994",
    "nombre": "TUBO MULTIPLE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "995",
    "nombre": "TUBOS (ESTRUCTURA)",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "996",
    "nombre": "TUERCA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "997",
    "nombre": "TUERCA COMPRESORA ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "998",
    "nombre": "TUERCA CUBO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "999",
    "nombre": "TUERCA EJE DESLIZANTE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1000",
    "nombre": "TUERCA MU?ON CHICA ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1001",
    "nombre": "TUERCA MU?ON GRANDE ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1002",
    "nombre": "TURBINA BOMBA AGUA ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1003",
    "nombre": "TURBO COMPRESOR HX35G HOLSET MODASA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1004",
    "nombre": "TURBO. MOTOR.",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1005",
    "nombre": "UNION",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1006",
    "nombre": "U?A C.C.",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1007",
    "nombre": "UREA",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1008",
    "nombre": "VALVULA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1009",
    "nombre": "VALVULA DE ADMISI?N CUMMINS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1010",
    "nombre": "V?LVULA DE APERTURA RAPIDA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1011",
    "nombre": "VALVULA DE BRAKE ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1012",
    "nombre": "VALVULA DE CONTROL",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1013",
    "nombre": "V?LVULA DE DESCARGA CON SECADOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1014",
    "nombre": "V?LVULA DE DRENAJE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1015",
    "nombre": "VALVULA DE ESCAPE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1016",
    "nombre": "VALVULA DE ESCAPE CUMMINS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1017",
    "nombre": "VALVULA DE FLUJO COMBUSTIBLE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1018",
    "nombre": "VALVULA DE PEDAL DE FRENO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1019",
    "nombre": "V?LVULA DE PROTECCI?N DE CUATRO CIRCUITOS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1020",
    "nombre": "V?LVULA GOBERNADORA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1021",
    "nombre": "VALVULA HALDEX GALLETA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1022",
    "nombre": "VALVULA LIMPIAP",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1023",
    "nombre": "VALVULA MAESTRA DE PEDAL DE FRENO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1024",
    "nombre": "V?LVULA MANUAL DE PARQUEO ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1025",
    "nombre": "VALVULA MASTER DE FRENO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1026",
    "nombre": "V?LVULA MASTER DE FRENO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1027",
    "nombre": "V?LVULA M?DULO DE CONTROL",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1028",
    "nombre": "VALVULA PISTON ACUMULADOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1029",
    "nombre": "VALVULA PROPORCIONAL ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1030",
    "nombre": "V?LVULA PURGA SECADOR AIRE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1031",
    "nombre": "VALVULA REDUCTORA DE PRESION",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1032",
    "nombre": "VALVULA REGULADOR ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1033",
    "nombre": "V?LVULA RELAY FRENO POSTERIOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1034",
    "nombre": "VALVULA SOBREPRESION",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1035",
    "nombre": "V?LVULA SOLENOIDE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1036",
    "nombre": "VALVULA TERMOSTATICA VENTILADOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1037",
    "nombre": "VALVULA WESTEGATE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1038",
    "nombre": "VALVULAS ADMISION ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1039",
    "nombre": "VALVULAS ADMISION ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1040",
    "nombre": "VARILLA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1041",
    "nombre": "VARILLA BALANCIN ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1042",
    "nombre": "VELOCIMETRO RELOJ ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1043",
    "nombre": "VENTANAS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1044",
    "nombre": "VIDRIO CORREDIZO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1045",
    "nombre": "VIDRIO DE PUERTA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1046",
    "nombre": "VOLANTE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1047",
    "nombre": "VOLANTE MOTOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1048",
    "nombre": "VOLANTE MOTOR?",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1049",
    "nombre": "YODOS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1050",
    "nombre": "YUGO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1051",
    "nombre": "YUGOS DE CARDAN",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1052",
    "nombre": "ZAPATA DELANTERO 470SD MODASA",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1053",
    "nombre": "ZAPATA DELANTERO 470SDX MODASA",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1054",
    "nombre": "ZAPATA FRENOSA 4671D MERCEDEZ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1055",
    "nombre": "ZAPATA FRENOSA 4671X MERCEDEZ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1056",
    "nombre": "ZAPATA POSTERIOR 200IID MERCEDES",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1057",
    "nombre": "ZAPATA POSTERIOR 200IIDX MERCEDES",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1058",
    "nombre": "ZAPATA POSTERIOR 4710D MODASA",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1059",
    "nombre": "ZAPATA POSTERIOR 4710DX MODASA",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1060",
    "nombre": "ZAPATAS FRENO ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1061",
    "nombre": "ZAPATAS MODASA DELANTERO 1X 4705X",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1062",
    "nombre": "ZAPATAS MODASA DELANTERO STD 4705D",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1063",
    "nombre": "ZUNCHO SACA FILTRO DE ACIETE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1064",
    "nombre": "ZUNCHO SACA FILTRO DE CADENA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1065",
    "nombre": "PLATO DE EMBRAGUE MODAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1066",
    "nombre": "VARIOS REPUESTOS KUSKA DEUDA VIEJA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1067",
    "nombre": "MASILLA (BOMFLE)",
    "unidad": "1",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1068",
    "nombre": "BATERIA MAS CASCO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1069",
    "nombre": "G.N.V.",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1070",
    "nombre": "PERNO DE MUELLE O AMORTIGUADORES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1071",
    "nombre": "MOTOR DE TRICO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1072",
    "nombre": "TERMINALES DE ENCHUFE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1073",
    "nombre": "PORTAFUSIBLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1074",
    "nombre": "PORTA SOCALO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1075",
    "nombre": "CAMISA (UNIFORME PERSONAL)",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1076",
    "nombre": "PANTALONES AZUL (UNIFORME PERSONAL)",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1077",
    "nombre": "CABLE DE BUJIA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1078",
    "nombre": "CAMBIO DE TUBO DE 4\"",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1079",
    "nombre": "ABRAZADERA DE TUBO Y ABRAZADERA DE SILENCIADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1080",
    "nombre": "VIDRIO VENTANA FIJO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1081",
    "nombre": "BORNE DE PLOMO DE BATERIA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1082",
    "nombre": "SERVICIO DE SISTEMA ELECTRICO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1083",
    "nombre": "REPARACION DE ASIENTO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1084",
    "nombre": "PNP",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1085",
    "nombre": "ORING",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1086",
    "nombre": "COLLARIN DE EMBRAGUE GOLDEN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1087",
    "nombre": "BOCINAS PARA CAMPANA DE BRONCE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1088",
    "nombre": "GASOIL",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1089",
    "nombre": "DB5 S50 UV",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1090",
    "nombre": "LATAS LATERALES",
    "unidad": "MTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1091",
    "nombre": "BOMBIN TRW",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1092",
    "nombre": "MANGUERA HIDRAHULICA PRENSADA CAJA DIRECCION",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1093",
    "nombre": "BALDE VEXTROM 80W90",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1094",
    "nombre": "SEGURO COLLARIN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1095",
    "nombre": "CHUMACERA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1096",
    "nombre": "FARO LATERAL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1097",
    "nombre": "REPARACION SERVO DE EMBRAGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1098",
    "nombre": "SOPORTE DE TANQUE DE GAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1099",
    "nombre": "MODULO DE CONTROL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1100",
    "nombre": "SENSOR PRESION TEMPMULTIPLE ADMISION",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1101",
    "nombre": "SENSOR DE TEMPERATURA DE GAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1102",
    "nombre": "BOBINA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1103",
    "nombre": "SENSOR DE HUMEDAD",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1104",
    "nombre": "HOJA DE SIERRA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1105",
    "nombre": "REPARACION DE VALVULA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1106",
    "nombre": "SERVICIO REPARACION DE VALVULA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1107",
    "nombre": "FILTRO PRINCIPAL COMBUSTIBLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1108",
    "nombre": "INSPECCION ANUAL DE TANQUE DE GAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1109",
    "nombre": "TAPA DE TANQUE D2",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1110",
    "nombre": "RELLENO DE EMBRAGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1111",
    "nombre": "KIT DE FILTRO MANTENIMIENTO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1113",
    "nombre": "TAPA DE CAJA DE CAMBIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1114",
    "nombre": "RODAJE INTERIOR DE EJE PROPULSOR G60\/G85",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1115",
    "nombre": "EMPAQUE DE CORONA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1116",
    "nombre": "RODAJE POST T. FIJO G60\/G85",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1117",
    "nombre": "BRONCE SINCRONIZADOR DE 5TA 6TA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1118",
    "nombre": "RETEN DE CAJA POSTERIOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1119",
    "nombre": "RETEN DE CAJA DELANTERO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1120",
    "nombre": "KIT DE SEGURO DE CAJA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1121",
    "nombre": "KIT DE ARRASTRE 9 PINES Y 9 RESORTES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1122",
    "nombre": "SERVICIO DE PULVERIZADA DE FILTRO DE AIRE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1123",
    "nombre": "ESPEJO CON PLATO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1124",
    "nombre": "KIT DE BOCINA DE PALANCA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1125",
    "nombre": "SERVICIO DE MUELLE POSTERIOR IZQUIERDO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1126",
    "nombre": "BOCINAS DE MUELLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1127",
    "nombre": "REPARACION DE SOPORTE DE LOS CILINDROS DE AIRE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1128",
    "nombre": "CADENA, CANDADO Y CANALETA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1129",
    "nombre": "PINTADO DE PLACA EN EXTINTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1130",
    "nombre": "CAMBIO DE SILENCIADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1131",
    "nombre": "SERVICIO DE EMBRAGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1132",
    "nombre": "PUNTOS DE GRASA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1133",
    "nombre": "RESORTES MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1134",
    "nombre": "SOPLETEADA DE FILTRO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1135",
    "nombre": "SOLDAR CAMPANA DE CAJA ALUMINIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1136",
    "nombre": "EMBOCINADO EJE CAJA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1137",
    "nombre": "FAJAS TR28 693",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1138",
    "nombre": "FAJAS TR28 445",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1139",
    "nombre": "SERVICIO REPARACION RELAY",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1140",
    "nombre": "BOCINAS DE LEVAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1141",
    "nombre": "TERMINAL DE PALANCA DE CAMBIO VOLVO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1143",
    "nombre": "MOVILIDAD",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1144",
    "nombre": "AGUA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1145",
    "nombre": "BOMBA LLAVE DE CORNETA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1146",
    "nombre": "ESPATULA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1147",
    "nombre": "REPARACION DE DISCO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1148",
    "nombre": "RECONSTRUIR SOPORTE DE MUELLE POST",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1149",
    "nombre": "SERVICIO REPARACION DE MUELLES (CAMBIO HOJA 8)",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1150",
    "nombre": "ESPARRAGOS DE RUEDA DELANTERA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1151",
    "nombre": "PUNTA 5\/8",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1152",
    "nombre": "EYECTOR DE ACEITE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1153",
    "nombre": "RELOJ DE TEMPERATURA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1154",
    "nombre": "PIÃ‘ON DE ATAQUE MED CORONA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1155",
    "nombre": "SOLDADURA DE CHASIS DE FRENO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1156",
    "nombre": "KIT DE REPARO VALVULA RELE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1157",
    "nombre": "PEAJE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1158",
    "nombre": "EMPAQUE DE TURBO COMPLETO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1159",
    "nombre": "LETRERO FUERA DE SERVICIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1160",
    "nombre": "VIATICO",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1161",
    "nombre": "BRAZO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1162",
    "nombre": "ESPEJO REDONDO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1163",
    "nombre": "RELAY DE LUZ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1164",
    "nombre": "FUSIBLE CON TERMINAL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1165",
    "nombre": "SOLDAR Y REFORZAR MARCO DE ESPEJO, BARRILLA DE ALUMINIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1166",
    "nombre": "CINTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1167",
    "nombre": "TARIFARIOS\/STICKERS",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1168",
    "nombre": "PLUMA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1169",
    "nombre": "COUTER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1170",
    "nombre": "DADOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1171",
    "nombre": "INTERCONECTORES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1172",
    "nombre": "SERVICIO DE REPARACION CULATA DE COMPRESORA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1173",
    "nombre": "ACC. VALVULA DESFOGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1174",
    "nombre": "REPARACIONES DE MAXIBAKE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1175",
    "nombre": "CHAPA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1176",
    "nombre": "LLAVE DE CONTACTO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1177",
    "nombre": "LLAVE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1178",
    "nombre": "CAMBIO DE RODAJE PIÃ‘ON DE ATAQUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1179",
    "nombre": "SERVICIO DE LLANTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1180",
    "nombre": "BOCINAS DE EJE LIMPIA PARABRISA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1181",
    "nombre": "KIT DE CAMBIO DE ACEITE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1182",
    "nombre": "PROGRAMACION DE LLAVE DE ENCENDIDO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1183",
    "nombre": "DETECTOR DE HUMO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1184",
    "nombre": "PEGAMENTO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1185",
    "nombre": "GASOLINA",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1186",
    "nombre": "SONDEO DE RADIADOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1187",
    "nombre": "SERVICIO DE REPARACION DE TRICO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1188",
    "nombre": "FOCO H1",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1189",
    "nombre": "SERVICIO INSTALACION DE VENTANA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1190",
    "nombre": "RESORTES DE FRENO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1191",
    "nombre": "SERVICIO DE INSTALACION DE CLAXON",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1192",
    "nombre": "MANGUERA PLANA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1193",
    "nombre": "VIDRIO FIJO GUITARRA DERECHO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1194",
    "nombre": "SERVICIO MUELLE POST LADO DERECHO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1195",
    "nombre": "BOMBA PRINCIPAL EMBRAGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1196",
    "nombre": "SERVICIO DE EJE, PERNOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1197",
    "nombre": "SOPORTE DE RADIADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1198",
    "nombre": "SERVICIO REGULADA DE MEBRAGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1199",
    "nombre": "GAS EXTINGUIDOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1200",
    "nombre": "BATERIA 23 PLACAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1201",
    "nombre": "BASTAGO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1202",
    "nombre": "CABLE DE CAMBIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1203",
    "nombre": "ESTOPÃ‰RAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1204",
    "nombre": "EXAGONALES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1205",
    "nombre": "DISCO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1206",
    "nombre": "SERVICIO DE REPARACION DE FARO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1207",
    "nombre": "CABLE Y FUNDA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1208",
    "nombre": "REPARACION DE PARACHOQUE POSTERIOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1209",
    "nombre": "MOLDIMIX",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1210",
    "nombre": "ZAPATA DELANTERA MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1211",
    "nombre": "RELLENAR PULMON DE FRENO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1212",
    "nombre": "BASE DE ARRANCADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1213",
    "nombre": "RECTIFICADA DE BOCAMEZA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1214",
    "nombre": "MANGUERA HIDRAULICA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1215",
    "nombre": "SOGA",
    "unidad": "MTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1216",
    "nombre": "SECADOR DE AIRE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1217",
    "nombre": "REDUCTOR DE CORRIENTE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1218",
    "nombre": "BATERIA DE SEGUNDA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1219",
    "nombre": "SERVICIO POR MUELLES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1220",
    "nombre": "HERRAMIENTAS Y SILICONAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1221",
    "nombre": "BRIDA DE CORONA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1222",
    "nombre": "RETEN DE CORONA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1223",
    "nombre": "REPARACION DE RADIADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1224",
    "nombre": "FABRICAR Y EMBOCINAR CAMPANA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1225",
    "nombre": "RECTIFICAR TAMBOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1226",
    "nombre": "REPARACION PARACHOQUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1227",
    "nombre": "ACEITE",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1228",
    "nombre": "TANQUE DE AGUA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1229",
    "nombre": "FAJA DE VENTILADOR MOTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1230",
    "nombre": "PERNO DE CARDAN M12",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1231",
    "nombre": "SERVICIO DE CARDAN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1232",
    "nombre": "FUSION TABLERO, RELAY + SERVICIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1233",
    "nombre": "COLLARIN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1234",
    "nombre": "FABRICACION BOCINA DE CAMPANA Y E MBOCINAR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1235",
    "nombre": "REPARACION DE MACHIMBRE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1236",
    "nombre": "ESPIGA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1237",
    "nombre": "SERVICIO DE INSTALACION DE VIDRIO LATERAL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1238",
    "nombre": "JUEGO DE LLAVE ALLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1239",
    "nombre": "SOLDADO DE PARACHOQUE ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1240",
    "nombre": "JEBE DE AMORTIGUADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1241",
    "nombre": "TACO DE MUELLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1242",
    "nombre": "SERVICIO ARRANQUE DE MOTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1243",
    "nombre": "ACE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1244",
    "nombre": "SERVICIO DE FRENOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1245",
    "nombre": "AUXILIO POR LLANTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1246",
    "nombre": "SERVICIO ENLAINAR PINES Y BOCINAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1247",
    "nombre": "SERVICIO CAMBIAR BOCINAS Y PINES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1248",
    "nombre": "SERVICIO CORREGIR CUSTER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1249",
    "nombre": "SERVICIO INSTALACIÃ“N DE LUCES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1250",
    "nombre": "CUTER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1251",
    "nombre": "SENSOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1252",
    "nombre": "TUERCA BOCAMASA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1253",
    "nombre": "SWICHT DE RETRO\/NEUTRO MBB 1620 1721 0500 FAE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1254",
    "nombre": "TERMOSTATO MOTOR OM924\/904 MBB 83\" T",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1255",
    "nombre": "CHANCHITO DE ARRANQUE 24V",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1256",
    "nombre": "IGV",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1257",
    "nombre": "ENGRANAJE CORREDIZA DE RUSTER (BOTELLA)",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1258",
    "nombre": "SOPORTE DE PIÃ‘OM DESLIZADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1259",
    "nombre": "TAPA DE OLLA DE CASTLLO CORONA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1260",
    "nombre": "LAINA REG DE PIÃ‘ON DE ATAQUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1261",
    "nombre": "ARANDELA DE CAMPANA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1262",
    "nombre": "PARABRISAS DELANTERO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1263",
    "nombre": "SERVICIO DE MUELLE DELANTERI LADO DERECHO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1264",
    "nombre": "SERVICIO DE MUELLE DELANTERO LADO IZQUIERDO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1265",
    "nombre": "SERVICIO DE MUELLE POST AMBOS LADOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1266",
    "nombre": "SERVICIO DE MUELLE DELANTERO AMBOS LADOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1267",
    "nombre": "PIN DE AMORTIGUADORES",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1268",
    "nombre": "SERVICIO DE BOCINA DE BARRA ESTABILIZADORA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1269",
    "nombre": "BOCINAS DE BARRA ESTABILIZADORA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1270",
    "nombre": "PRECINTO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1271",
    "nombre": "GPS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1272",
    "nombre": "SERVICIO DE CAMBIO DE ABRAZADERA DE TUBO DE ESCAPE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1273",
    "nombre": "SERVICIO DE REPARACION DE TUBO DE ESCAPE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1274",
    "nombre": "CAJA DE HERRAMIENTAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1275",
    "nombre": "LLAVE DE BODEGA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1276",
    "nombre": "CORRUGADO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1277",
    "nombre": "CAJA DE REFRIGERANTE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1278",
    "nombre": "TAPA DE TANQUE DE UREA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1279",
    "nombre": "PARABRISA LATERAL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1280",
    "nombre": "ACCESORIO DE SERVO DE EMBRAGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1281",
    "nombre": "RESORTE DE PULMON",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1282",
    "nombre": "TURBO DE RETORNO DE ACEITE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1283",
    "nombre": "FABRICACION DE UN TUBO DE BRONCE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1284",
    "nombre": "FOCO DIRECCIONAL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1285",
    "nombre": "CUERPO DE ACOPLAMIENTO DE 6TA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1286",
    "nombre": "CUERPO SIN CRONIZADOR DE 5TA Y 6TA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1287",
    "nombre": "CUERPO DE ACOPLAMIENTO DE 1RA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1288",
    "nombre": "CUERPO DE ACOPLAMIENTO DE 2DA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1289",
    "nombre": "ARO SINCRONIZADOR DE 5TA Y 6TA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1290",
    "nombre": "RECTIFICAR TAMBORES Y RELLENAR ALUMINIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1291",
    "nombre": "REFILES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1292",
    "nombre": "ORRINES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1293",
    "nombre": "BIP DE BAJADA 24V",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1294",
    "nombre": "GRASERA CURVA 45Â° 1\/8",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1295",
    "nombre": "CIRCULAR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1296",
    "nombre": "BICEL DE CHAPA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1297",
    "nombre": "JEBE TAPA DE MOTOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1298",
    "nombre": "INSTALACION DE CORNETA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1299",
    "nombre": "RELLENAR TANQUE, NIPLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1300",
    "nombre": "RECTIFICACION DE KIT DE EMBRAGUE, PLATO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1301",
    "nombre": "BOLETOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1302",
    "nombre": "MANTENIMIENTO DE CORONA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1303",
    "nombre": "REGULADA DE CORONA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1304",
    "nombre": "JUEGO DE YUNKE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1305",
    "nombre": "CAMBIO DE ABRAZADERA MUELLE POSTERIOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1306",
    "nombre": "RODAJE DE COLLARIN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1307",
    "nombre": "REPARACIÃ“N DE DISCO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1308",
    "nombre": "FOCOS NAPVA H3",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1309",
    "nombre": "SILICONA AUTOMOTRIZ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1310",
    "nombre": "VARIOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1311",
    "nombre": "SEGURO DE PIN",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1312",
    "nombre": "LINTERNA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1313",
    "nombre": "REPARACION DE CAÃ‘ERIA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1314",
    "nombre": "REPARACION DE PISTOLA (VALVULA, EMPAQUES, VELTA, MARTILLO, RESORTE)",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1315",
    "nombre": "ZAPATAS POST GOLDEN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1316",
    "nombre": "RESORTES POST GOLDEN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1317",
    "nombre": "PERNOS RUEDA POST MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1318",
    "nombre": "PERNOS RUEDA DEL MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1319",
    "nombre": "RODILLOS Y RESORTES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1320",
    "nombre": "RECTIFICADO DE VOLANTE GOLDEN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1321",
    "nombre": "RODAJE DE VOLANTE GOLDEN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1322",
    "nombre": "CAMBIO DE FORRO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1323",
    "nombre": "GUANTES DE TELA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1324",
    "nombre": "MANTENIMIENTO DE PLATO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1325",
    "nombre": "AGUA DE BATERIA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1326",
    "nombre": "MANTENIMIENTO Y RECTIFICADA DE PLATO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1327",
    "nombre": "WORDA FANGO DE FIBRA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1328",
    "nombre": "TRAPO INDUSTRIAL ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1329",
    "nombre": "MODIFICAR EJE DE PISTOLA NEOMOTO SEGUN MUESTRA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1330",
    "nombre": "SCANEO DEL BUS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1331",
    "nombre": "ABOGADO",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1332",
    "nombre": "ARCO DE SIERRA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1333",
    "nombre": "CABLE DE PALANCA DE CAMBIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1334",
    "nombre": "BOBINA DE ENCENDIDO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1335",
    "nombre": "ESCANEO DE UNIDAD",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1336",
    "nombre": "CAMBIO DE BORLA DE LLANTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1337",
    "nombre": "FARO REDONDO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1338",
    "nombre": "BUJIAS DENSO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1339",
    "nombre": "VOLANTE DE MOTOR OM904\/924\/926 1721\/59",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1340",
    "nombre": "BOLSA DE REMACHES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1341",
    "nombre": "FAJA C. 67",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1342",
    "nombre": "FAJA BX42",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1343",
    "nombre": "FAJA CX42",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1344",
    "nombre": "REPARACION DE CARROCERIA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1345",
    "nombre": "MANTENIMIENTO DE POLEA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1346",
    "nombre": "TERMINAL DE PALANCA DE CAMBIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1347",
    "nombre": "VASTAGO DE PEDAL DE EMBRAGUE REGUL. OF1721",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1348",
    "nombre": "ALTERNADOR 24V 80 AMP C POLEA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1349",
    "nombre": "JEBES DE ESPEJOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1350",
    "nombre": "CINTA 3M GRANDE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1351",
    "nombre": "PARCHE FRIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1352",
    "nombre": "RESORTES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1353",
    "nombre": "ACIDO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1354",
    "nombre": "REPARACION DE PUNTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1355",
    "nombre": "REPARACION PUNTA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1356",
    "nombre": "ABRAZADERAS DE MUELLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1357",
    "nombre": "ABRAZADERA NUEVA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1358",
    "nombre": "SERVICIO DE MUELLE POSTERIOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1359",
    "nombre": "PIN DE SOPORTE DE MUELLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1360",
    "nombre": "PUNTO PARA PARABRISA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1361",
    "nombre": "TEFLON",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1362",
    "nombre": "PLATO PRESOR ROTAE 13\" PULGADAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1363",
    "nombre": "FOCO DE IODONARVAL DELANTERO H7 24V\/70W",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1364",
    "nombre": "RETEN DE ACEITE DE TORRE MANDO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1365",
    "nombre": "ESTAÃ‘O",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1366",
    "nombre": "KIT DE REPARO VALVULA PEDAL DE FRENO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1367",
    "nombre": "DISCO DE MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1368",
    "nombre": "PEDAL DE FRENO DE SEGUNDA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1369",
    "nombre": "PERNO CENTRAL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1370",
    "nombre": "TRAPO SUELTO POR KILO",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1371",
    "nombre": "REPARACION DE CAJA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1372",
    "nombre": "TERMINALES ELECTRICOS (PARES)",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1373",
    "nombre": "ROLLO CABLE #16 AUTOMOTRIZ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1374",
    "nombre": "FOCOS DE 1 CONTACTO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1375",
    "nombre": "MICAS AMBAR LATERALES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1376",
    "nombre": "ZAPATA POST MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1377",
    "nombre": "PASTA DE SOLDAR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1378",
    "nombre": "FAJA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1379",
    "nombre": "REPARO DE VALVULA DESCARGA RAPIDA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1380",
    "nombre": "ZOCATE NEGRO 1C",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1381",
    "nombre": "CUERPO DE ACOPLAMIENTO DE 6TA G85",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1382",
    "nombre": "ARO SINCRONIZADOR DE 1ERA 2DA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1383",
    "nombre": "VASTAGO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1384",
    "nombre": "PERNOS + HUACHA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1385",
    "nombre": "JEBES 3\/4 X 4",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1386",
    "nombre": "ARANDELA DE PIÃ‘ON DE 4TA EJE DESLZ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1387",
    "nombre": "CUERPO SINCRONIZADOR 5TA 6TA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1388",
    "nombre": "GRASAS (SKF)",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1389",
    "nombre": "CABLES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1390",
    "nombre": "PULVERIZADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1391",
    "nombre": "SOLDADURA DE TANQUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1392",
    "nombre": "DURAPLAST",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1393",
    "nombre": "PERSONAL DE REVISION ( PARA PASAR LA REVISION)",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1394",
    "nombre": "BOCINAS DE BARRA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1395",
    "nombre": "REPARACION DE PISTOLA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1396",
    "nombre": "VIDRIO LAMINADO PUERTA POST",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1397",
    "nombre": "PERNOS PARA TAPA DE MOTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1398",
    "nombre": "DRIZA",
    "unidad": "MTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1399",
    "nombre": "MANGO DE COMBA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1400",
    "nombre": "SERVICIO DE MUELLE HOJA MADRE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1401",
    "nombre": "CONECTOR DE BUJIAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1402",
    "nombre": "PITO DE RETRO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1403",
    "nombre": "CUCHILLA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1404",
    "nombre": "PISTOLA P\/SOLDAR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1405",
    "nombre": "ALICATE KAMASA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1406",
    "nombre": "MANGUERA DE 1\/2",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1407",
    "nombre": "UNION DE 1\/2",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1408",
    "nombre": "GUIAS DE 1\/2",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1409",
    "nombre": "EMBOCINADA DE CAMPANA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1410",
    "nombre": "CAMBIAR PERNO REGULADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1411",
    "nombre": "FABRICACION DE PUERTA Y ARMADO DE ESTRUCTURA  + PINTURA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1412",
    "nombre": "EJE PRINCIPAL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1413",
    "nombre": "BRAZO DE ESPEJO RETROVISOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1414",
    "nombre": "REPARACION DE BRAZO DE ESPEJO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1415",
    "nombre": "AUXILIO MECANICO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1416",
    "nombre": "ABRAZADERA SPICER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1417",
    "nombre": "TERMINAL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1418",
    "nombre": "MEDICINA",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1419",
    "nombre": "CONSULTA MEDICA",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1420",
    "nombre": "RADIOGRAFIA",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1421",
    "nombre": "TAXI",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1422",
    "nombre": "SEVICIO ELECTRICO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1423",
    "nombre": "SOLDADURA DE SOPORTE LADO IZQUIERDO TRASERO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1424",
    "nombre": "REMACHADO DE ZAPATAS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1425",
    "nombre": "RACHET DE FRENO DELANT. AUTOMATICO OF1721",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1426",
    "nombre": "REPARACION DE REMACHADORA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1427",
    "nombre": "FOCO LATERAL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1428",
    "nombre": "RECTIFICAR MUÃ‘ON",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1429",
    "nombre": "VIDRIO FIJO LAMINADO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1430",
    "nombre": "CAMBIO DE BORBOLA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1431",
    "nombre": "REPARACION DE ESPEJO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1432",
    "nombre": "SOLDADURA DE BRAZO DE ESPEJO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1433",
    "nombre": "ALMANAQUES 2020",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1434",
    "nombre": "THINER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1435",
    "nombre": "PINTURA AMARILLA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1436",
    "nombre": "CINTO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1437",
    "nombre": "FIJAR LATA LATERL DE CARROCERIA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1438",
    "nombre": "PINTADO DE FRANJA AMARILLA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1439",
    "nombre": "SOLDAR COMPUERTA, TAPA DE POSETO LLANTA POST, Y EJE 6",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1440",
    "nombre": "BOMBA DE ENGRASE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1441",
    "nombre": "FUSIL 10 AMP.",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1442",
    "nombre": "FUSIL 15 AMP.",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1443",
    "nombre": "SOLDAR PLATINO Y CARROCERIA LADO DE CONDUCTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1444",
    "nombre": "SOLDAR TOPE DE PUERTA Y PARACHOQUE DELANTERO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1445",
    "nombre": "SOLDAR ASIENTO CONDUCTOR Y CARROCERIA INTERIOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1446",
    "nombre": "SOLDADURA DE ASIENTOS DEL BUS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1447",
    "nombre": "RUSTER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1448",
    "nombre": "FABRICACION DE MICA DE FARO POSTERIOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1449",
    "nombre": "CINTILLOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1450",
    "nombre": "BOLIGRAFOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1451",
    "nombre": "ACC. BOTELLA PUERTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1452",
    "nombre": "MANTENIMIENTO DE PINES Y BOCINAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1453",
    "nombre": "CASTROL 15W40",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1454",
    "nombre": "CAMBIO DE PERNO DE BASE DE CARDAN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1455",
    "nombre": "POTES DE GRASA",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1456",
    "nombre": "CINTURON CHOFER",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1457",
    "nombre": "BASE DE MUELLE SOBRE LA FUNDA PREPARADA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1458",
    "nombre": "WAYE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1459",
    "nombre": "TAMBORES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1460",
    "nombre": "DOSIFICADOR DE UREA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1461",
    "nombre": "GRASERA CURVA 45Â° 3\/8",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1462",
    "nombre": "ACTIVACION DE CHIP",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1463",
    "nombre": "SERVICIO DE INSTALACION DE BRAZO DE PUERTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1464",
    "nombre": "FOCO 2 CONTACTO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1465",
    "nombre": "VENTA DE LLANTA CON ARO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1466",
    "nombre": "ALTERNADOR DE 24V 70AMP ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1467",
    "nombre": "FAJAS 8PK1549-K680",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1468",
    "nombre": "FAJAS TR28 1120-44",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1469",
    "nombre": "VIDRIO FIJO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1470",
    "nombre": "SEGURO CHAVETA PIN ZAPATA MERCEDEZ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1471",
    "nombre": "RESORTE EMBRAGUE GOLDEN DRAGON",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1472",
    "nombre": "TUBO DE PASE DE BOMBA DE AGUA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1473",
    "nombre": "FARO LATERAL OVALADO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1474",
    "nombre": "EMPAQUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1475",
    "nombre": "SERVICIO DE SOLDADURA TAPA DE MOTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1476",
    "nombre": "GASOHOL 90",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1477",
    "nombre": "PEGADO DEL CASTILLO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1478",
    "nombre": "KIT DE FILTRO DE UREA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1479",
    "nombre": "VENTILADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1480",
    "nombre": "G.N.V",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1481",
    "nombre": "MILLARES DE TARJETA DE CONTROL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1482",
    "nombre": "BOMBA DE UREA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1483",
    "nombre": "CUADRADO DE PARACHOQUE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1484",
    "nombre": "COCHERA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1485",
    "nombre": "UNIONES DE MANGUERAS DE CAJA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1486",
    "nombre": "REPARACION DE EQUIPO DE GATAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1487",
    "nombre": "SERVICIO SILICONA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1488",
    "nombre": "PRENSA DE CAJA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1489",
    "nombre": "SOLDAR SUPLE DE EJE EMBRAGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1490",
    "nombre": "FABRICACION DE SUPLE DE TAPA DE COMPRESORA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1491",
    "nombre": "PIN Y RACOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1492",
    "nombre": "CENTRAR FUNDA POST",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1493",
    "nombre": "SOLDADURA   ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1494",
    "nombre": "CANDADOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1495",
    "nombre": "CANDADO GRANDE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1496",
    "nombre": "FORRADO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1497",
    "nombre": "SCANER DE SENSOR DE UREA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1498",
    "nombre": "AUTOPERFORANTES 14 X 1 1\/2",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1499",
    "nombre": "AUTOPERFORANTES 14 X 2",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1500",
    "nombre": "PERNOS PUNTA BROCA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1501",
    "nombre": "PERNO PUNTA BROCA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1502",
    "nombre": "ARMADO DE LLANTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1503",
    "nombre": "PERNO + HUACHAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1504",
    "nombre": "CULATIN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1505",
    "nombre": "REPARACION DE ESTRIBO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1506",
    "nombre": "VEXTROM",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1507",
    "nombre": "FABRICAR ADAPTADOR DE BOMBIN DE EMBRAGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1508",
    "nombre": "REPARACION DE BOMBA DE AGUA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1509",
    "nombre": "EXTRACCION DE SOPORTE CAMBIO DE PERNOS HOJA CHINA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1510",
    "nombre": "PERNOS DE 9\/16",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1511",
    "nombre": "PEGADO DE VIDRIO LATERAL IZQ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1512",
    "nombre": "CAMBIO DE DIAFRAGMA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1513",
    "nombre": "ENLAINAR BRAZO GIRATORIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1514",
    "nombre": "BASE PRIMA GRIS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1515",
    "nombre": "PINTURA GLOVE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1516",
    "nombre": "PISTOLA PARA PINTAR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1517",
    "nombre": "MANTENIMIENTO DE DIRECCION",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1518",
    "nombre": "CENTRAR FUNDA POST DERECHA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1519",
    "nombre": "CAMBIO DE PIÃ‘ON MELLIZO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1520",
    "nombre": "FARO LED PLACA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1521",
    "nombre": "TANQUE DE HIDROLINA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1522",
    "nombre": "BRAZO L.P.B CUNICO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1523",
    "nombre": "SAQUET 11\/C",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1524",
    "nombre": "FILTRO DE UREA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1525",
    "nombre": "SUNCHO SACA FILTRO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1526",
    "nombre": "BOMBA DE UREA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1527",
    "nombre": "REVISION DE SISTEMA UREA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1528",
    "nombre": "SERVICIO  DE ROTACION DE LLANTA",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1529",
    "nombre": "REMACHADORA STANLEY",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1530",
    "nombre": "PERNOS AUTORROSANTES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1531",
    "nombre": "PENOS PUNTA BROCA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1532",
    "nombre": "DADO MAGNETICO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1533",
    "nombre": "REMACHE 1\/8 X 5\/8",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1534",
    "nombre": "REMACHE 1\/8 X 3\/8",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1535",
    "nombre": "RACHE 1\/2 STANLEY",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1536",
    "nombre": "INTERRUPTOR 1 GOLPE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1537",
    "nombre": "INTERRUPTOR ARRANQUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1538",
    "nombre": "MICA POSTERIOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1539",
    "nombre": "BARRAS LED LUZ TABLERO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1540",
    "nombre": "SERVICIO SISTEMA ELECTRICO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1541",
    "nombre": "JEBES DE PARABRISAS",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1542",
    "nombre": "ASIENTO URB C\/ROJO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1543",
    "nombre": "BAL MOBIL DELVAC MX 15W- 40 BALDE",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1544",
    "nombre": "PANEL CON LETRAS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1545",
    "nombre": "ACCESORIOS PARA MAQUINA REMACHADORA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1546",
    "nombre": "TEKNO GLOSS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1547",
    "nombre": "TEKNO GLOS GRIS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1548",
    "nombre": "WAYPE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1549",
    "nombre": "MANTENIMIENTO DE INYECTORES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1550",
    "nombre": "EMPAQUE DE CULATA OM924 OF1721\/59",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1551",
    "nombre": "BRONCE DESLIZADOR FB5106A COD.3004491",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1552",
    "nombre": "PAR DE  FORRO DE DISCO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1553",
    "nombre": "PERNOS 3\/8 X 2 1\/2 COMPLETOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1554",
    "nombre": "PERNOS RACOR M14",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1555",
    "nombre": "LAINAS ALUMINIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1556",
    "nombre": "JGO DE ZAPATA MERCEDES POST",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1557",
    "nombre": "KIT DE EMBRAGUE 1721 EURO 5",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1558",
    "nombre": "KIT DE EMBRAGUE SACH REFORZADO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1559",
    "nombre": "MASILLA",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1560",
    "nombre": "PET",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1561",
    "nombre": "JEBE DE BARRA ESTABILIZADORA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1562",
    "nombre": "SERVICIO CAMBIO DE BOCINA DE BRONCE DE CAMPANA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1563",
    "nombre": "PERNO 5\/16 X 2 1\/2",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1564",
    "nombre": "LAVADO DE CHASIS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1565",
    "nombre": "RADIADOR DE BRONCE C\/ACCESORIOS TINA SUPERIOR E INFERIOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1566",
    "nombre": "RESINA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1567",
    "nombre": "REPARACION DE SECADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1568",
    "nombre": "BAL VEXTROM GAS ULTRA PREMIUM GEO 15W-40 BALDE",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1569",
    "nombre": "PERNOS  16X50",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1570",
    "nombre": "TAPA #58",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1571",
    "nombre": "RELLENADA DE POSTE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1572",
    "nombre": "SERVICIO DE TUERCAS DE GRILLETE DE MUELLES ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1573",
    "nombre": "RECIBOS DE CAJA",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1574",
    "nombre": "REUESTOS VARIOS DE CAJA ,RODAJES,SINCRONIZADOR",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1575",
    "nombre": "ZAPATAS DELANTERAS MERC",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1576",
    "nombre": "SERVICIO CAMBIO DE AGUA Y AGUJA",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1577",
    "nombre": "VENDIX",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1578",
    "nombre": "EMBOCINADA TAPA POSTERIOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1579",
    "nombre": "EMBOCINADO TAPA ALTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1580",
    "nombre": "MATIZADOS JERVIM",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1581",
    "nombre": "NIPLE DE LA COMPRESORA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1582",
    "nombre": "LLANTAS GOLDEN 12 R22.5",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1583",
    "nombre": "FOCO POST. 1\/C 24V",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1584",
    "nombre": "FOCO LATERAL 24V",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1585",
    "nombre": "PIN PASADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1586",
    "nombre": "ESCOBILLA DE FIERRO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1587",
    "nombre": "BOCINA DEL GRILLETE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1588",
    "nombre": "CORRECTORES DE BOMBA DE GAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1589",
    "nombre": "HOJA MADRE YUNQUE GRANDE DOBLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1590",
    "nombre": "SERVICIO DE CARGA DE BATERIA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1591",
    "nombre": "SERVICIO CAMBIO DE VALVULA Y REVISION DE LLANTA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1592",
    "nombre": "FIBRA",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1593",
    "nombre": "MONOPERO",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1594",
    "nombre": "RECTIFICACION DE VOLANTE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1595",
    "nombre": "LIGA DE FRENOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1596",
    "nombre": "BOT. MAGNATE 5W30",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1597",
    "nombre": "GALO.PEAK 50\/50",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1598",
    "nombre": "JGO DE ZAPATA MERCEDES STD",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1599",
    "nombre": "1\/2 JGO DE ZAPATA POST MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1600",
    "nombre": "LIMPIEZA DE ARO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1601",
    "nombre": "FARO YODO 24V",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1602",
    "nombre": "ACRILICO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1603",
    "nombre": "SERVICIO AJUSTADA BASE DE PÃTON",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1604",
    "nombre": "ZAPATA FRENOSA POST 20011 STD",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1605",
    "nombre": "SERVICIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1606",
    "nombre": "DADO 17",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1607",
    "nombre": "ACIDO DE BATERIA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1608",
    "nombre": "PULVERIZADORA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1609",
    "nombre": "UNIFORMES (MAMELUCOS)",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1610",
    "nombre": "AJUSTE DE MUELLE + SERV DE HUACHAS EN ESPEJO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1611",
    "nombre": "RODAJE B17",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1612",
    "nombre": "RODAJE G003",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1613",
    "nombre": "DIODOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1614",
    "nombre": "CORONA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1615",
    "nombre": "PIN DE BARRA EN EL TORNO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1616",
    "nombre": "BASE DE SOPORTE DE BARRA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1617",
    "nombre": "SERVICIO ELECTRICO TRICO",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1618",
    "nombre": "BROCHA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1619",
    "nombre": "OTRO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1620",
    "nombre": "AGUA ACIDULA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1621",
    "nombre": "RECTIFICACION DE BASE DE SATELITE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1622",
    "nombre": "SERVICIO LLANTA",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1623",
    "nombre": "DISOLVENTE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1624",
    "nombre": "WAFER 8X1",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1625",
    "nombre": "WAFER 8X1 1\/4",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1626",
    "nombre": "KIT DE FILTROS Y BUJIAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1627",
    "nombre": "RECONSTRUIR BASE DE FUNDA DE MUELLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1628",
    "nombre": "PIN DE MUELLE 30X145",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1629",
    "nombre": "KIT EMBRAGUE 1721 EURO 5",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1630",
    "nombre": "COLLARIN EMBRAGUE SCAH 1721\/EURO 5",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1631",
    "nombre": "COLLARIN HIDRAULICO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1632",
    "nombre": "CAMBIO DE ABRAZADERA DE MUELLE POST Y CENTRAR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1633",
    "nombre": "DISCO 4 1\/2",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1634",
    "nombre": "LUNA SOLAR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1635",
    "nombre": "APLICADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1636",
    "nombre": "BATERIA PEQUEÃ‘AS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1637",
    "nombre": "POLIURETANOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1638",
    "nombre": "Rellenar bocanasa",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1639",
    "nombre": "GALVANIZADO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1640",
    "nombre": "REPARACION DE BOMBA DE UREA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1641",
    "nombre": "ESPEJOS COMPLETOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1642",
    "nombre": "PEGADO DE VIDRIO LATERAL DER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1643",
    "nombre": "ARREGLO DE TIMBRE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1644",
    "nombre": "ALARMA DE RETROCESO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1645",
    "nombre": "PERNO 7 1\/6 X 3 1\/2",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1646",
    "nombre": "DADO THOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1647",
    "nombre": "POSTES DE BATERIA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1648",
    "nombre": "FIBRA DE VIDRIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1649",
    "nombre": "ABRAZADERAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1650",
    "nombre": "GASTOS VARIOS PARA LAVADERO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1651",
    "nombre": "LLANTA DE BUGUI",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1652",
    "nombre": "VARIOS P\/CONSTRUCCION DE MURO FRONTAL DE LOCAL PALMAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1653",
    "nombre": "LADRILLOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1654",
    "nombre": "AGUA DESTILADA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1655",
    "nombre": "FILTRO SECADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1656",
    "nombre": "TAPIZADO DE ESPALDAR DE CONDUCTOR",
    "unidad": "MTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1657",
    "nombre": "TRASLADO DE LLANTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1658",
    "nombre": "REVISION DE LUCES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1659",
    "nombre": "ACONDICIONAMIENTO DE TUBO DE ESCAPE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1660",
    "nombre": "KIT DE ROTULA DE PALANCA DE CAMBIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1661",
    "nombre": "FAJAS AX44-9463",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1662",
    "nombre": "KEROSENE",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1663",
    "nombre": "PARABRISA LADO DERECHO - MODASA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1664",
    "nombre": "PARABRISA LADO DERECHO - MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1665",
    "nombre": "POLIURETANO (PLANCHA DE LATA)",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1666",
    "nombre": "SERVICIO DE DOBLES DE PLANCHA DE ACERO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1667",
    "nombre": "PLANCHA DE ACERO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1668",
    "nombre": "EMPAQUE DE CARTER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1669",
    "nombre": "SALIDA DE TALLER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1670",
    "nombre": "PREPARAR BOCINA DE EMBRIAGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1671",
    "nombre": "RECTIFICAR PLATO DE EMBRIAGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1672",
    "nombre": "ABRAZADERA DE TAPAFILTRO DE AIRE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1673",
    "nombre": "REVISION DE LUCES DE SALON",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1674",
    "nombre": "FIERRO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1675",
    "nombre": "PIEDRA ZANJA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1676",
    "nombre": "ARENA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1677",
    "nombre": "RETROESCAVADORA",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1678",
    "nombre": "ALAMBRE (ROLLO)",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1679",
    "nombre": "ALAMBRE (KILO)",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1680",
    "nombre": "CLAVO DE CEMENTO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1681",
    "nombre": "ARENA FINA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1682",
    "nombre": "PIEDRA CHANCADA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1683",
    "nombre": "VIBRADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1684",
    "nombre": "VIDRIO CORREDIZO IZQ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1685",
    "nombre": "SWITCH DE AIRE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1686",
    "nombre": "CABLES Y CONECTORES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1687",
    "nombre": "EMPAQUE DE MOTOR FUSSO CHINO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1688",
    "nombre": "FABRICACION DE BOCINAS DE BRONCE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1689",
    "nombre": "RESORTES MODASA CARRETA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1690",
    "nombre": "LAVADO DE MOTOR",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1691",
    "nombre": "CAMISETA PARA REPARACION DE MOTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1692",
    "nombre": "FAJAS GATES 8PK 1380 K080545",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1693",
    "nombre": "VENTA DE CAMARA PARA LLANTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1694",
    "nombre": "ABRAZADERA INOXIDABLE 3 1\/2",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1695",
    "nombre": "ABRAZADERA INOXIDABLE 3 1\/4",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1696",
    "nombre": "1 JUEGO DE ZAPATAS DELANTERAS MERCEDEZ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1697",
    "nombre": "2 RODAJES Y 2 RETENES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1698",
    "nombre": "SEGURO DE MUÃ‘ON",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1699",
    "nombre": "PERNOS Y HUACHAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1700",
    "nombre": "1 KILO DE SOLDADURA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1701",
    "nombre": "ACCESORIO DE EMBRAGE Y BOMBI VARGA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1702",
    "nombre": "PLATO ,DISCO Y COLLARIN",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1703",
    "nombre": "RESORTES Y REMACHES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1704",
    "nombre": "2 LLANTAS DELANTERAS  MERCEDEZ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1705",
    "nombre": "CUADRADA DE PUERTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1706",
    "nombre": "RECTIFICADORA DE MOTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1707",
    "nombre": "TORNEAR EJE DE PUERTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1708",
    "nombre": "SERVICIO DE VIDRIOS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1709",
    "nombre": "KIT DE EMPAQUE DE MOTOR KUMIUS",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1710",
    "nombre": "TAPA DE SELECTOR DE CAMBIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1711",
    "nombre": "LAMINAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1712",
    "nombre": "VARILLA ROSCADA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1713",
    "nombre": "PLUMA HIDRAULICA DE 2TON (DATONG) MARCA REXON MOD ET2",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1714",
    "nombre": "LLAVE DE IMPACTO NEUM 1\" 2200N.M 3900RPM 1\/2 MARCA REXON MOD.TT-030C",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1715",
    "nombre": "ESCANEOS,REV DE CODIJOS,REV DE TANQUE DE UREA ETC",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1716",
    "nombre": "REVICION TECNICA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1717",
    "nombre": "SERVICIO ELECTRICO Y VARIOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1718",
    "nombre": "VARIOS P\/CONSTRUCCION DE PISO EN LOCAL PALMAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1719",
    "nombre": "PREPARAR BASES PARA PUERTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1720",
    "nombre": "3 BALDES DE ACEITE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1721",
    "nombre": "BATERIA NUEVA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1722",
    "nombre": "PERNOS RACORES",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1723",
    "nombre": "PERNOS Y ESPARRAGOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1724",
    "nombre": "HOJAS DE CONTROL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1725",
    "nombre": "MANGUERAS ABRAZADERAS BOMBA DE AGUA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1726",
    "nombre": "ZAPATA POSTERIOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1727",
    "nombre": "GASTOS VARIOS PARA TALLER",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1728",
    "nombre": "SR LUCHO GASTOS VARIOS TALLER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1729",
    "nombre": "PARABRISA TEMPLADO POSTERIOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1730",
    "nombre": "1 CASTILLO TEMPLADO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1731",
    "nombre": "MANJERA 1721",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1732",
    "nombre": "1 JUEGO DE ZAPATAS POSTERIOR",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1733",
    "nombre": "2 RACHET DELANTEROS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1734",
    "nombre": "FAROS , VARIOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1735",
    "nombre": "ACCESORIO DE FRENO WABCO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1736",
    "nombre": "STIKERS .CODIJOS Y LEYENDAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1737",
    "nombre": "4 CINTAS MAKESTEY",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1738",
    "nombre": "MANTENIMIENTO BATERIA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1739",
    "nombre": "AGUA PARA BATERIA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1740",
    "nombre": "REVISION DE CORTO CIRCUITO LUZ DE TABLERO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1741",
    "nombre": "ALIBADOR DE BATERIA",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1742",
    "nombre": "CABLE DE BATERIA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1743",
    "nombre": "EMBOCINADO DE PINES Y BOCINAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1744",
    "nombre": "SEGURO DE RACHETS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1745",
    "nombre": "TAPON Y VARIOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1746",
    "nombre": "RECINA Y VARIOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1747",
    "nombre": "BOCINA DE EJE DE LEVAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1748",
    "nombre": "FAJAS CX22X1092-43 Y CX22X1701",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1749",
    "nombre": "MANJERA ALTA PRESION SAE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1750",
    "nombre": "2 FOCOS DELANTEROS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1751",
    "nombre": "GASTOS VARIOS ELECTRICO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1752",
    "nombre": "PARACHOQUE DELANTERO CON TUBO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1753",
    "nombre": "BORNE NEGATIVO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1754",
    "nombre": "BORNE MARIPOSA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1755",
    "nombre": "TAPAS DE RADIADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1756",
    "nombre": "LOGO ETERSAC",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1757",
    "nombre": "CINTA MASKING TAPE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1758",
    "nombre": "LIJADOR ORBITAL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1759",
    "nombre": "LIJAS VARIAS, DISCOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1760",
    "nombre": "OIL CORONA 140",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1761",
    "nombre": "ZAPATA 200195 GOLDEN DRAGON",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1762",
    "nombre": "ZAPATAS DELANT GOLDEN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1763",
    "nombre": "PARABRISA POSTERIOR MERCEDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1764",
    "nombre": "PARABRISA MODASA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1765",
    "nombre": "JEBE DE ESPEJO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1766",
    "nombre": "VIDRIO LAMINADO FIJO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1767",
    "nombre": "AUTOMATICO DE COMPRENSORA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1768",
    "nombre": "RETENES DE VALVULA CUMMINS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1769",
    "nombre": "REPUESTOS PARA MOTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1770",
    "nombre": "YESO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1771",
    "nombre": "JEBES DE BOMBIN DE EMBRAGE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1772",
    "nombre": "LLAVE STILSON STANLEY",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1773",
    "nombre": "PERNO M8 X 100",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1774",
    "nombre": "MANJERAS VARIAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1775",
    "nombre": "KIT DE EMBRAGE GOLDEN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1776",
    "nombre": "TUBO,PLANCHA GARBANIZADA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1777",
    "nombre": "TUBO GARBANIZADO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1778",
    "nombre": "JUEGO DE LACORES,MANJERAS Y ABRAZADERAZ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1779",
    "nombre": "AUXILIO POR GAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1780",
    "nombre": "GASTOS VARIOS PARA YUTONG",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1781",
    "nombre": "BOCINAS MUELLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1782",
    "nombre": "6 LLANTAS NUEVAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1783",
    "nombre": "RETENES DE PUERTA DE BOTELLA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1784",
    "nombre": "BASE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1785",
    "nombre": "TRICO COMPLETO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1786",
    "nombre": "4 REPARACIONES DE BASE DE TRICOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1787",
    "nombre": "BASES DE PUERTA Y RECTIFICADA DE PUERTA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1788",
    "nombre": "REPUESTOS PARA MOTOR MODASA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1789",
    "nombre": "CONSTRUCCION DE CASA DE PORTALES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1790",
    "nombre": "SERVICIO PLANCHADO Y PINTURA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1791",
    "nombre": "PEAJES Y OTROS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1792",
    "nombre": "relog de presion de aceite y manjera prensada",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1793",
    "nombre": "kit de palanca cambio bocina",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1794",
    "nombre": "limpieza inyectores",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1795",
    "nombre": "INSTALACION DE SISTEMA DE ARRANQUE, FRENO, INDICADORAS, RETRO, CABLEADO ALTERNADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1796",
    "nombre": "PLASTIGEY ROJO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1797",
    "nombre": "PLATO Y COLLARIN DE EMBRAGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1798",
    "nombre": "CONSTRUCCION DE LOS PORTALES - ALFREDO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1799",
    "nombre": "GORITOS PARA CALAMINA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1800",
    "nombre": "LISTON",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1801",
    "nombre": "PARANTE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1802",
    "nombre": "TRIPLEY",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1803",
    "nombre": "FOCO YODO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1804",
    "nombre": "FOCO DE PLACA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1805",
    "nombre": "AJUSTE DE MUELLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1806",
    "nombre": "VIDRIO TRIPLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1807",
    "nombre": "BOMBA DE EMBRAGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1808",
    "nombre": "KIT DE REPARO DE VALVULA DE 4 VIAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1809",
    "nombre": "ARENA GRUESA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1810",
    "nombre": "SELLADOR DE ROSCA",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1811",
    "nombre": "BATERIAS 9V",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1812",
    "nombre": "CABLEADO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1813",
    "nombre": "BRAZO LIMPIA PARABRISAS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1814",
    "nombre": "ALCOHOL",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1815",
    "nombre": "FORRO DE TIMON MERCEDEZ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1816",
    "nombre": "PISTON TRAMPILLA 25KL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1817",
    "nombre": "RECOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1818",
    "nombre": "LIJADO DE MUELLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1819",
    "nombre": "GEL ALCOHOL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1820",
    "nombre": "CUERPO DE ACOPLAMIENTO DE 3RA G\/80 G\/85",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1821",
    "nombre": "CUERPO DE ACOPLAMIENTO DE 4TA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1822",
    "nombre": "FILTROS DE GAS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1823",
    "nombre": "SERVICIO DE CAMBIO DE ARO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1824",
    "nombre": "PERNO 14*2\"",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1825",
    "nombre": "MOTOR TRICO DOBLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1826",
    "nombre": "DIESE B50",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1827",
    "nombre": "CERTIFICADO DE INSPECCION GNV",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1828",
    "nombre": "PRENSA DE CORONA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1829",
    "nombre": "MILLARES 18 HUECOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1830",
    "nombre": "RECTIFICAR CORAL DE CORONA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1831",
    "nombre": "PEGADO DE VIDRIO FIJO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1832",
    "nombre": "LUCES DE EMERGENCIA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1833",
    "nombre": "SEÃ‘ALES FOTOLOM 20 X 30",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1834",
    "nombre": "EXTINTOR NUEVO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1835",
    "nombre": "SOPORTES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1836",
    "nombre": "SEÃ‘ALES DE 20 X 30",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1837",
    "nombre": "REPARACION Y MANTENIMIENTO  ARRANCADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1838",
    "nombre": "REPARACION DE DISCOY CAMBIO DE FORRO, PLATO DE EMBRAGUE, COLLARIN RODAJE DE VOLANTE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1839",
    "nombre": "ROLLO DE FILM",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1840",
    "nombre": "BOLETA INFORMATIVA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1841",
    "nombre": "RECARGA DE EXTINTOR ABC DE 6KG",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1842",
    "nombre": "RECARGA DE EXTINTOR ABC DE 4KG",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1843",
    "nombre": "RECARGA DE EXTINTOR ABC DE 2KG",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1844",
    "nombre": "VALVULA PARA EXTINTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1845",
    "nombre": "MANOMETRO DE PRESION",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1846",
    "nombre": "SUJETADOR DE MANGUERA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1847",
    "nombre": "MONOCAPA AZUL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1848",
    "nombre": "BASE PRIMER ACRILICO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1849",
    "nombre": "SET DE PALLAR 1 1C HYUNDAI HD78",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1850",
    "nombre": "VARIOS CONSTRUCCION ALFREDO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1851",
    "nombre": "VARIOS PARA NUEVA OFICINA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1852",
    "nombre": "RECTIFICAR CIGUEÃ‘AL, BIELAS, BANCADAS DE MOTOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1853",
    "nombre": "RESORTE FRENO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1854",
    "nombre": "TURCA Y HUACHA PRESION",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1855",
    "nombre": "ENGANCHE DE MASCARILLA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1856",
    "nombre": "MOTOR TRICO INCORPORADO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1857",
    "nombre": "ACTIVADOR DE BATERIA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1858",
    "nombre": "MOTOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1859",
    "nombre": "MACHO MID X 1.5",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1860",
    "nombre": "PERNO 10X70",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1861",
    "nombre": "PERNO 3\/8 X 2",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1862",
    "nombre": "LUCES DIRECCIONALES",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1863",
    "nombre": "PEROXIDO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1864",
    "nombre": "VITURITO (P\/EMPAQUE)",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1865",
    "nombre": "RETENES RUEDA POSTERIOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1866",
    "nombre": "TABO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1867",
    "nombre": "OJOS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1868",
    "nombre": "DOBLADA DE TUBO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1869",
    "nombre": "ADAPTAR PUERTA DE CARDAN Y CRUCETA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1870",
    "nombre": "PLATO DE EMBRAGUE GOLDEN DRAGON",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1871",
    "nombre": "MANIJA DE CONTROL DE LUCES",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1872",
    "nombre": "FORRO VINIL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1873",
    "nombre": "TUBOS MAS EMPAQUES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1874",
    "nombre": "CAMBIO DE ABRAZADERA DE MUELLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1875",
    "nombre": "TINER",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1876",
    "nombre": "TAMBOR DE RUEDA DELANTEA OF-1721",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1877",
    "nombre": "ICM",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1878",
    "nombre": "BALDE DE GRASA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1879",
    "nombre": "BOCINA DE BARRA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1880",
    "nombre": "STIKERS DE ALO ATU",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1881",
    "nombre": "FABRICACION DE TUBERIA DE AIRE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1882",
    "nombre": "PINTURA POLIVRETARO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1883",
    "nombre": "CATALIZADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1884",
    "nombre": "TANQUE EXPANSION",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1885",
    "nombre": "CEBADOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1886",
    "nombre": "SOQUET POST",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1887",
    "nombre": "CODITO DE AIRE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1888",
    "nombre": "RELOJ DE PRESION",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1889",
    "nombre": "COPIA DE LLAVE DE BUS, POR ROBO ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1890",
    "nombre": "RETEN DELANTERO GOLDEN",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1891",
    "nombre": "CHALECO PARA COBRADOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1892",
    "nombre": "TRABAJO DE PLANCHADO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1893",
    "nombre": "ACC 4 VIAS KNORR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1894",
    "nombre": "CONJUNTO CENTRAL, CARACOL ESCAPE Y VALVULA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1895",
    "nombre": "GUANTES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1896",
    "nombre": "TEMPLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1897",
    "nombre": "ROTULAS DE ARTICULACION",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1898",
    "nombre": "DESAJUSTE DE TUERCA DE CAJA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1899",
    "nombre": "SERVICIO DE PERNO CENTRAL Y SOPORTE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1900",
    "nombre": "BARNIZ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1901",
    "nombre": "ACCESORIO DE CAJA DE DIRECCION",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1902",
    "nombre": "CAMBIO DE 2 PAÃ‘OS LATERALES Y ANGULOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1903",
    "nombre": "CAMBIO DE ARTICULACION DE PALANCA DE CAMBIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1904",
    "nombre": "SOLDADURA DE ABRAZADERA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1905",
    "nombre": "VIBRADOR DE TUBO DE ESCAPE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1906",
    "nombre": "PASAVOCES",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1907",
    "nombre": "SUPERBLU",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1908",
    "nombre": "SOLDADURA DE NIPLES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1909",
    "nombre": "RETEN DE CIGUEÃ‘AL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1910",
    "nombre": "FABRICACION DE TUBO DE AIRE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1911",
    "nombre": "PONCHO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1912",
    "nombre": "LEINAS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1913",
    "nombre": "GATA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1914",
    "nombre": "CASTILLO LAMINADO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1915",
    "nombre": "TAPA DE RODAJE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1916",
    "nombre": "ROLLO PAPEL",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1917",
    "nombre": "CAMBIO DE LLANTAS NUEVAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1918",
    "nombre": "LLANTAS USADAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1919",
    "nombre": "EMBOCINADO DE BOTELLA DE PUERTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1920",
    "nombre": "CARTUCHO DE FILTRO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1921",
    "nombre": "RASTRILLO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1922",
    "nombre": "CONJITILLO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1923",
    "nombre": "METROS TERMOCONTRAIBLE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1924",
    "nombre": "ACOPLES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1925",
    "nombre": "CALENDARIOS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1926",
    "nombre": "MANTENIMIENTO DE MUELLES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1927",
    "nombre": "EMBOCINADO DE MUELLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1928",
    "nombre": "TOPES DE MUELLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1929",
    "nombre": "MANTENIMIENO DE RODAJES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1930",
    "nombre": "JUEGO DE EXTENSION",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1931",
    "nombre": "MUELLE MADRE DELANTERO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1932",
    "nombre": "DADO INPACTO 3\/4 X 30",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1933",
    "nombre": "EMBOCINADO DE PALANCA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1934",
    "nombre": "SNR N 12680.S04.H100  32 X 62 X 18MM",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1935",
    "nombre": "TRATAMIENTO ADRIAN",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1936",
    "nombre": "KIT EMBRAGUE BRUCE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1937",
    "nombre": "JUEGO DE RETENE GRANDE Y CHICO PRA GOLDEN EN JAPONES NOK",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1938",
    "nombre": "CILINDRO DE ACEITE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1939",
    "nombre": "PINTURA DISOLVENTE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1940",
    "nombre": "PARABRISA POSTERIOR GOLDEN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1941",
    "nombre": "SOPORTE DE BARRA ESTABILIZADORA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1942",
    "nombre": "RECTIFICACION DE CULATA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1943",
    "nombre": "RODAJE COLLARIN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1944",
    "nombre": "ANGULO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1945",
    "nombre": "FOCO DE FRENO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1946",
    "nombre": "RELLENO DE POTE BATERIA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1947",
    "nombre": "CUADRAR PARACHOQUE, SOLDAR + 4 PUNTOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1948",
    "nombre": "JEBE DE KARDAN",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1949",
    "nombre": "EJE DE TRICO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1950",
    "nombre": "FOCO H4 P45T NARVA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1951",
    "nombre": "RETENES DE VÃLVULA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1952",
    "nombre": "RETENES DE RUEDA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1953",
    "nombre": "FORMADOR DE EMPAQUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1954",
    "nombre": "RECIBOS REAL STAR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1955",
    "nombre": "FILTROS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1956",
    "nombre": "SACAR BUS DE COMISARIA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1957",
    "nombre": "SERVICIO RECARGA DE EXTINTOR DE 20 LIBRAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1958",
    "nombre": "RECARGA DE EXTINTOR C02-BC DE 5KG",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1959",
    "nombre": "REBOBINADO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1960",
    "nombre": "RELLENAR BASE DE MUELLE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1961",
    "nombre": "ARENA GRUESA, P. CHANCADA, CEMENTO, PT0 AZUL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1962",
    "nombre": "MADERA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1963",
    "nombre": "MARTILLO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1964",
    "nombre": "PIE DE TECHO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1965",
    "nombre": "CINTA NEGRA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1966",
    "nombre": "CABLE DE TIERRA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1967",
    "nombre": "1 HORA DE MAQUINA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1968",
    "nombre": "RECIBOS SIMPLE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1969",
    "nombre": "FABRICACION DEL MULTIPLE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1970",
    "nombre": "PASADA DE MACHO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1971",
    "nombre": "7 FAROS LATERALES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1972",
    "nombre": "PERILLA DE PALANCA DE CAMBIOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1973",
    "nombre": "RODAJES, CARBON + SERVICIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1974",
    "nombre": "TOBERA YNYECTOR ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1975",
    "nombre": "PRUEBA HIDROSTATICA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1976",
    "nombre": "PORTA DOCUMENTOS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1977",
    "nombre": "ADAPTADOR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1978",
    "nombre": "DISCO DE CONCRETO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1979",
    "nombre": "LLANTAS 12 R22.5 HEFLEY",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1980",
    "nombre": "SENSOR DE PRESION DE ACEITE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1981",
    "nombre": "2 VIDRIOS FIJOS 1 LAMINADO PUERTA POSTE",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1982",
    "nombre": "1 VIDRIO FIJO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1983",
    "nombre": "ESPEJOS VARIOS 2 CHAPAS PARA ESPEJOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1984",
    "nombre": "FRESCO C\/ ESPALDAR",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1985",
    "nombre": "BARRA LED BLANCA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1986",
    "nombre": "AMORTIGUADORES DE MASCARILLA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1987",
    "nombre": "GRASA DE RODAJE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1988",
    "nombre": "TELEVISOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1989",
    "nombre": "BOCINA, ACCESORIOS E INSTALACION",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1990",
    "nombre": "RECARGA DE EXTINTOR PQS DE 9KG",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1991",
    "nombre": "RECARGA DE EXTINTOR PQS DE 6KG",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1992",
    "nombre": "SERVICIO DE LUCES (PANEL)",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1993",
    "nombre": "BOTON DE ARRANQUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1994",
    "nombre": "RODAJE POSTERIOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1995",
    "nombre": "LLAVE TROCK",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1996",
    "nombre": "TAPIZADO DE ASIENTO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1997",
    "nombre": "BROCA DE METAL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1998",
    "nombre": "SERVICIO MECANICO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "1999",
    "nombre": "REPARACION DE COMPUTADORA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2000",
    "nombre": "CAMBIO ACCESORIO BOMBA DE AGUA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2001",
    "nombre": "ADAPTAR PUNTA DE CARDAN ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2002",
    "nombre": "PORTA CHIP DE GAS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2003",
    "nombre": "BASE DE CAJA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2004",
    "nombre": "ACCESORIO DE BREKE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2005",
    "nombre": "IMPRESORA CANON",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2006",
    "nombre": "RADIOS MOTOROLA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2007",
    "nombre": "1 DISCOM COMPLETO 1 DIAFRACMA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2008",
    "nombre": "GAS PARA EL BALON DE AUXILIO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2009",
    "nombre": "PALO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2010",
    "nombre": "1 MASILLAS ROBERTO STAR 3000 2 LIJAS CIRCULAR 80-120",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2011",
    "nombre": "REPARACION DE CULATA",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2012",
    "nombre": "1 GALON DE ACEITE AGRANEL ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2013",
    "nombre": "SERVICIO REPARACION DE LLANTA ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2014",
    "nombre": "`RESPUESTO PARA COMPRESORA ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2015",
    "nombre": "1  SONDEODA DE RADIADOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2016",
    "nombre": "RESORTE DE PULMON DE RETENES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2017",
    "nombre": "WAFER 8Z1 1\/2",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2018",
    "nombre": "MASILLA OBERLO MAXI FILL",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2019",
    "nombre": "BOCINAS P\/CAÃ‘A DE BOBINA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2020",
    "nombre": "3 LIJAS 360",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2021",
    "nombre": "8 PERNOS 1\/2 4 PERNOS 1\/2",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2022",
    "nombre": "10 PERNOS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2023",
    "nombre": "FIBRERO",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2024",
    "nombre": "6 UNIONES DE BRONCE 1\/4 ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2025",
    "nombre": "2 PUNTA TALADRO 2 BROCA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2026",
    "nombre": "4 DISCO 2 CUTER 4 PERNOS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2027",
    "nombre": "VALVULA RELAY",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2028",
    "nombre": "01 MANGERA Y  01ABRAZADERA ",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2029",
    "nombre": "2 LIJAS 80 2 LIJAS 120",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2030",
    "nombre": "RALLADOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2031",
    "nombre": "1 PARCHE DE LLANTA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2032",
    "nombre": "9  PERNOS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2033",
    "nombre": "BUJIAS NGK BKRSE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2034",
    "nombre": "COMPRA DE GAS PD 006 CONDUCTOR CHUYOS",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2035",
    "nombre": "6 GRASA FRENOSA AZUL  ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2036",
    "nombre": "COMPRA DE GAS PD 98 AAV-843",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2037",
    "nombre": "COMPRA DE GASOLINA PD 98 ASK-909",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2038",
    "nombre": "02 DISCO 10 PERNOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2039",
    "nombre": "08 PERNOS 04 PERNOS 01 DISCO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2040",
    "nombre": "06 PERNOS 01 BROCA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2041",
    "nombre": "06 PERNOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2042",
    "nombre": "07 PERNOS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2043",
    "nombre": "MOTA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2044",
    "nombre": "03 UNIDAD DE SILICONA GREY 02 RETEN POSTERIOR MERCEDES ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2045",
    "nombre": "CALAVERA O SOPORTE DE PATIN",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2046",
    "nombre": "05 CINTO 3\/4 0 LIJAS  ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2047",
    "nombre": "05 CINTOS 3\/4 06 LIJAS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2048",
    "nombre": "1 FARO DELANTERO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2049",
    "nombre": "1 FOCO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2050",
    "nombre": "DEPOSITO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2051",
    "nombre": "06 LIJAS 01 DISCO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2052",
    "nombre": "03 CINTAS AISLANTE 01 TINER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2053",
    "nombre": "01 MANGUERA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2054",
    "nombre": "05 FOCO LATERALES 04 FOCOS  01 CAJA DE FOCOS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2055",
    "nombre": "01 FOCO DELANTERO MODAZA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2056",
    "nombre": "SOLDADO DE INTERCOOLER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2057",
    "nombre": "BOMBA DE OXIGENO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2058",
    "nombre": "01 JUEGO DE ZAPTA DELANTERO 02 RESORTE DE FRENO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2059",
    "nombre": "01 JUEGO DE ZAPATAS POSTERIOR YUTONG",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2060",
    "nombre": "03 FOROS DELANTEROS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2061",
    "nombre": "COMPRA DE GAS PD 99 ASK-806",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2062",
    "nombre": "MANGUERA DE COMPRESORA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2063",
    "nombre": "04 TALCO 01 DISCO 1\/2",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2064",
    "nombre": "04 PERNOS 1\/2 X 21\/2 04 PERNOS 1\/6",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2065",
    "nombre": "02 DISCO 02 DISCO 1\/2 01 TALCO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2066",
    "nombre": "01 POR FABRICACION DE 5 PIEZA SEGUNDA MUESTRA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2067",
    "nombre": "PERNOS 04",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2068",
    "nombre": "04 PERNOS MEDIANOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2069",
    "nombre": "01 POR ASER 4 HUECO Y ABASE ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2070",
    "nombre": "MALLA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2071",
    "nombre": "SONDERO DE RAYADOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2072",
    "nombre": "RESORTE DE FRENO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2073",
    "nombre": "01 COMPRADA DE REPUESTOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2074",
    "nombre": "01 FRENOSA LIQUIDO DE FRENO GRANDE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2075",
    "nombre": "COMPRA DE GAS PD 107 ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2076",
    "nombre": "MANTENIMIENTO DE BOMBA DE PUERTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2077",
    "nombre": "03 CINTA 03 LIJAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2078",
    "nombre": "01 KIT DE BUJIA DOBLE ELECTRODOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2079",
    "nombre": "03 NIPTEN UNION",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2080",
    "nombre": "04 PERNOS MEDIA 04 PERNOS GRANDE ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2081",
    "nombre": "12 PERNOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2082",
    "nombre": "15 PERNOS  02 LLAVE  N\" 11",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2083",
    "nombre": "LLANTA SULFULL  295 X 80  22.5",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2084",
    "nombre": "04 CINTAS 01 CUTER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2085",
    "nombre": "10 PERNOS 02 LLAVES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2086",
    "nombre": "CABLE MELLIZO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2087",
    "nombre": "BOMBA EMBRAGUE PRIMARIO OF1721 CAÃ‘ON",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2088",
    "nombre": "02 FOCOS TODO",
    "unidad": "MTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2089",
    "nombre": "02 FOCO TODO",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2090",
    "nombre": "01 ESPEJO LATERAL LADO DERECHO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2091",
    "nombre": "04 CINTAS 03 TALCO 04 PERNOS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2092",
    "nombre": "COMPRA DE GASOLINA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2093",
    "nombre": "02 BOLSA FIBRAFORTES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2094",
    "nombre": "PARCHE DE LLANTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2095",
    "nombre": "05 LIJAS 01 BROCHA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2096",
    "nombre": "VENTA DE LLANTA USADA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2097",
    "nombre": "CAJA DE TIMON ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2098",
    "nombre": "COMPRA DE ESPEJO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2099",
    "nombre": "01 TINER 04 CINTO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2100",
    "nombre": "030TALCON 02 PUNTA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2101",
    "nombre": "2 JUEGOS DE ZAPATA POSTERIOR  DELANTERO Y 1 RESORTE FRENOSO",
    "unidad": "JUEGO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2102",
    "nombre": "10 PERNOS 01 BROCA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2103",
    "nombre": "02 BROCA 10 PERNOS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2104",
    "nombre": " 01 COMPRA DE REPUESTO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2105",
    "nombre": "CUBIERTA DE PALANCA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2106",
    "nombre": "01 SIKA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2107",
    "nombre": "2 TRASLADO DE LLANATA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2108",
    "nombre": "4 LLANTAS TRASLADO AL PD 97 ASK-836",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2109",
    "nombre": "02 DISCO 03 LIJAS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2110",
    "nombre": "COMPRA DE TARIFARIO PARA SURQUILLO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2111",
    "nombre": "04 CINTAS 01 TINER 01 CUTER ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2112",
    "nombre": ".2 DISCO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2113",
    "nombre": "ACC DE CULATIN",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2114",
    "nombre": "01 TINER 04 CINTAS 05 LIJAS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2115",
    "nombre": "ABRAZADERA DE CARDAN",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2116",
    "nombre": "RECONSTRUCCION DE CARDAN",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2117",
    "nombre": "TAPON DE BRONCE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2118",
    "nombre": "EMPAQUE ENFRIADOR ACEITE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2119",
    "nombre": "EMPAQUE JEBE BASE FILTRO DE ACEITE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2120",
    "nombre": "03 TALCON 02 DISCO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2121",
    "nombre": "RECTIFICAR CORONA TODAS LAS PARTES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2122",
    "nombre": "ACEITE  PARA CORONA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2123",
    "nombre": "SUNDEADA DE RAYADOR ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2124",
    "nombre": "BRONCE DE CAJA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2125",
    "nombre": "1\/4 ZINCROMOTICO 03 CINTAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2126",
    "nombre": "1\/2 HUAYPE 02 DISCO 02 TALCO 01 CUTER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2127",
    "nombre": "1 DISCO 01 BROCA 05 PERNOS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2128",
    "nombre": "ACC. VALVULA DE RELAY",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2129",
    "nombre": "04 TALCOS 03 CINTAS 01 BROCHA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2130",
    "nombre": "3\/4 HIDROLINA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2131",
    "nombre": "02 YESO 06  PERNOS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2132",
    "nombre": "03 CINTAS 03 LIJAS N* 40 01 TALCO 01 CUTER ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2133",
    "nombre": "01 SOLDIMIX ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2134",
    "nombre": "03 CINTAS 10  PERNOS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2135",
    "nombre": "02 FLOCO LATERAL 1 FARO  1 FOCO N* 2  2 BUJILLAS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2136",
    "nombre": "TALCO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2137",
    "nombre": "03 CINTAS 01 TINER",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2138",
    "nombre": "01  JABON ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2139",
    "nombre": "PRENSADO DE TREN FIJO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2140",
    "nombre": "06 PERNOS GRANDES 10 PERNOS 02 BROCA 01PUNTA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2141",
    "nombre": "TINNER",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2142",
    "nombre": "CORTE DE HOJA DE MUELLE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2143",
    "nombre": "1 K DE HUAYPE 03 LIJAS 01 CUTER ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2144",
    "nombre": "1 SIKA 01 BROCA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2145",
    "nombre": "02 PERNOS 5\/8  05 PERNOS 1\/4",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2146",
    "nombre": "1 CAMBIO DE LLANTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2147",
    "nombre": "BOCINA PALANCA DE CAMBIO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2148",
    "nombre": "PULIR BASE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2149",
    "nombre": "ABRAZADERA DE TURBO CHICO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2150",
    "nombre": "JEBE DE CAMISA DE INYECTOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2151",
    "nombre": "2 UND ACOPLE 1 ACOPLE 4 ABRASADERAS 2 GUIAS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2152",
    "nombre": "NIPLE DE SERVO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2153",
    "nombre": "ANULACION DE UREA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2154",
    "nombre": "1 CAMBIO DE FORRO 01 CAMBIO DE PLATO COMPLETO  MERCEDES ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2155",
    "nombre": "EMPAQUE DE ESCAPE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2156",
    "nombre": "SWICTH DE PEDAL DE FRENO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2157",
    "nombre": "02 LLAVE  N* 17  02 LLAVES N* 19",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2158",
    "nombre": "08 PERNOS 01 BROCA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2159",
    "nombre": "7 CAMBIO DE LLANTA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2160",
    "nombre": "04 CINTAS MASKETIN 02 DISCO 1\/4",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2161",
    "nombre": "PAGO POR PERDIDA DE PARACHOQUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2162",
    "nombre": "SIKATEX",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2163",
    "nombre": "PRENSADO DE PIÃ‘ONES",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2164",
    "nombre": "04 CINTAS 01 DISCO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2165",
    "nombre": "DISCO COMPLETO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2166",
    "nombre": "DESBREKEADOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2167",
    "nombre": "04 PERNOS 3\/8   05  PERNOS 3\/6",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2168",
    "nombre": "SEGURO DE ESPEJO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2169",
    "nombre": "SERVICIO PRENSAR CAJA ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2170",
    "nombre": "05 PERNOS 3\/8   05  1\/4",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2171",
    "nombre": "02 DISCO 01 ENCHUFE ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2172",
    "nombre": "1\/4 ACEITE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2173",
    "nombre": "TUBO DE BOCINA PALANCA DE CAMBIO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2174",
    "nombre": "PALACA DE CAMBIO (MANUBRIO) ",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2175",
    "nombre": "RELLENAR EJE DE CAJA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2176",
    "nombre": "HUAYPE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2177",
    "nombre": "CAMBIAR PIÃ‘ONES DE TREN FIJO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2178",
    "nombre": " 6 TRAPOS  3 CUTTER ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2179",
    "nombre": "13 PERNOS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2180",
    "nombre": "MARCO DE ESPEJO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2181",
    "nombre": "5 PERNOS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2182",
    "nombre": "6 PAPEL LUTRES AMARILLO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2183",
    "nombre": "8 PAPEL LUTRE AMARILLO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2184",
    "nombre": "PRESTAMO ACCIDENTE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2185",
    "nombre": "EMBRGUE VISCOO (VICOSTATICO)",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2186",
    "nombre": "02 BROCA 02 DISCO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2187",
    "nombre": "SERVICIO DE PULIDO DE BASE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2188",
    "nombre": "01 TINER 06 CINTAS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2189",
    "nombre": "02 CINTAS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2190",
    "nombre": "CAMISA COMPRESORA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2191",
    "nombre": "2 KG DE TRAPO  01 TERMINAL PARA BATERIA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2192",
    "nombre": "2 ABRASADERAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2193",
    "nombre": "02 BROCAS 05 PERNOS ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2194",
    "nombre": "PASAJE MECANICO SEGUNDO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2195",
    "nombre": "05 PERNOS 01 BROCA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2196",
    "nombre": "05 PERNOS 01 PUNTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2197",
    "nombre": "COIMA SAT P\/EVITAR BUS EN DEPOSITO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2198",
    "nombre": "SERVICIO LIMPIADOR DE AIRE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2199",
    "nombre": "02 TALCO 05 PERNOS 01 DISCO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2200",
    "nombre": "SODA CAUSTICA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2201",
    "nombre": "1 ESPEJO COMPLETO  PUNTO CIEGO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2202",
    "nombre": "SOLTADURA ATOGENA DE CAÃ‘ERIA DE AGUA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2203",
    "nombre": "FUEGO DE CARBON 05 PERNOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2204",
    "nombre": "LIJA DE 120 3M AZULES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2205",
    "nombre": "SERPENTIN",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2206",
    "nombre": "1 BALDE Y MEDIO DE ACEITE  + INFLADA DE LLANTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2207",
    "nombre": "UNION DE 1\/4",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2208",
    "nombre": "INSPECCION ANUAL GNV",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2209",
    "nombre": "20 REMACHES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2210",
    "nombre": "REPARACION DE BOCAMASA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2211",
    "nombre": "LLAVE DE CLAXON",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2212",
    "nombre": "INTERNAMIENTO EN DEPOSITO\/PAPELETA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2213",
    "nombre": "SOMBRERO VALVULA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2214",
    "nombre": "ACTIVACION DE CILINDROS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2215",
    "nombre": "2 PARCHES DE LLANTAS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2216",
    "nombre": "RODAJE DE RUEDA DELANTERA GOLDEN",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2217",
    "nombre": "BOCINA (TUBO) BY PASS BOMBA DE AGUA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2218",
    "nombre": "3 CINTAS 02 DISCO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2219",
    "nombre": "1 ROTACION DE LLANTA  1 VOLTEADA DERECHA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2220",
    "nombre": "VALVULA COMBUSTIBLE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2221",
    "nombre": "4 PERNOS 03 TALCO 02 BROCHA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2222",
    "nombre": "02 LLAVES N13 02 LLAVES N14",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2223",
    "nombre": "AUXILIO POR PETROLEO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2224",
    "nombre": "1 BALDE DE ACEITE ",
    "unidad": "LTS",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2225",
    "nombre": "1 PARCHE DE LLANTA FRIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2226",
    "nombre": "CULATA DE MOTOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2227",
    "nombre": "1 KG DE TRAPO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2228",
    "nombre": "3 CINTAS  INSLANTES 3M",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2229",
    "nombre": "2 TALCOS 2 DISCOS 1 BROCA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2230",
    "nombre": "ENCAMISETADO DE COMPRESORA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2231",
    "nombre": "02 LIJAS N220",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2232",
    "nombre": "VISAGRA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2233",
    "nombre": "MANTENIMIENTO DE BOMBA UNITARIA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2234",
    "nombre": "ZINCROMATICO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2235",
    "nombre": "PINTURA NEGRA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2236",
    "nombre": "MUELLE ACOPLADO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2237",
    "nombre": "SEGURO DE MUELLE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2238",
    "nombre": "FABRICAR PIEZA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2239",
    "nombre": "5 PERNOS CHICOS 4 PERNOS GRANDES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2240",
    "nombre": "PINTURA VERDE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2241",
    "nombre": "PINTURA ROJO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2242",
    "nombre": "PINTURA NARANJA",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2243",
    "nombre": "2 PUNTOS CIEGOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2244",
    "nombre": "1 ESPEJO PLANO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2245",
    "nombre": "CINTAS DE 3\/4X",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2246",
    "nombre": "PINTURA ALTO BRILLO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2247",
    "nombre": "MILLARES DE TARJETAS DE CONTROL ROLUESA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2248",
    "nombre": "MANTENIMIENTO DE PANEL ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2249",
    "nombre": "ALINEAR MUELLES",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2250",
    "nombre": "CENIZERO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2251",
    "nombre": "01 SILINICONA  01 HUAYPE ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2252",
    "nombre": "BISTURI",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2253",
    "nombre": "PPAGO POR CHOQUE",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2254",
    "nombre": "REPUERTO",
    "unidad": "OTRO",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2255",
    "nombre": "PIÃ‘ON",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2256",
    "nombre": "PIÃ‘ON Y CORONA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2257",
    "nombre": "ANILLO BIPARTIDO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2258",
    "nombre": "RETEN CORONA EXTERNO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2259",
    "nombre": "TUERCA REG DELANTERO PIÃ‘OM",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2260",
    "nombre": "INTERES",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2261",
    "nombre": "VICTURITI",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2262",
    "nombre": "02 LIJAS 02 DISCO  1 KG DE TRAPO 01 TORNILLO ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2263",
    "nombre": "MOVILIDAD MAS AUXILIO",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2264",
    "nombre": "JUEGO DE ESPEJOS",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2265",
    "nombre": "PALANCA CORRRESIZA, PERNOS",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2266",
    "nombre": "3 PERNOS 3\/8 01 BROCA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2267",
    "nombre": "FABRICACION DE CAÃ‘ERIA HIDRAULICO",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2268",
    "nombre": "PISTOLA CAUTIL Y ESTAÃ‘O",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2269",
    "nombre": "BARRA DE TRANSMISION",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2270",
    "nombre": "MARIUELA DE MOTOR",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2271",
    "nombre": "01 SOPORTE RECOMPUTADO FUNDIDO  01 PIN DE MUELLE 01 BROCA DE MUELLE ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2272",
    "nombre": "1\/2 KILO DE SOLDADURA ",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2273",
    "nombre": "CARCAZA DE FILTRO DE AIRE",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2274",
    "nombre": "REPUESTO PARA FRENO DE EMBRAGUE",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2275",
    "nombre": "05 PERNOS 01 BROCA 01 PUNTA",
    "unidad": "UNIDAD",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2276",
    "nombre": "TAPASOL",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
},
{
    "id": "2277",
    "nombre": "TERUCAL",
    "unidad": "",
    createdAt: now, updatedAt: now,
    
}

  ]);

},

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Reproductos', null, {});

    }
};            