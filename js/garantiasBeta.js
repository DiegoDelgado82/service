let GE24, GE36, GE48, GE60;

const path = "./scr/garantia.json";


async function getGarantia() {
  //let url = './scr/garantia.json';
  let url =
    "https://raw.githubusercontent.com/DiegoDelgado82/serviciotecnico/main/garantia.json";

  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

function cargarDiv() {
  
  document.getElementById("pCuotas60").textContent =
    document.getElementById("inpCuota").value + " Cuotas";
  document.getElementById("pCuotas48").textContent =
    document.getElementById("inpCuota").value + " Cuotas";
  document.getElementById("pCuotas36").textContent =
    document.getElementById("inpCuota").value + " Cuotas";
  document.getElementById("pCuotas24").textContent =
    document.getElementById("inpCuota").value + " Cuotas";
  document.getElementById("pCuotas0").textContent =
    document.getElementById("inpCuota").value + " Cuotas";

}

async function buscarEan() {
 
  let garantias = await getGarantia();
  let bandera = 0;

  if (
    document.getElementById("ean").textContent != "" &&
    document.getElementById("inpPrecio").value != ""
  ) {
    garantias.forEach((garantia) => {
      if (
        parseInt(garantia.EAN) ===
        parseInt(document.getElementById("ean").textContent)
      ) {
      
        let precio = parseInt(document.getElementById("inpPrecio").value);
    
        let cuota = parseInt(document.getElementById("inpCuota").value);
        GE24 = garantia.G24;
        GE36 = garantia.G36;
        GE48 = garantia.G48;
        GE60 = garantia.G60;

        cuota0 = "$" + Math.trunc(precio / cuota).toString();

       
        if (GE60 === 0) {
          cuota60 = "-";
        } else {
          cuota60 = "$" + Math.trunc((precio + GE60) / cuota).toString();
        }

        if (GE48 === 0) {
          cuota48 = "-";
        } else {
          cuota48 = "$" + Math.trunc((precio + GE48) / cuota).toString();
        }

        if (GE36 === 0) {
          cuota36 = "-";
        } else {
          cuota36 = "$" + Math.trunc((precio + GE36) / cuota).toString();
        }
        if (GE24 === 0) {
          cuota24 = "-";
        } else {
          cuota24 = "$" + Math.trunc((precio + GE24) / cuota).toString();
        }

        document.getElementById("pValorCuotas60").textContent = cuota60;
        document.getElementById("pValorCuotas48").textContent = cuota48;
        document.getElementById("pValorCuotas36").textContent = cuota36;
        document.getElementById("pValorCuotas24").textContent = cuota24;
        document.getElementById("pValorCuotas0").textContent = cuota0;
        document.getElementById("pCuotas60").style.visibility = "visible";
        document.getElementById("pCuotas48").style.visibility = "visible";
        document.getElementById("pCuotas36").style.visibility = "visible";
        document.getElementById("pCuotas24").style.visibility = "visible";
        document.getElementById("pCuotas0").style.visibility = "visible";
        document.getElementById("pValorCuotas60").style.visibility = "visible";
        document.getElementById("pValorCuotas48").style.visibility = "visible";
        document.getElementById("pValorCuotas36").style.visibility = "visible";
        document.getElementById("pValorCuotas24").style.visibility = "visible";
        document.getElementById("pValorCuotas0").style.visibility = "visible";
        document.getElementById("pCantidadMeses60").style.visibility =
          "visible";
        document.getElementById("pCantidadMeses48").style.visibility =
          "visible";
        document.getElementById("pCantidadMeses36").style.visibility =
          "visible";
        document.getElementById("pCantidadMeses24").style.visibility =
          "visible";

        bandera = 1;
      }
    });
    if (bandera === 0) {
      alert("No se encontró el EAN");
    } else {
      cargarDiv();
      document.getElementById("tituloGE").textContent = "La mejor Inversión";
    }
  } else {
    alert("Faltan cargar datos");
  }
}

async function mostarMontoGE() {
  alert(
    "garantía 24: $" +
      GE24 +
      "\ngarantía 36: $" +
      GE36 +
      "\ngarantía 48: $" +
      GE48 +
      "\ngarantía 60: $" +
      GE60
  );
}

async function ocultarOpcionGe(ge) {
  if (
    document.getElementById("pCuotas" + ge.toString()).style.visibility !=
    "hidden"
  ) {
    document.getElementById("pCuotas" + ge.toString()).style.visibility =
      "hidden";
  } else {
    document.getElementById("pCuotas" + ge.toString()).style.visibility =
      "visible";
  }

  if (
    document.getElementById("pValorCuotas" + ge.toString()).style.visibility !=
    "hidden"
  ) {
    document.getElementById("pValorCuotas" + ge.toString()).style.visibility =
      "hidden";
  } else {
    document.getElementById("pValorCuotas" + ge.toString()).style.visibility =
      "visible";
  }

  if (
    document.getElementById("pCantidadMeses" + ge.toString()).style
      .visibility != "hidden"
  ) {
    document.getElementById("pCantidadMeses" + ge.toString()).style.visibility =
      "hidden";
  } else {
    document.getElementById("pCantidadMeses" + ge.toString()).style.visibility =
      "visible";
  }
}

function activarScanner() {
  document.getElementById("btnScanner").disabled = true;
  document.getElementById("ean").disabled = true;
  const $resultados = document.querySelector("#resultado");
  Quagga.init(
    {
      inputStream: {
        constraints: {
          width: 1920,
          height: 1080,
        },
        name: "Live",
        type: "LiveStream",
        target: document.querySelector("#contenedor"), // Pasar el elemento del DOM
      },
      decoder: {
        readers: ["ean_reader"],
      },
    },
    function (err) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Iniciado correctamente");
      Quagga.start();
    }
  );

  Quagga.onDetected((data) => {
    //$resultados.textContent = data.codeResult.code;
    // Imprimimos todo el data para que puedas depurar
    document.getElementById("inpEan").value = data.codeResult.code;
    //buscarCuotas(data.codeResult.code)

    document.getElementById("inpEan").disabled = false;

    Quagga.stop();
    document.getElementById("contenedor").style.visibility = "hidden";

    document.getElementById("divImagen").style.visibility = "visible";
  });

  Quagga.onProcessed(function (result) {});

  if (
    document.getElementById("contenedor").style.visibility === "hidden" ||
    document.getElementById("contenedor").style.visibility === ""
  ) {
    document.getElementById("contenedor").style.visibility = "visible";
    document.getElementById("divImagen").style.visibility = "hidden";
  } else {
    document.getElementById("contenedor").style.visibility = "hidden";
    document.getElementById("divImagen").style.visibility = "visible";
  }
}
