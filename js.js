//listas con nro de pregunta de cada tema y la cant de preguntas
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
 
//mapas para guardar las respuestas de cada tema
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

//variables a utilizar
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
var nombre;
var edad;
var sexo;
var todayStr = new Date().toISOString().split('T')[0];

//métodos para ir guardando en los mapas las respuestas de cada tema
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

//método que calcula el resultado total con valores T normalizados
function calcularResultado(){
  const form = document.getElementById("miFormulario");
  if (form.checkValidity()) {
    nombre = document.getElementById("fullName").value;
    edad = parseInt(document.getElementById("age").value);
    sexo = document.querySelector('input[name="sex"]:checked').value;

    somatizaciones.forEach(calcularSomatizaciones);
    let sumSOM = 0;
    somatizacionesMap.forEach((value) => {
      sumSOM += value;
    });
    promSOM = (sumSOM / somaCantPreg).toFixed(2);
    console.log('promSOM :' + promSOM);

    obsesionesYCompulsiones.forEach(calcularObsesionesYCompulsiones);
    let sumOBS = 0;
    obsesionesYCompulsionesMap.forEach((value) => {
      sumOBS += value;
    });
    promOBS = (sumOBS / obseCantPreg).toFixed(2);
    console.log('promOBS :' + promOBS);

    sensibilidadInterpersonal.forEach(calcularSensibilidadInterpersonal);
    let sumSI = 0;
    sensibilidadInterpersonalMap.forEach((value) => {
      sumSI += value;
    });
    promSI = (sumSI / sensiCantPreg).toFixed(2);
    console.log('promSI :' + promSI);

    depresion.forEach(calcularDepresion);
    let sumDEP = 0;
    depresionMap.forEach((value) => {
      sumDEP += value;
    });
    promDEP = (sumDEP / depCantPreg).toFixed(2);
    console.log('promDEP :' + promDEP);

    ansiedad.forEach(calcularAnsiedad);
    let sumANS = 0;
    ansiedadMap.forEach((value) => {
      sumANS += value;
    });
    promANS = (sumANS / ansiCantPreg).toFixed(2);
    console.log('promANS :' + promANS);

    hostilidad.forEach(calcularHostilidad);
    let sumHOS = 0;
    hostilidadMap.forEach((value) => {
      sumHOS += value;
    });
    promHOS = (sumHOS / hostCantPreg).toFixed(2);
    console.log('promHOS :' + promHOS);

    ansiedadFobica.forEach(calcularAnsiedadFobica);
    let sumFOB = 0;
    ansiedadFobicaMap.forEach((value) => {
      sumFOB += value;
    });
    promFOB = (sumFOB / ansiFobCantPreg).toFixed(2);
    console.log('promFOB :' + promFOB);

    ideacionParanoide.forEach(calcularIdeacionParanoide);
    let sumPAR = 0;
    ideacionParanoideMap.forEach((value) => {
      sumPAR += value;
    });
    promPAR = (sumPAR / ideaCantPreg).toFixed(2);
    console.log('promPAR :' + promPAR);

    psicoticismo.forEach(calcularPsicoticismo);
    let sumPSIC = 0;
    psicoticismoMap.forEach((value) => {
      sumPSIC += value;
    });
    promPSIC = (sumPSIC / psicoCantPreg).toFixed(2);
    console.log('promPSIC :' + promPSIC);

    itemsAdicionales.forEach(calcularItemsAdicionales);
    let sumADIC = 0;
    psicoticismoMap.forEach((value) => {
      sumADIC += value;
    });
    promADIC = (sumADIC / itemsCantPreg).toFixed(2);
    console.log('promADIC :' + promADIC);

    promIGS = ((sumSOM+sumOBS+sumSI+sumDEP+sumANS+sumHOS+sumFOB+sumPAR+sumPSIC+sumADIC) / 90).toFixed(2);
    console.log('promIGS :' + promIGS);
    
    promIMSP = ((sumSOM+sumOBS+sumSI+sumDEP+sumANS+sumHOS+sumFOB+sumPAR+sumPSIC+sumADIC) / TSP).toFixed(2);
    console.log('promIMSP :' + promIMSP);
    
    document.getElementById("error-message").style.display = "none";
    document.getElementById("boton-descargar").style.display = "block";
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

    //Femenino adulto
  } else if (sexo == "female" && edad >= 18) {
    //SOM Femenino adulto
    if (promSOM <= 0.09) {
      SOM = 30;
    } else if (promSOM <= 0.21) {
      SOM = 35;
    } else if (promSOM <= 0.34) {
      SOM = 40;
    } else if (promSOM <= 0.59) {
      SOM = 45;
    } else if (promSOM <= 0.88) {
      SOM = 50;
    } else if (promSOM <= 1.25) {
      SOM = 55;
    } else if (promSOM <= 1.66) {
      SOM = 60;
    } else if (promSOM <= 1.92) {
      SOM = 63;
    } else if (promSOM <= 2.18) {
      SOM = 65;
    } else if (promSOM <= 2.62) {
      SOM = 70;
    } else if (promSOM <= 2.94) {
      SOM = 75;
    } else {
      SOM = 80;
    }

    //OBS Femenino adulto
    if (promOBS <= 0.10) {
      OBS = 30;
    } else if (promOBS <= 0.30) {
      OBS = 35;
    } else if (promOBS <= 0.55) {
      OBS = 40;
    } else if (promOBS <= 0.85) {
      OBS = 45;
    } else if (promOBS <= 1.20) {
      OBS = 50;
    } else if (promOBS <= 1.60) {
      OBS = 55;
    } else if (promOBS <= 1.95) {
      OBS = 60;
    } else if (promOBS <= 2.15) {
      OBS = 63;
    } else if (promOBS <= 2.55) {
      OBS = 65;
    } else if (promOBS <= 3.16) {
      OBS = 70;
    } else if (promOBS <= 3.46) {
      OBS = 75;
    } else {
      OBS = 80;
    }

    //SI Femenino adulto
    if (promSI <= 0.06) {
      SI = 30;
    } else if (promSI <= 0.17) {
      SI = 35;
    } else if (promSI <= 0.33) {
      SI = 40;
    } else if (promSI <= 0.56) {
      SI = 45;
    } else if (promSI <= 0.89) {
      SI = 50;
    } else if (promSI <= 1.28) {
      SI = 55;
    } else if (promSI <= 1.56) {
      SI = 60;
    } else if (promSI <= 1.78) {
      SI = 63;
    } else if (promSI <= 2.25) {
      SI = 65;
    } else if (promSI <= 2.80) {
      SI = 70;
    } else if (promSI <= 3.00) {
      SI = 75;
    } else {
      SI = 80;
    }

    //DEP Femenino adulto
    if (promDEP <= 0.14) {
      DEP = 30;
    } else if (promDEP <= 0.31) {
      DEP = 35;
    } else if (promDEP <= 0.50) {
      DEP = 40;
    } else if (promDEP <= 0.74) {
      DEP = 45;
    } else if (promDEP <= 1.04) {
      DEP = 50;
    } else if (promDEP <= 1.50) {
      DEP = 55;
    } else if (promDEP <= 1.89) {
      DEP = 60;
    } else if (promDEP <= 2.12) {
      DEP = 63;
    } else if (promDEP <= 2.52) {
      DEP = 65;
    } else if (promDEP <= 3.06) {
      DEP = 70;
    } else if (promDEP <= 3.50) {
      DEP = 75;
    } else {
      DEP = 80;
    }

    //ANS Femenino adulto
    if (promANS <= 0.10) {
      ANS = 30;
    } else if (promANS <= 0.25) {
      ANS = 35;
    } else if (promANS <= 0.45) {
      ANS = 40;
    } else if (promANS <= 0.70) {
      ANS = 45;
    } else if (promANS <= 1.00) {
      ANS = 50;
    } else if (promANS <= 1.40) {
      ANS = 55;
    } else if (promANS <= 1.70) {
      ANS = 60;
    } else if (promANS <= 1.97) {
      ANS = 63;
    } else if (promANS <= 2.32) {
      ANS = 65;
    } else if (promANS <= 2.77) {
      ANS = 70;
    } else if (promANS <= 3.07) {
      ANS = 75;
    } else {
      ANS = 80;
    }

    //HOS Femenino adulto
    if (promHOS <= 0.00) {
      HOS = 30;
    } else if (promHOS <= 0.09) {
      HOS = 35;
    } else if (promHOS <= 0.25) {
      HOS = 40;
    } else if (promHOS <= 0.50) {
      HOS = 45;
    } else if (promHOS <= 0.84) {
      HOS = 50;
    } else if (promHOS <= 1.25) {
      HOS = 55;
    } else if (promHOS <= 1.59) {
      HOS = 60;
    } else if (promHOS <= 1.75) {
      HOS = 63;
    } else if (promHOS <= 2.20) {
      HOS = 65;
    } else if (promHOS <= 2.87) {
      HOS = 70;
    } else if (promHOS <= 3.25) {
      HOS = 75;
    } else {
      HOS = 80;
    }

    //FOB Femenino adulto
    if (promFOB <= 0.00) {
      FOB = 30;
    } else if (promFOB <= 0.15) {
      FOB = 45;
    } else if (promFOB <= 0.43) {
      FOB = 50;
    } else if (promFOB <= 0.72) {
      FOB = 55;
    } else if (promFOB <= 1.00) {
      FOB = 60;
    } else if (promFOB <= 1.22) {
      FOB = 63;
    } else if (promFOB <= 1.65) {
      FOB = 65;
    } else if (promFOB <= 2.32) {
      FOB = 70;
    } else if (promFOB <= 2.89) {
      FOB = 75;
    } else {
      FOB = 80;
    }

    //PAR Femenino adulto
    if (promPAR <= 0.00) {
      PAR = 30;
    } else if (promPAR <= 0.09) {
      PAR = 35;
    } else if (promPAR <= 0.25) {
      PAR = 40;
    } else if (promPAR <= 0.50) {
      PAR = 45;
    } else if (promPAR <= 0.92) {
      PAR = 50;
    } else if (promPAR <= 1.42) {
      PAR = 55;
    } else if (promPAR <= 1.84) {
      PAR = 60;
    } else if (promPAR <= 2.09) {
      PAR = 63;
    } else if (promPAR <= 2.59) {
      PAR = 65;
    } else if (promPAR <= 3.39) {
      PAR = 70;
    } else if (promPAR <= 3.89) {
      PAR = 75;
    } else {
      PAR = 80;
    }

    //PSIC Femenino adulto
    if (promPSIC <= 0.00) {
      PSIC = 30;
    } else if (promPSIC <= 0.05) {
      PSIC = 35;
    } else if (promPSIC <= 0.15) {
      PSIC = 40;
    } else if (promPSIC <= 0.30) {
      PSIC = 45;
    } else if (promPSIC <= 0.55) {
      PSIC = 50;
    } else if (promPSIC <= 0.85) {
      PSIC = 55;
    } else if (promPSIC <= 1.05) {
      PSIC = 60;
    } else if (promPSIC <= 1.20) {
      PSIC = 63;
    } else if (promPSIC <= 1.64) {
      PSIC = 65;
    } else if (promPSIC <= 2.27) {
      PSIC = 70;
    } else if (promPSIC <= 2.64) {
      PSIC = 75;
    } else {
      PSIC = 80;
    }

    //IGS Femenino adulto
    if (promIGS <= 0.22) {
      IGS = 30;
    } else if (promIGS <= 0.33) {
      IGS = 35;
    } else if (promIGS <= 0.45) {
      IGS = 40;
    } else if (promIGS <= 0.63) {
      IGS = 45;
    } else if (promIGS <= 0.89) {
      IGS = 50;
    } else if (promIGS <= 1.20) {
      IGS = 55;
    } else if (promIGS <= 1.49) {
      IGS = 60;
    } else if (promIGS <= 1.68) {
      IGS = 63;
    } else if (promIGS <= 1.96) {
      IGS = 65;
    } else if (promIGS <= 2.32) {
      IGS = 70;
    } else if (promIGS <= 2.50) {
      IGS = 75;
    } else {
      IGS = 80;
    }

    //TSP Femenino adulto
    if (TSP <= 12.00) {
      NTSP = 30;
    } else if (TSP <= 18.06) {
      NTSP = 35;
    } else if (TSP <= 25.06) {
      NTSP = 40;
    } else if (TSP <= 33.00) {
      NTSP = 45;
    } else if (TSP <= 42.00) {
      NTSP = 50;
    } else if (TSP <= 52.00) {
      NTSP = 55;
    } else if (TSP <= 59.50) {
      NTSP = 60;
    } else if (TSP <= 64.00) {
      NTSP = 63;
    } else if (TSP <= 70.00) {
      NTSP = 65;
    } else if (TSP <= 75.86) {
      NTSP = 70;
    } else if (TSP <= 79.86) {
      NTSP = 75;
    } else {
      NTSP = 80;
    }

    //IMSP Femenino adulto
    if (promIMSP <= 1.19) {
      IMSP = 30;
    } else if (promIMSP <= 1.34) {
      IMSP = 35;
    } else if (promIMSP <= 1.51) {
      IMSP = 40;
    } else if (promIMSP <= 1.72) {
      IMSP = 45;
    } else if (promIMSP <= 1.99) {
      IMSP = 50;
    } else if (promIMSP <= 2.27) {
      IMSP = 55;
    } else if (promIMSP <= 2.47) {
      IMSP = 60;
    } else if (promIMSP <= 2.60) {
      IMSP = 63;
    } else if (promIMSP <= 2.83) {
      IMSP = 65;
    } else if (promIMSP <= 3.07) {
      IMSP = 70;
    } else if (promIMSP <= 3.21) {
      IMSP = 75;
    } else {
      IMSP = 80;
    }
    
    //Masculino adulto
  } else if (sexo == "male" && edad >= 18) {
    //SOM Masculino adulto
    if (promSOM <= 0.00) {
      SOM = 30;
    } else if (promSOM <= 0.04) {
      SOM = 35;
    } else if (promSOM <= 0.17) {
      SOM = 40;
    } else if (promSOM <= 0.34) {
      SOM = 45;
    } else if (promSOM <= 0.59) {
      SOM = 50;
    } else if (promSOM <= 0.92) {
      SOM = 55;
    } else if (promSOM <= 1.17) {
      SOM = 60;
    } else if (promSOM <= 1.34) {
      SOM = 63;
    } else if (promSOM <= 1.59) {
      SOM = 65;
    } else if (promSOM <= 2.03) {
      SOM = 70;
    } else if (promSOM <= 2.41) {
      SOM = 75;
    } else {
      SOM = 80;
    }

    //OBS Masculino adulto
    if (promOBS <= 0.10) {
      OBS = 30;
    } else if (promOBS <= 0.25) {
      OBS = 35;
    } else if (promOBS <= 0.40) {
      OBS = 40;
    } else if (promOBS <= 0.65) {
      OBS = 45;
    } else if (promOBS <= 1.05) {
      OBS = 50;
    } else if (promOBS <= 1.50) {
      OBS = 55;
    } else if (promOBS <= 1.80) {
      OBS = 60;
    } else if (promOBS <= 2.05) {
      OBS = 63;
    } else if (promOBS <= 2.40) {
      OBS = 65;
    } else if (promOBS <= 3.00) {
      OBS = 70;
    } else if (promOBS <= 3.50) {
      OBS = 75;
    } else {
      OBS = 80;
    }

    //SI Masculino adulto
    if (promSI <= 0.00) {
      SI = 30;
    } else if (promSI <= 0.06) {
      SI = 35;
    } else if (promSI <= 0.22) {
      SI = 40;
    } else if (promSI <= 0.45) {
      SI = 45;
    } else if (promSI <= 0.73) {
      SI = 50;
    } else if (promSI <= 1.11) {
      SI = 55;
    } else if (promSI <= 1.45) {
      SI = 60;
    } else if (promSI <= 1.62) {
      SI = 63;
    } else if (promSI <= 2.03) {
      SI = 65;
    } else if (promSI <= 2.69) {
      SI = 70;
    } else if (promSI <= 3.11) {
      SI = 75;
    } else {
      SI = 80;
    }

    //DEP Masculino adulto
    if (promDEP <= 0.04) {
      DEP = 30;
    } else if (promDEP <= 0.16) {
      DEP = 35;
    } else if (promDEP <= 0.31) {
      DEP = 40;
    } else if (promDEP <= 0.54) {
      DEP = 45;
    } else if (promDEP <= 0.86) {
      DEP = 50;
    } else if (promDEP <= 1.20) {
      DEP = 55;
    } else if (promDEP <= 1.50) {
      DEP = 60;
    } else if (promDEP <= 1.70) {
      DEP = 63;
    } else if (promDEP <= 2.10) {
      DEP = 65;
    } else if (promDEP <= 2.65) {
      DEP = 70;
    } else if (promDEP <= 3.02) {
      DEP = 75;
    } else {
      DEP = 80;
    }

    //ANS Masculino adulto
    if (promANS <= 0.05) {
      ANS = 30;
    } else if (promANS <= 0.15) {
      ANS = 35;
    } else if (promANS <= 0.30) {
      ANS = 40;
    } else if (promANS <= 0.50) {
      ANS = 45;
    } else if (promANS <= 0.75) {
      ANS = 50;
    } else if (promANS <= 1.10) {
      ANS = 55;
    } else if (promANS <= 1.45) {
      ANS = 60;
    } else if (promANS <= 1.65) {
      ANS = 63;
    } else if (promANS <= 1.99) {
      ANS = 65;
    } else if (promANS <= 2.48) {
      ANS = 70;
    } else if (promANS <= 2.69) {
      ANS = 75;
    } else {
      ANS = 80;
    }

    //HOS Masculino adulto
    if (promHOS <= 0.00) {
      HOS = 30;
    } else if (promHOS <= 0.09) {
      HOS = 35;
    } else if (promHOS <= 0.25) {
      HOS = 40;
    } else if (promHOS <= 0.50) {
      HOS = 45;
    } else if (promHOS <= 0.84) {
      HOS = 50;
    } else if (promHOS <= 1.17) {
      HOS = 55;
    } else if (promHOS <= 1.50) {
      HOS = 60;
    } else if (promHOS <= 1.75) {
      HOS = 63;
    } else if (promHOS <= 2.20) {
      HOS = 65;
    } else if (promHOS <= 2.87) {
      HOS = 70;
    } else if (promHOS <= 3.50) {
      HOS = 75;
    } else {
      HOS = 80;
    }

    //FOB Masculino adulto
    if (promFOB <= 0.00) {
      FOB = 30;
    } else if (promFOB <= 0.07) {
      FOB = 45;
    } else if (promFOB <= 0.22) {
      FOB = 50;
    } else if (promFOB <= 0.43) {
      FOB = 55;
    } else if (promFOB <= 0.72) {
      FOB = 60;
    } else if (promFOB <= 0.93) {
      FOB = 63;
    } else if (promFOB <= 1.22) {
      FOB = 65;
    } else if (promFOB <= 1.66) {
      FOB = 70;
    } else if (promFOB <= 2.30) {
      FOB = 75;
    } else {
      FOB = 80;
    }

    //PAR Masculino adulto
    if (promPAR <= 0.00) {
      PAR = 30;
    } else if (promPAR <= 0.09) {
      PAR = 35;
    } else if (promPAR <= 0.25) {
      PAR = 40;
    } else if (promPAR <= 0.50) {
      PAR = 45;
    } else if (promPAR <= 0.92) {
      PAR = 50;
    } else if (promPAR <= 1.34) {
      PAR = 55;
    } else if (promPAR <= 1.67) {
      PAR = 60;
    } else if (promPAR <= 1.95) {
      PAR = 63;
    } else if (promPAR <= 2.37) {
      PAR = 65;
    } else if (promPAR <= 2.81) {
      PAR = 70;
    } else if (promPAR <= 3.06) {
      PAR = 75;
    } else {
      PAR = 80;
    }

    //PSIC Masculino adulto
    if (promPSIC <= 0.00) {
      PSIC = 30;
    } else if (promPSIC <= 0.10) {
      PSIC = 40;
    } else if (promPSIC <= 0.25) {
      PSIC = 45;
    } else if (promPSIC <= 0.40) {
      PSIC = 50;
    } else if (promPSIC <= 0.70) {
      PSIC = 55;
    } else if (promPSIC <= 1.05) {
      PSIC = 60;
    } else if (promPSIC <= 1.30) {
      PSIC = 63;
    } else if (promPSIC <= 1.57) {
      PSIC = 65;
    } else if (promPSIC <= 1.96) {
      PSIC = 70;
    } else if (promPSIC <= 2.24) {
      PSIC = 75;
    } else {
      PSIC = 80;
    }

    //IGS Masculino adulto
    if (promIGS <= 0.14) {
      IGS = 30;
    } else if (promIGS <= 0.23) {
      IGS = 35;
    } else if (promIGS <= 0.35) {
      IGS = 40;
    } else if (promIGS <= 0.51) {
      IGS = 45;
    } else if (promIGS <= 0.75) {
      IGS = 50;
    } else if (promIGS <= 0.99) {
      IGS = 55;
    } else if (promIGS <= 1.21) {
      IGS = 60;
    } else if (promIGS <= 1.41) {
      IGS = 63;
    } else if (promIGS <= 1.67) {
      IGS = 65;
    } else if (promIGS <= 2.01) {
      IGS = 70;
    } else if (promIGS <= 2.20) {
      IGS = 75;
    } else {
      IGS = 80;
    }

    //TSP Masculino adulto
    if (TSP <= 7.80) {
      NTSP = 30;
    } else if (TSP <= 13.00) {
      NTSP = 35;
    } else if (TSP <= 19.90) {
      NTSP = 40;
    } else if (TSP <= 27.90) {
      NTSP = 45;
    } else if (TSP <= 36.60) {
      NTSP = 50;
    } else if (TSP <= 46.60) {
      NTSP = 55;
    } else if (TSP <= 54.50) {
      NTSP = 60;
    } else if (TSP <= 59.00) {
      NTSP = 63;
    } else if (TSP <= 68.00) {
      NTSP = 65;
    } else if (TSP <= 77.36) {
      NTSP = 70;
    } else if (TSP <= 82.36) {
      NTSP = 75;
    } else {
      NTSP = 80;
    }

    //IMSP Masculino adulto
    if (promIMSP <= 1.14) {
      IMSP = 30;
    } else if (promIMSP <= 1.29) {
      IMSP = 35;
    } else if (promIMSP <= 1.46) {
      IMSP = 40;
    } else if (promIMSP <= 1.66) {
      IMSP = 45;
    } else if (promIMSP <= 1.88) {
      IMSP = 50;
    } else if (promIMSP <= 2.13) {
      IMSP = 55;
    } else if (promIMSP <= 2.33) {
      IMSP = 60;
    } else if (promIMSP <= 2.47) {
      IMSP = 63;
    } else if (promIMSP <= 2.72) {
      IMSP = 65;
    } else if (promIMSP <= 3.11) {
      IMSP = 70;
    } else if (promIMSP <= 3.48) {
      IMSP = 75;
    } else {
      IMSP = 80;
    }
  }

  //se renderizan en el html los valores T Normalizados calculados
  document.getElementById("SOM").innerHTML = SOM != null ? SOM : '';
  document.getElementById("OBS").innerHTML = OBS != null ? OBS : '';
  document.getElementById("SI").innerHTML = SI != null ? SI : '';
  document.getElementById("DEP").innerHTML = DEP != null ? DEP : '';
  document.getElementById("ANS").innerHTML = ANS != null ? ANS : '';
  document.getElementById("HOS").innerHTML = HOS != null ? HOS : '';
  document.getElementById("FOB").innerHTML = FOB != null ? FOB : '';
  document.getElementById("PAR").innerHTML = PAR != null ? PAR : '';
  document.getElementById("PSIC").innerHTML = PSIC != null ? PSIC : '';
  document.getElementById("IGS").innerHTML = IGS != null ? IGS : '';
  document.getElementById("TSP").innerHTML = NTSP != null ? NTSP : '';
  document.getElementById("IMSP").innerHTML = IMSP != null ? IMSP : '';
  document.getElementById("nombre-paciente").innerHTML = nombre != null ? nombre : '';
  document.getElementById("edad-paciente").innerHTML = edad != null && edad != NaN  ? edad : '';
  document.getElementById("fecha").innerHTML = todayStr;

  //se reinicia el valor de cant respondidas
  TSP = 0;
}
//método para bajar PDF
async function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const element = document.getElementById('mis-resultados');

  const canvas = await html2canvas(element, {
    scale: 1, // High quality
    useCORS: true
  });

  const imgData = canvas.toDataURL('image/jpeg', 0.8);
  const pdf = new jsPDF("p", "mm", "a4");

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  // Get canvas dimensions in mm
  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let position = 0;

  if (imgHeight < pageHeight) {
    // Fits on one page
    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
  } else {
    // Split into multiple pages
    while (position < imgHeight) {
      pdf.addImage(imgData, 'JPEG', 0, -position, imgWidth, imgHeight);
      position += pageHeight;
      if (position < imgHeight) pdf.addPage();
    }
  }
  fecha = document.getElementById("fecha").innerHTML = todayStr;
  nombre = document.getElementById("fullName").value;
  pdf.save(`puntajes_scl90r_${nombre}_${fecha}.pdf`);
}


