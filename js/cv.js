var originalImage = null;
var grayImage = null;
var redImage = null;
var windowImage = null;
var canvas = document.getElementById("miCanvas");
var imagenPrueba = document.getElementById("imagenPrueba").textContent;

function generarPDF() {
  var elemento = document.querySelector("#principal");

  let f = new Date(document.getElementById("date-selector").value);
 
  let fechaFile = (f.getDate() + 1) + "-" + (f.getMonth() + 1) + "-" + f.getFullYear();
  
  
  
  var str1 =  document.getElementById("cuadroImagen").innerHTML+" "+fechaFile;
  
  var res = str1;
  var texto = document.getElementById("temasCampos5").value;
  //    texto = "<pre>"+texto.replace(/\n/g, "<br>")+"</pre>";
  texto = texto.replace(/\n/g, "<br>");
  document.getElementById("divTemasCampos5").innerHTML = texto;

  var texto2 = document.getElementById("temasCampos4").value;
  texto2 = texto2.replace(/\n/g, "<br>");
  document.getElementById("divTemasCampos4").innerHTML = texto2;
  cambiarFecha()

  var opt = {
    margin: 1,
    filename: res,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "cm", format: "a4", orientation: "portrait" },
  };

  html2pdf().set(opt).from(elemento).save();
}

function loadImage() {
  alert(document.getElementById("x").value);
  var file = document.getElementById("x");
  originalImage = new SimpleImage(file);
  grayImage = new SimpleImage(file);
  redImage = new SimpleImage(file);
  windowImage = new SimpleImage(file);
  originalImage.drawTo(canvas);
  imagenPrueba.src = file;
}

function cargarDatos(element1, element2) {
  document.getElementById(element1).textContent =
    document.getElementById(element2).value;
}

function agregarColaborador() {
  document.getElementById("listaColaborador").innerHTML = 
    document.getElementById("listaColaborador").innerHTML+"- " +
    document.getElementById("colaborador").value +
    "<br>";
}

function borrarColaborador() {
  document.getElementById("listaColaborador").innerHTML = "";
}

function escuchar(id_div) {
  const elNavegadorEsCompatible = () => {
    if (
      navigator.userAgent.indexOf("Chrome") ||
      navigator.userAgent.indexOf("Edge") ||
      navigator.userAgent.indexOf("Safari")
    )
      return true;
    alert("El Navegador no es compatible con el Reconocimiento de voz");
    return false;
  };

  if (elNavegadorEsCompatible()) {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition ||
      window.mozSpeechRecognition ||
      window.msSpeechRecognition)();

    recognition.lang = "es-US";

    recognition.onend = (event) => {
      recognition.start();
    };
    recognition.onresult = (resultado) => {
      manejarResultado(resultado);
    };

    recognition.start();
  }

  const manejarResultado = (resultado) => {
    if (confirm(id_div))
      document.getElementById(id_div).value =
        resultado.results[0][0].transcript;
    else recognition.stop();
  };
}

function escuchar2() {
  "use strict";

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  document.querySelector("button").addEventListener("click", () => {
    let recogLang = document.querySelector("[name=lang]:checked");
    recognition.lang = recogLang.value;
    recognition.start();
  });

  recognition.addEventListener("result", (e) => {
    let last = e.results.length - 1;
    let text = e.results[last][0].transcript;

    output.textContent = text;

    document.getElementById("temasCampos2").value = e.results[0][0].confidence;
  });

  recognition.addEventListener("speechend", () => {
    recognition.stop();
  });

  recognition.addEventListener("error", (e) => {
    output.textContent = "Error: " + e.error;
  });

  function synthVoice(text, lang) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    utterance.lang = lang;
    utterance.text = text;
    synth.speak(utterance);
  }

  document.querySelector(".speak").addEventListener("click", () => {
    let i = document.querySelector(".en");
    let text = i.value || i.placeholder;
    synthVoice(text, "es-US");
  });
}

function cambiarFecha() {
  let f = new Date(document.getElementById("date-selector").value);
  document.getElementById("fecha").innerHTML ="Fecha: "+
    (f.getDate() + 1) + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
}

const inputImagen = document.getElementById("input-imagen");
const contenedor = document.getElementById("contenedor");

inputImagen.addEventListener("change", () => {
  const file = inputImagen.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    contenedor.style.backgroundImage = `url(${reader.result})`;
  });

  if (file) {
    reader.readAsDataURL(file);
  }
});


function cargarImagen(inputId, contenedorId) {
  const inputImagen = document.getElementById(inputId);
  const contenedor = document.getElementById(contenedorId);

  inputImagen.addEventListener("change", () => {
    const file = inputImagen.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      contenedor.style.backgroundImage = `url(${reader.result})`;
    });

    if (file) {
      reader.readAsDataURL(file);
    }
  });
}
