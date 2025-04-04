const somatizaciones = ["1", "4", "12", "27", "40", "42", "48", "49", "52", "53", "56", "58"];
const somaCantPreg = 12;

const obsesionesYCompulsiones = ["3", "9", "10", "28", "38", "45", "46", "51", "55", "65"];
const obseCantPreg = 10;

const sensibilidadInterpersonal = ["6", "21", "34", "36", "37", "41", "61", "69", "73"];
const sensiCantPreg = 9;

const depresion = ["5", "14", "15", "20", "22", "26", "29", "30", "31", "32", "54", "71", "79"];
const depCantPreg = 13;

const ansiedad = ["2", "17", "23", "33", "39", "57", "72", "78", "80", "86"];
const ansiCantPreg = 10;

const hostilidad = ["11", "24", "63", "67", "74", "81"];
const hostCantPreg = 6;

const ansiedadFobica = ["13", "25", "47", "50", "70", "75", "82"];
const ansiFobCantPreg = 7;

const ideacionParanoide = ["8", "18", "43", "68", "76", "83"];
const ideaCantPreg = 6;

const psicoticismo = ["7", "16", "35", "62", "77", "84", "85", "87", "88", "90"];
const psicoCantPreg = 10;

const itemsAdicionales = ["19", "44", "59", "60", "64", "66", "89"];
const itemsCantPreg = 7;

var somatizacionesMap = new Map([
    ["1", null], ["4", null], ["12", null], ["27", null], ["40", null], ["42", null],
    ["48", null], ["49", null], ["52", null], ["53", null], ["56", null], ["58", null]
  ]);
  
  var obsesionesYCompulsionesMap = new Map([
    ["3", null], ["9", null], ["10", null], ["28", null], ["38", null],
    ["45", null], ["46", null], ["51", null], ["55", null], ["65", null]
  ]);
  
  var sensibilidadInterpersonalMap = new Map([
    ["6", null], ["21", null], ["34", null], ["36", null], ["37", null],
    ["41", null], ["61", null], ["69", null], ["73", null]
  ]);
  
  var depresionMap = new Map([
    ["5", null], ["14", null], ["15", null], ["20", null], ["22", null],
    ["26", null], ["29", null], ["30", null], ["31", null], ["32", null],
    ["54", null], ["71", null], ["79", null]
  ]);
  
  var ansiedadMap = new Map([
    ["2", null], ["17", null], ["23", null], ["33", null], ["39", null],
    ["57", null], ["72", null], ["78", null], ["80", null], ["86", null]
  ]);
  
  var hostilidadMap = new Map([
    ["11", null], ["24", null], ["63", null], ["67", null], ["74", null], ["81", null]
  ]);
  
  var ansiedadFobicaMap = new Map([
    ["13", null], ["25", null], ["47", null], ["50", null],
    ["70", null], ["75", null], ["82", null]
  ]);
  
  var ideacionParanoideMap = new Map([
    ["8", null], ["18", null], ["43", null], ["68", null], ["76", null], ["83", null]
  ]);
  
  var psicoticismoMap = new Map([
    ["7", null], ["16", null], ["35", null], ["62", null], ["77", null],
    ["84", null], ["85", null], ["87", null], ["88", null], ["90", null]
  ]);
  
  var itemsAdicionalesMap = new Map([
    ["19", null], ["44", null], ["59", null], ["60", null],
    ["64", null], ["66", null], ["89", null]
  ]);


function calcularResutlado(){
    somatizaciones.forEach(calcularSomatizaciones);
    console.log("somatizaciones :" + somatizacionesMap);
}
  
function calcularSomatizaciones(item){
    //somatizaciones
    let value = parseInt(document.querySelector(`input[name="${item}"]:checked`).value);
    let itemName = document.querySelector(`input[name="${item}"]:checked`).name;
    somatizacionesMap.set(itemName,value);
}


