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

var promSOM;
var promOBS;
var promSI;
var promDEP;
var promANS;
var promHOS;
var promFOB;
var promPAR;
var promPSIC;
var promADIC;
var SOM;
var OBS;
var SI;
var DEP;
var ANS;
var HOS;
var FOB;
var PAR;
var PSIC;
var IGS;
var TSP = 0;
var IMSP;


function calcularSomatizaciones(item){
  let value = parseInt(document.querySelector(`input[name="${item}"]:checked`).value);
  if (value != 0){
    TSP++;
  }
  let itemName = document.querySelector(`input[name="${item}"]:checked`).name;
  somatizacionesMap.set(itemName,value);
}
function calcularObsesionesYCompulsiones(item){
  let value = parseInt(document.querySelector(`input[name="${item}"]:checked`).value);
  if (value != 0){
    TSP++;
  }
  let itemName = document.querySelector(`input[name="${item}"]:checked`).name;
  obsesionesYCompulsionesMap.set(itemName,value);
}
function calcularSensibilidadInterpersonal(item){
  let value = parseInt(document.querySelector(`input[name="${item}"]:checked`).value);
  if (value != 0){
    TSP++;
  }
  let itemName = document.querySelector(`input[name="${item}"]:checked`).name;
  sensibilidadInterpersonalMap.set(itemName,value);
}
function calcularDepresion(item){
  let value = parseInt(document.querySelector(`input[name="${item}"]:checked`).value);
  if (value != 0){
    TSP++;
  }
  let itemName = document.querySelector(`input[name="${item}"]:checked`).name;
  depresionMap.set(itemName,value);
}
function calcularAnsiedad(item){
  let value = parseInt(document.querySelector(`input[name="${item}"]:checked`).value);
  if (value != 0){
    TSP++;
  }
  let itemName = document.querySelector(`input[name="${item}"]:checked`).name;
  ansiedadMap.set(itemName,value);
}
function calcularHostilidad(item){
  let value = parseInt(document.querySelector(`input[name="${item}"]:checked`).value);
  if (value != 0){
    TSP++;
  }
  let itemName = document.querySelector(`input[name="${item}"]:checked`).name;
  hostilidadMap.set(itemName,value);
}
function calcularAnsiedadFobica(item){
  let value = parseInt(document.querySelector(`input[name="${item}"]:checked`).value);
  if (value != 0){
    TSP++;
  }
  let itemName = document.querySelector(`input[name="${item}"]:checked`).name;
  ansiedadFobicaMap.set(itemName,value);
}
function calcularIdeacionParanoide(item){
  let value = parseInt(document.querySelector(`input[name="${item}"]:checked`).value);
  if (value != 0){
    TSP++;
  }
  let itemName = document.querySelector(`input[name="${item}"]:checked`).name;
  ideacionParanoideMap.set(itemName,value);
}
function calcularPsicoticismo(item){
  let value = parseInt(document.querySelector(`input[name="${item}"]:checked`).value);
  if (value != 0){
    TSP++;
  }
  let itemName = document.querySelector(`input[name="${item}"]:checked`).name;
  psicoticismoMap.set(itemName,value);
}
function calcularItemsAdicionales(item){
  let value = parseInt(document.querySelector(`input[name="${item}"]:checked`).value);
  if (value != 0){
    TSP++;
  }
  let itemName = document.querySelector(`input[name="${item}"]:checked`).name;
  itemsAdicionalesMap.set(itemName,value);
}

function calcularResultado(){
  // let nombre = document.getElementById("fullName").value;
  let edad = parseInt(document.getElementById("age").value);
  let sexo = document.querySelector('input[name="sex"]:checked').value;

  const form = document.getElementById("miFormulario");
  if (form.checkValidity()) {
    somatizaciones.forEach(calcularSomatizaciones);
    let sumSOM = 0;
    somatizacionesMap.forEach((value) => {
      sumSOM += value;
    });
    promSOM = (sumSOM / somaCantPreg).toFixed(2);
    document.getElementById("SOM").innerHTML = promSOM;

    obsesionesYCompulsiones.forEach(calcularObsesionesYCompulsiones);
    let sumOBS = 0;
    obsesionesYCompulsionesMap.forEach((value) => {
      sumOBS += value;
    });
    promOBS = (sumOBS / obseCantPreg).toFixed(2);
    document.getElementById("OBS").innerHTML = promOBS;

    sensibilidadInterpersonal.forEach(calcularSensibilidadInterpersonal);
    let sumSI = 0;
    sensibilidadInterpersonalMap.forEach((value) => {
      sumSI += value;
    });
    promSI = (sumSI / sensiCantPreg).toFixed(2);
    document.getElementById("SI").innerHTML = promSI;

    depresion.forEach(calcularDepresion);
    let sumDEP = 0;
    depresionMap.forEach((value) => {
      sumDEP += value;
    });
    promDEP = (sumDEP / depCantPreg).toFixed(2);
    document.getElementById("DEP").innerHTML = promDEP;
    
    ansiedad.forEach(calcularAnsiedad);
    let sumANS = 0;
    ansiedadMap.forEach((value) => {
      sumANS += value;
    });
    promANS = (sumANS / ansiCantPreg).toFixed(2);
    document.getElementById("ANS").innerHTML = promANS;

    hostilidad.forEach(calcularHostilidad);
    let sumHOS = 0;
    hostilidadMap.forEach((value) => {
      sumHOS += value;
    });
    promHOS = (sumHOS / hostCantPreg).toFixed(2);
    document.getElementById("HOS").innerHTML = promHOS;

    ansiedadFobica.forEach(calcularAnsiedadFobica);
    let sumFOB = 0;
    ansiedadFobicaMap.forEach((value) => {
      sumFOB += value;
    });
    promFOB = (sumFOB / ansiFobCantPreg).toFixed(2);
    document.getElementById("FOB").innerHTML = promFOB;

    ideacionParanoide.forEach(calcularIdeacionParanoide);
    let sumPAR = 0;
    ideacionParanoideMap.forEach((value) => {
      sumPAR += value;
    });
    promPAR = (sumPAR / ideaCantPreg).toFixed(2);
    document.getElementById("PAR").innerHTML = promPAR;

    psicoticismo.forEach(calcularPsicoticismo);
    let sumPSIC = 0;
    psicoticismoMap.forEach((value) => {
      sumPSIC += value;
    });
    promPSIC = (sumPSIC / psicoCantPreg).toFixed(2);
    document.getElementById("PSIC").innerHTML = promPSIC;

    itemsAdicionales.forEach(calcularItemsAdicionales);
    let sumADIC = 0;
    psicoticismoMap.forEach((value) => {
      sumADIC += value;
    });
    promADIC = (sumADIC / itemsCantPreg).toFixed(2);
    document.getElementById("ADIC").innerHTML = promADIC;

    IGS = ((sumSOM+sumOBS+sumSI+sumDEP+sumANS+sumHOS+sumFOB+sumPAR+sumPSIC+sumADIC) / 90).toFixed(2);
    document.getElementById("IGS").innerHTML = IGS;
    document.getElementById("TSP").innerHTML = TSP;
    IMSP = ((sumSOM+sumOBS+sumSI+sumDEP+sumANS+sumHOS+sumFOB+sumPAR+sumPSIC+sumADIC) / TSP).toFixed(2);
    document.getElementById("IMSP").innerHTML = IMSP;
    TSP = 0;
    document.getElementById("error-message").style.display = "none";
  } else {
    document.getElementById("error-message").style.display = "block";
  }
  //Valores T Normalizados
  if (sexo == "female" && edad < 18){
    //SOM
    if (promSOM >= 0 && promSOM <= 0.04) {
      SOM = 30;
    } else if (promSOM >= 0.05 && promSOM <= 0.16) {
      SOM = 35;
    } else if (promSOM >= 0.17 && promSOM <= 0.32) {
      SOM = 40;
    } else if (promSOM >= 0.33 && promSOM <= 0.57) {
      SOM = 45;
    } else if (promSOM >= 0.58 && promSOM <= 0.95) {
      SOM = 50;
    } else if (promSOM >= 0.96 && promSOM <= 1.38) {
      SOM = 55;
    } else if (promSOM >= 1.39 && promSOM <= 1.72) {
      SOM = 60;
    } else if (promSOM >= 1.73 && promSOM <= 1.97) {
      SOM = 63;
    } else if (promSOM >= 1.98 && promSOM <= 2.45) {
      SOM = 65;
    } else if (promSOM >= 2.46 && promSOM <= 3.08) {
      SOM = 70;
    } else if (promSOM >= 3.09 && promSOM <= 3.37) {
      SOM = 75;
    } else {
      SOM = 80;
    }

    //OBS agregar valores tabla;
    if (promOBS >= 0 && promOBS <= 0.04) {
      OBS = 30;
    } else if (promOBS >= 0.05 && promOBS <= 0.16) {
      OBS = 35;
    } else if (promOBS >= 0.17 && promOBS <= 0.32) {
      OBS = 40;
    } else if (promOBS >= 0.33 && promOBS <= 0.57) {
      OBS = 45;
    } else if (promOBS >= 0.58 && promOBS <= 0.95) {
      OBS = 50;
    } else if (promOBS >= 0.96 && promOBS <= 1.38) {
      OBS = 55;
    } else if (promOBS >= 1.39 && promOBS <= 1.72) {
      OBS = 60;
    } else if (promOBS >= 1.73 && promOBS <= 1.97) {
      OBS = 63;
    } else if (promOBS >= 1.98 && promOBS <= 2.45) {
      OBS = 65;
    } else if (promOBS >= 2.46 && promOBS <= 3.08) {
      OBS = 70;
    } else if (promOBS >= 3.09 && promOBS <= 3.37) {
      OBS = 75;
    } else {
      OBS = 80;
    }

    //SI;
    //DEP;
    //ANS;
    //HOS;
    //FOB;
    //PAR;
    //PSIC;



  } else if (sexo == "male" && edad < 18) {

  } else if (sexo == "female" && edad >= 18) {
  
  } else if (sexo == "male" && edad >= 18) {

  }
}


