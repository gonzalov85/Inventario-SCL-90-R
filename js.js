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
var promIGS;
var IGS;
var TSP = 0;
var NTSP;
var promIMSP;
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

    obsesionesYCompulsiones.forEach(calcularObsesionesYCompulsiones);
    let sumOBS = 0;
    obsesionesYCompulsionesMap.forEach((value) => {
      sumOBS += value;
    });
    promOBS = (sumOBS / obseCantPreg).toFixed(2);

    sensibilidadInterpersonal.forEach(calcularSensibilidadInterpersonal);
    let sumSI = 0;
    sensibilidadInterpersonalMap.forEach((value) => {
      sumSI += value;
    });
    promSI = (sumSI / sensiCantPreg).toFixed(2);

    depresion.forEach(calcularDepresion);
    let sumDEP = 0;
    depresionMap.forEach((value) => {
      sumDEP += value;
    });
    promDEP = (sumDEP / depCantPreg).toFixed(2);

    ansiedad.forEach(calcularAnsiedad);
    let sumANS = 0;
    ansiedadMap.forEach((value) => {
      sumANS += value;
    });
    promANS = (sumANS / ansiCantPreg).toFixed(2);

    hostilidad.forEach(calcularHostilidad);
    let sumHOS = 0;
    hostilidadMap.forEach((value) => {
      sumHOS += value;
    });
    promHOS = (sumHOS / hostCantPreg).toFixed(2);

    ansiedadFobica.forEach(calcularAnsiedadFobica);
    let sumFOB = 0;
    ansiedadFobicaMap.forEach((value) => {
      sumFOB += value;
    });
    promFOB = (sumFOB / ansiFobCantPreg).toFixed(2);

    ideacionParanoide.forEach(calcularIdeacionParanoide);
    let sumPAR = 0;
    ideacionParanoideMap.forEach((value) => {
      sumPAR += value;
    });
    promPAR = (sumPAR / ideaCantPreg).toFixed(2);

    psicoticismo.forEach(calcularPsicoticismo);
    let sumPSIC = 0;
    psicoticismoMap.forEach((value) => {
      sumPSIC += value;
    });
    promPSIC = (sumPSIC / psicoCantPreg).toFixed(2);

    itemsAdicionales.forEach(calcularItemsAdicionales);
    let sumADIC = 0;
    psicoticismoMap.forEach((value) => {
      sumADIC += value;
    });
    promADIC = (sumADIC / itemsCantPreg).toFixed(2);

    promIGS = ((sumSOM+sumOBS+sumSI+sumDEP+sumANS+sumHOS+sumFOB+sumPAR+sumPSIC+sumADIC) / 90).toFixed(2);
    
    promIMSP = ((sumSOM+sumOBS+sumSI+sumDEP+sumANS+sumHOS+sumFOB+sumPAR+sumPSIC+sumADIC) / TSP).toFixed(2);
    
    document.getElementById("error-message").style.display = "none";
  } else {
    document.getElementById("error-message").style.display = "block";
  }

  //Valores T Normalizados segun tablas de test
  //Femenino adolescente
  if (sexo == "female" && edad < 18){
    //SOM Femenino adolescente
    if (promSOM <= 0.04) {
      SOM = 30;
    } else if (promSOM <= 0.17) {
      SOM = 35;
    } else if (promSOM <= 0.34) {
      SOM = 40;
    } else if (promSOM <= 0.59) {
      SOM = 45;
    } else if (promSOM <= 0.97) {
      SOM = 50;
    } else if (promSOM <= 1.38) {
      SOM = 55;
    } else if (promSOM <= 1.74) {
      SOM = 60;
    } else if (promSOM <= 1.99) {
      SOM = 63;
    } else if (promSOM <= 2.46) {
      SOM = 65;
    } else if (promSOM <= 3.09) {
      SOM = 70;
    } else if (promSOM <= 3.38) {
      SOM = 75;
    } else {
      SOM = 80;
    }

    //OBS Femenino adolescente
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

    //SI Femenino adolescente
    if (promSI <= 0.17) {
      SI = 30;
    } else if (promSI <= 0.33) {
      SI = 35;
    } else if (promSI <= 0.61) {
      SI = 40;
    } else if (promSI <= 0.95) {
      SI = 45;
    } else if (promSI <= 1.34) {
      SI = 50;
    } else if (promSI <= 1.78) {
      SI = 55;
    } else if (promSI <= 2.17) {
      SI = 60;
    } else if (promSI <= 2.39) {
      SI = 63;
    } else if (promSI <= 2.78) {
      SI = 65;
    } else if (promSI <= 3.34) {
      SI = 70;
    } else if (promSI <= 3.68) {
      SI = 75;
    } else {
      SI = 80;
    }

    //DEP Femenino adolescente
    if (promDEP <= 0.12) {
      DEP = 30;
    } else if (promDEP <= 0.27) {
      DEP = 35;
    } else if (promDEP <= 0.54) {
      DEP = 40;
    } else if (promDEP <= 0.85) {
      DEP = 45;
    } else if (promDEP <= 1.27) {
      DEP = 50;
    } else if (promDEP <= 1.73) {
      DEP = 55;
    } else if (promDEP <= 2.12) {
      DEP = 60;
    } else if (promDEP <= 2.39) {
      DEP = 63;
    } else if (promDEP <= 2.85) {
      DEP = 65;
    } else if (promDEP <= 3.44) {
      DEP = 70;
    } else if (promDEP <= 4.45) {
      DEP = 75;
    } else {
      DEP = 80;
    }

    //ANS Femenino adolescente
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
    } else if (promANS <= 2.78) {
      ANS = 65;
    } else if (promANS <= 3.59) {
      ANS = 70;
    } else if (promANS <= 4.20) {
      ANS = 75;
    } else {
      ANS = 80;
    }

    //HOS Femenino adolescente
    if (promHOS <= 0.09) {
      HOS = 30;
    } else if (promHOS <= 0.23) {
      HOS = 35;
    } else if (promHOS <= 0.40) {
      HOS = 40;
    } else if (promHOS <= 0.67) {
      HOS = 45;
    } else if (promHOS <= 1.08) {
      HOS = 50;
    } else if (promHOS <= 1.67) {
      HOS = 55;
    } else if (promHOS <= 2.25) {
      HOS = 60;
    } else if (promHOS <= 2.66) {
      HOS = 63;
    } else if (promHOS <= 3.18) {
      HOS = 65;
    } else if (promHOS <= 3.78) {
      HOS = 70;
    } else if (promHOS <= 4) {
      HOS = 75;
    } else {
      HOS = 80;
    }

    //FOB Femenino adolescente
    if (promFOB <= 0.07) {
      FOB = 30;
    } else if (promFOB <= 0.22) {
      FOB = 45;
    } else if (promFOB <= 0.43) {
      FOB = 50;
    } else if (promFOB <= 0.79) {
      FOB = 55;
    } else if (promFOB <= 1.15) {
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

    //PAR Femenino adolescente
    if (promPAR <= 0.09) {
      PAR = 30;
    } else if (promPAR <= 0.34) {
      PAR = 40;
    } else if (promPAR <= 0.67) {
      PAR = 45;
    } else if (promPAR <= 1.17) {
      PAR = 50;
    } else if (promPAR <= 1.78) {
      PAR = 55;
    } else if (promPAR <= 2.28) {
      PAR = 60;
    } else if (promPAR <= 2.59) {
      PAR = 63;
    } else if (promPAR <= 2.97) {
      PAR = 65;
    } else if (promPAR <= 3.31) {
      PAR = 70;
    } else if (promPAR <= 3.51) {
      PAR = 75;
    } else {
      PAR = 80;
    }

    //PSIC Femenino adolescente
    if (promPSIC <= 0.05) {
      PSIC = 30;
    } else if (promPSIC <= 0.15) {
      PSIC = 40;
    } else if (promPSIC <= 0.40) {
      PSIC = 45;
    } else if (promPSIC <= 0.75) {
      PSIC = 50;
    } else if (promPSIC <= 1.15) {
      PSIC = 55;
    } else if (promPSIC <= 1.50) {
      PSIC = 60;
    } else if (promPSIC <= 1.70) {
      PSIC = 63;
    } else if (promPSIC <= 2.15) {
      PSIC = 65;
    } else if (promPSIC <= 2.76) {
      PSIC = 70;
    } else if (promPSIC <= 3.11) {
      PSIC = 75;
    } else {
      PSIC = 80;
    }

    //IGS Femenino adolescente
    if (promIGS <= 0.13) {
      IGS = 30;
    } else if (promIGS <= 0.28) {
      IGS = 35;
    } else if (promIGS <= 0.47) {
      IGS = 40;
    } else if (promIGS <= 0.70) {
      IGS = 45;
    } else if (promIGS <= 1.01) {
      IGS = 50;
    } else if (promIGS <= 1.35) {
      IGS = 55;
    } else if (promIGS <= 1.62) {
      IGS = 60;
    } else if (promIGS <= 1.79) {
      IGS = 63;
    } else if (promIGS <= 2.10) {
      IGS = 65;
    } else if (promIGS <= 2.56) {
      IGS = 70;
    } else if (promIGS <= 2.95) {
      IGS = 75;
    } else {
      IGS = 80;
    }

    //TSP Femenino adolescente
    if (TSP <= 10.00) {
      NTSP = 30;
    } else if (TSP <= 17.50) {
      NTSP = 35;
    } else if (TSP <= 27.07) {
      NTSP = 40;
    } else if (TSP <= 37.57) {
      NTSP = 45;
    } else if (TSP <= 47.50) {
      NTSP = 50;
    } else if (TSP <= 57.50) {
      NTSP = 55;
    } else if (TSP <= 66.35) {
      NTSP = 60;
    } else if (TSP <= 71.05) {
      NTSP = 63;
    } else if (TSP <= 76.51) {
      NTSP = 65;
    } else if (TSP <= 84.34) {
      NTSP = 70;
    } else if (TSP <= 88.53) {
      NTSP = 75;
    } else {
      NTSP = 80;
    }

    //IMSP Femenino adolescente
    if (promIMSP <= 1.05) {
      IMSP = 30;
    } else if (promIMSP <= 1.20) {
      IMSP = 35;
    } else if (promIMSP <= 1.40) {
      IMSP = 40;
    } else if (promIMSP <= 1.63) {
      IMSP = 45;
    } else if (promIMSP <= 1.89) {
      IMSP = 50;
    } else if (promIMSP <= 2.21) {
      IMSP = 55;
    } else if (promIMSP <= 2.47) {
      IMSP = 60;
    } else if (promIMSP <= 2.60) {
      IMSP = 63;
    } else if (promIMSP <= 2.88) {
      IMSP = 65;
    } else if (promIMSP <= 3.23) {
      IMSP = 70;
    } else if (promIMSP <= 3.37) {
      IMSP = 75;
    } else {
      IMSP = 80;
    }

    //Masculino adolescente
  } else if (sexo == "male" && edad < 18) {
    
    //SOM Masculino adolescente
    if (promSOM <= 0.01) {
      SOM = 30;
    } else if (promSOM <= 0.10) {
      SOM = 40;
    } else if (promSOM <= 0.25) {
      SOM = 45;
    } else if (promSOM <= 0.46) {
      SOM = 50;
    } else if (promSOM <= 0.75) {
      SOM = 55;
    } else if (promSOM <= 1.00) {
      SOM = 60;
    } else if (promSOM <= 1.20) {
      SOM = 63;
    } else if (promSOM <= 1.53) {
      SOM = 65;
    } else if (promSOM <= 1.99) {
      SOM = 70;
    } else if (promSOM <= 2.66) {
      SOM = 75;
    } else {
      SOM = 80;
    }

    //OBS Masculino adolescente
    if (promOBS <= 0.05) {
      OBS = 30;
    } else if (promOBS <= 0.20) {
      OBS = 35;
    } else if (promOBS <= 0.40) {
      OBS = 40;
    } else if (promOBS <= 0.70) {
      OBS = 45;
    } else if (promOBS <= 1.10) {
      OBS = 50;
    } else if (promOBS <= 1.55) {
      OBS = 55;
    } else if (promOBS <= 1.91) {
      OBS = 60;
    } else if (promOBS <= 2.11) {
      OBS = 63;
    } else if (promOBS <= 2.46) {
      OBS = 65;
    } else if (promOBS <= 3.10) {
      OBS = 70;
    } else if (promOBS <= 3.69) {
      OBS = 75;
    } else {
      OBS = 80;
    }

    //SI Masculino adolescente
    if (promSI <= 0.06) {
      SI = 30;
    } else if (promSI <= 0.17) {
      SI = 35;
    } else if (promSI <= 0.29) {
      SI = 40;
    } else if (promSI <= 0.52) {
      SI = 45;
    } else if (promSI <= 0.84) {
      SI = 50;
    } else if (promSI <= 1.17) {
      SI = 55;
    } else if (promSI <= 1.45) {
      SI = 60;
    } else if (promSI <= 1.62) {
      SI = 63;
    } else if (promSI <= 1.96) {
      SI = 65;
    } else if (promSI <= 2.54) {
      SI = 70;
    } else if (promSI <= 2.92) {
      SI = 75;
    } else {
      SI = 80;
    }

    //DEP Masculino adolescente
    if (promDEP <= 0.08) {
      DEP = 30;
    } else if (promDEP <= 0.25) {
      DEP = 40;
    } else if (promDEP <= 0.45) {
      DEP = 45;
    } else if (promDEP <= 0.66) {
      DEP = 50;
    } else if (promDEP <= 1.00) {
      DEP = 55;
    } else if (promDEP <= 1.35) {
      DEP = 60;
    } else if (promDEP <= 1.54) {
      DEP = 63;
    } else if (promDEP <= 1.87) {
      DEP = 65;
    } else if (promDEP <= 2.47) {
      DEP = 70;
    } else if (promDEP <= 2.92) {
      DEP = 75;
    } else {
      DEP = 80;
    }

    //ANS Masculino adolescente
    if (promANS <= 0.05) {
      ANS = 30;
    } else if (promANS <= 0.15) {
      ANS = 40;
    } else if (promANS <= 0.30) {
      ANS = 45;
    } else if (promANS <= 0.55) {
      ANS = 50;
    } else if (promANS <= 0.85) {
      ANS = 55;
    } else if (promANS <= 1.16) {
      ANS = 60;
    } else if (promANS <= 1.37) {
      ANS = 63;
    } else if (promANS <= 1.75) {
      ANS = 65;
    } else if (promANS <= 2.48) {
      ANS = 70;
    } else if (promANS <= 3.30) {
      ANS = 75;
    } else {
      ANS = 80;
    }

    //HOS Masculino adolescente
    if (promHOS <= 0.09) {
      HOS = 30;
    } else if (promHOS <= 0.25) {
      HOS = 40;
    } else if (promHOS <= 0.50) {
      HOS = 45;
    } else if (promHOS <= 0.92) {
      HOS = 50;
    } else if (promHOS <= 1.42) {
      HOS = 55;
    } else if (promHOS <= 1.85) {
      HOS = 60;
    } else if (promHOS <= 2.18) {
      HOS = 63;
    } else if (promHOS <= 2.77) {
      HOS = 65;
    } else if (promHOS <= 3.42) {
      HOS = 70;
    } else if (promHOS <= 3.65) {
      HOS = 75;
    } else {
      HOS = 80;
    }

    //FOB Masculino adolescente
    if (promFOB <= 0.00) {
      FOB = 30;
    } else if (promFOB <= 0.07) {
      FOB = 45;
    } else if (promFOB <= 0.22) {
      FOB = 50;
    } else if (promFOB <= 0.43) {
      FOB = 55;
    } else if (promFOB <= 0.64) {
      FOB = 60;
    } else if (promFOB <= 0.79) {
      FOB = 63;
    } else if (promFOB <= 1.09) {
      FOB = 65;
    } else if (promFOB <= 2.35) {
      FOB = 70;
    } else if (promFOB <= 3.69) {
      FOB = 75;
    } else {
      FOB = 80;
    }

    //PAR Masculino adolescente
    if (promPAR <= 0.00) {
      PAR = 30;
    } else if (promPAR <= 0.17) {
      PAR = 40;
    } else if (promPAR <= 0.50) {
      PAR = 45;
    } else if (promPAR <= 0.84) {
      PAR = 50;
    } else if (promPAR <= 1.25) {
      PAR = 55;
    } else if (promPAR <= 1.67) {
      PAR = 60;
    } else if (promPAR <= 1.92) {
      PAR = 63;
    } else if (promPAR <= 2.36) {
      PAR = 65;
    } else if (promPAR <= 3.10) {
      PAR = 70;
    } else if (promPAR <= 4.16) {
      PAR = 75;
    } else {
      PAR = 80;
    }

    //PSIC Masculino adolescente
    if (promPSIC <= 0.00) {
      PSIC = 30;
    } else if (promPSIC <= 0.05) {
      PSIC = 40;
    } else if (promPSIC <= 0.20) {
      PSIC = 45;
    } else if (promPSIC <= 0.40) {
      PSIC = 50;
    } else if (promPSIC <= 0.65) {
      PSIC = 55;
    } else if (promPSIC <= 0.91) {
      PSIC = 60;
    } else if (promPSIC <= 1.15) {
      PSIC = 63;
    } else if (promPSIC <= 1.60) {
      PSIC = 65;
    } else if (promPSIC <= 2.18) {
      PSIC = 70;
    } else if (promPSIC <= 2.47) {
      PSIC = 75;
    } else {
      PSIC = 80;
    }

    //IGS Masculino adolescente
    if (promIGS <= 0.09) {
      IGS = 30;
    } else if (promIGS <= 0.16) {
      IGS = 35;
    } else if (promIGS <= 0.26) {
      IGS = 40;
    } else if (promIGS <= 0.43) {
      IGS = 45;
    } else if (promIGS <= 0.62) {
      IGS = 50;
    } else if (promIGS <= 0.84) {
      IGS = 55;
    } else if (promIGS <= 1.04) {
      IGS = 60;
    } else if (promIGS <= 1.19) {
      IGS = 63;
    } else if (promIGS <= 1.44) {
      IGS = 65;
    } else if (promIGS <= 1.93) {
      IGS = 70;
    } else if (promIGS <= 2.33) {
      IGS = 75;
    } else {
      IGS = 80;
    }

    //TSP Masculino adolescente
    if (TSP <= 5.78) {
      NTSP = 30;
    } else if (TSP <= 10.50) {
      NTSP = 35;
    } else if (TSP <= 16.50) {
      NTSP = 40;
    } else if (TSP <= 25.00) {
      NTSP = 45;
    } else if (TSP <= 34.50) {
      NTSP = 50;
    } else if (TSP <= 43.00) {
      NTSP = 55;
    } else if (TSP <= 49.55) {
      NTSP = 60;
    } else if (TSP <= 54.05) {
      NTSP = 63;
    } else if (TSP <= 63.50) {
      NTSP = 65;
    } else if (TSP <= 72.77) {
      NTSP = 70;
    } else if (TSP <= 75.27) {
      NTSP = 75;
    } else {
      NTSP = 80;
    }

    //IMSP Masculino adolescente
    if (promIMSP <= 0.95) {
      IMSP = 30;
    } else if (promIMSP <= 1.09) {
      IMSP = 35;
    } else if (promIMSP <= 1.25) {
      IMSP = 40;
    } else if (promIMSP <= 1.44) {
      IMSP = 45;
    } else if (promIMSP <= 1.67) {
      IMSP = 50;
    } else if (promIMSP <= 1.97) {
      IMSP = 55;
    } else if (promIMSP <= 2.22) {
      IMSP = 60;
    } else if (promIMSP <= 2.38) {
      IMSP = 63;
    } else if (promIMSP <= 2.64) {
      IMSP = 65;
    } else if (promIMSP <= 3.27) {
      IMSP = 70;
    } else if (promIMSP <= 3.86) {
      IMSP = 75;
    } else {
      IMSP = 80;
    }

  } else if (sexo == "female" && edad >= 18) {
  
  } else if (sexo == "male" && edad >= 18) {

  }

  //se renderizan en el html los valores T Normalizados calculados
  document.getElementById("SOM").innerHTML = SOM;
  document.getElementById("OBS").innerHTML = OBS;
  document.getElementById("SI").innerHTML = SI;
  document.getElementById("DEP").innerHTML = DEP;
  document.getElementById("ANS").innerHTML = ANS;
  document.getElementById("HOS").innerHTML = HOS;
  document.getElementById("FOB").innerHTML = FOB;
  document.getElementById("PAR").innerHTML = PAR;
  document.getElementById("PSIC").innerHTML = PSIC;
  document.getElementById("IGS").innerHTML = IGS;
  document.getElementById("TSP").innerHTML = TSP;
  document.getElementById("IMSP").innerHTML = NTSP;

  //se reinicia el valor de cant respondidas
  TSP = 0;
}


