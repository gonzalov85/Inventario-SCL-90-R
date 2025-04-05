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
    if (promSOM <= 0.04) {
      SOM = 30;
    } else if (promSOM <= 0.16) {
      SOM = 35;
    } else if (promSOM <= 0.32) {
      SOM = 40;
    } else if (promSOM <= 0.57) {
      SOM = 45;
    } else if (promSOM <= 0.95) {
      SOM = 50;
    } else if (promSOM <= 1.38) {
      SOM = 55;
    } else if (promSOM <= 1.72) {
      SOM = 60;
    } else if (promSOM <= 1.97) {
      SOM = 63;
    } else if (promSOM <= 2.45) {
      SOM = 65;
    } else if (promSOM <= 3.08) {
      SOM = 70;
    } else if (promSOM <= 3.37) {
      SOM = 75;
    } else {
      SOM = 80;
    }

    //OBS
    if (promOBS <= 0.15) {
      OBS = 30;
    } else if (promOBS <= 0.35) {
      OBS = 35;
    } else if (promOBS <= 0.65) {
      OBS = 40;
    } else if (promOBS <= 1) {
      OBS = 45;
    } else if (promOBS <= 1.43) {
      OBS = 50;
    } else if (promOBS <= 1.88) {
      OBS = 55;
    } else if (promOBS <= 2.25) {
      OBS = 60;
    } else if (promOBS <= 2.50) {
      OBS = 63;
    } else if (promOBS <= 2.90) {
      OBS = 65;
    } else if (promOBS <= 3.25) {
      OBS = 70;
    } else if (promOBS <= 3.30) {
      OBS = 75;
    } else {
      OBS = 80;
    }

    //SI
    if (promSI <= 0.16) {
      SI = 30;
    } else if (promSI <= 0.32) {
      SI = 35;
    } else if (promSI <= 0.61) {
      SI = 40;
    } else if (promSI <= 0.94) {
      SI = 45;
    } else if (promSI <= 1.33) {
      SI = 50;
    } else if (promSI <= 1.78) {
      SI = 55;
    } else if (promSI <= 2.16) {
      SI = 60;
    } else if (promSI <= 2.38) {
      SI = 63;
    } else if (promSI <= 2.77) {
      SI = 65;
    } else if (promSI <= 3.34) {
      SI = 70;
    } else if (promSI <= 3.67) {
      SI = 75;
    } else {
      SI = 80;
    }

    //DEP
    if (promDEP <= 0.11) {
      DEP = 30;
    } else if (promDEP <= 0.26) {
      DEP = 35;
    } else if (promDEP <= 0.48) {
      DEP = 40;
    } else if (promDEP <= 0.85) {
      DEP = 45;
    } else if (promDEP <= 1.27) {
      DEP = 50;
    } else if (promDEP <= 1.73) {
      DEP = 55;
    } else if (promDEP <= 2.11) {
      DEP = 60;
    } else if (promDEP <= 2.38) {
      DEP = 63;
    } else if (promDEP <= 2.84) {
      DEP = 65;
    } else if (promDEP <= 3.44) {
      DEP = 70;
    } else if (promDEP <= 4.45) {
      DEP = 75;
    } else {
      DEP = 80;
    }

    //ANS
    if (promANS <= 0.05) {
      ANS = 30;
    } else if (promANS <= 0.20) {
      ANS = 35;
    } else if (promANS <= 0.40) {
      ANS = 40;
    } else if (promANS <= 0.70) {
      ANS = 45;
    } else if (promANS <= 1.15) {
      ANS = 50;
    } else if (promANS <= 1.65) {
      ANS = 55;
    } else if (promANS <= 2.05) {
      ANS = 60;
    } else if (promANS <= 2.30) {
      ANS = 63;
    } else if (promANS <= 2.77) {
      ANS = 65;
    } else if (promANS <= 3.58) {
      ANS = 70;
    } else if (promANS <= 4.20) {
      ANS = 75;
    } else {
      ANS = 80;
    }

    //HOS
    if (promHOS <= 0.08) {
      HOS = 30;
    } else if (promHOS <= 0.23) {
      HOS = 35;
    } else if (promHOS <= 0.39) {
      HOS = 40;
    } else if (promHOS <= 0.66) {
      HOS = 45;
    } else if (promHOS <= 1.08) {
      HOS = 50;
    } else if (promHOS <= 1.66) {
      HOS = 55;
    } else if (promHOS <= 2.25) {
      HOS = 60;
    } else if (promHOS <= 2.65) {
      HOS = 63;
    } else if (promHOS <= 3.18) {
      HOS = 65;
    } else if (promHOS <= 3.77) {
      HOS = 70;
    } else if (promHOS <= 4) {
      HOS = 75;
    } else {
      HOS = 80;
    }

    //FOB
    if (promFOB <= 0.07) {
      FOB = 30;
    } else if (promFOB <= 0.21) {
      FOB = 45;
    } else if (promFOB <= 0.43) {
      FOB = 50;
    } else if (promFOB <= 0.78) {
      FOB = 55;
    } else if (promFOB <= 1.14) {
      FOB = 60;
    } else if (promFOB <= 1.43) {
      FOB = 63;
    } else if (promFOB <= 2.07) {
      FOB = 65;
    } else if (promFOB <= 3.16) {
      FOB = 70;
    } else if (promFOB <= 3.43) {
      FOB = 75;
    } else {
      FOB = 80;
    }

    //PAR
    if (promPAR <= 0.08) {
      PAR = 30;
    } else if (promPAR <= 0.25) {
      PAR = 40;
    } else if (promPAR <= 0.5) {
      PAR = 45;
    } else if (promPAR <= 0.92) {
      PAR = 50;
    } else if (promPAR <= 1.42) {
      PAR = 55;
    } else if (promPAR <= 1.83) {
      PAR = 60;
    } else if (promPAR <= 2.08) {
      PAR = 63;
    } else if (promPAR <= 2.58) {
      PAR = 65;
    } else if (promPAR <= 3.39) {
      PAR = 70;
    } else if (promPAR <= 3.89) {
      PAR = 75;
    } else {
      PAR = 80;
    }

    //PSIC;



  } else if (sexo == "male" && edad < 18) {

  } else if (sexo == "female" && edad >= 18) {
  
  } else if (sexo == "male" && edad >= 18) {

  }
}


