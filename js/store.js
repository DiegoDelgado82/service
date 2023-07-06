async function getStore() {
  let url =
    "https://raw.githubusercontent.com/DiegoDelgado82/serviciotecnico/main/tiendas.json";

  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderStore(sto) {
 
  mostrarMapa(sto);
  document.getElementById("datosTiendaMapa").innerHTML = "";
  let tiendas = await getStore();
  let leyenda = "<h3>" + sto + "</h3><br>";
  var xIndex = 0;
  var stores = [];
  var provinces = [];
  if (sto == "Buenos Aires") {
    document.getElementById("demo").innerHTML = "";
    document.getElementById("cmbBsAs").hidden = false;
    document.getElementById("cmbGba").hidden = true;

    if (document.getElementById("cmbBsAs").value === "GBA") {
      document.getElementById("cmbGba").hidden = false;
      // continuar para que busque por zona

      tiendas.forEach((tiendas) => {
        if (
          tiendas.Provincia === "Buenos Aires" &&
          tiendas.Zona === document.getElementById("cmbGba").value
        ) {
         
          stores[xIndex] = tiendas.Nombre;
          leyenda =
            leyenda +
            '<li style="cursor: grab" onclick=datosTienda(' +
            tiendas.Nro +
            ') class="listStore">' +
            stores[xIndex] +
            "</li> ";
            
          xIndex++;
        }
      });
      document.getElementById("demo").innerHTML = leyenda + "</ul>";
    } else {
      tiendas.forEach((tiendas) => {
        if (
          tiendas.Provincia === sto &&
          document.getElementById("cmbBsAs").value != "Partido" &&
          tiendas.Localidad === "Provincia"
        ) {
          stores[xIndex] = tiendas.Nombre;
          leyenda =
            leyenda +
            '<li style="cursor: grab" onclick=datosTienda(' +
            tiendas.Nro +
            ') class="listStore">' +
            stores[xIndex] +
            "</li> ";
          xIndex++;
        }
      });
      document.getElementById("demo").innerHTML = leyenda + "</ul>";
    }
  } else {
    document.getElementById("cmbBsAs").hidden = true;
    document.getElementById("cmbBsAs").value = "Partido";
    document.getElementById("cmbGba").hidden = true;

    tiendas.forEach((tiendas) => {
      if (tiendas.Provincia === sto) {
        stores[xIndex] = tiendas.Nombre;
        leyenda =
          leyenda +
          '<li style="cursor: grab" onclick=datosTienda(' +
          tiendas.Nro +
          ') class="listStore">' +
          stores[xIndex] +
          "</li> ";
        xIndex++;
      }
    });
    document.getElementById("demo").innerHTML = leyenda + "</ul>";
  }
}

//renderStore();

async function datosTienda(nro) {
 
  let tiendas = await getStore();
  let leyenda = "<h3>" + nro + "</h3><br>";
  var xIndex = 0;
  var stores = [];
  var provinces = [];
 
  tiendas.forEach((tiendas) => {
    if (Number(tiendas.Nro) === nro) {
      
      stores[xIndex] = tiendas.Nombre;
      xIndex++;
      
      document.getElementById("datosTienda").innerHTML =
        "<h4>Datos de la tienda " +
        tiendas.Nro +
        "-" +
        tiendas.Nombre +
        "</h4><ul><li>Dirección: " +
        tiendas.Direccion +
        "</li><li>Provincia: " +
        tiendas.Provincia +
        "</li><li>Telefono: " +
        tiendas.Telefono +
        "</li><li>Líder de Tiendas: " +
        tiendas.Lider +
        " </li></ul>";
    }
  });
}

function mostrarMapa(provincia) {
  switch (provincia) {
    case "Buenos Aires":
      document.getElementById("imagenMapa").src =
        "../img/provincias/BuenosAires.png";
      break;
    case "CABA":
      document.getElementById("imagenMapa").src = "../img/provincias/CABA.png";
      break;
    case "Catamarca":
      document.getElementById("imagenMapa").src =
        "../img/provincias/Catamarca.png";
      break;
    case "Chaco":
      document.getElementById("imagenMapa").src = "../img/provincias/Chaco.png";
      break;
    case "Chubut":
      document.getElementById("imagenMapa").src = "../img/provincias/Chubut.png";
      break;
    case "Córdoba":
      document.getElementById("imagenMapa").src =
        "../img/provincias/Cordoba.png";
      break;
    case "Corrientes":
      document.getElementById("imagenMapa").src =
        "../img/provincias/Corrientes.png";
      break;
    case "Entre Ríos":
      document.getElementById("imagenMapa").src =
        "../img/provincias/EntreRios.png";
      break;
    case "Formosa":
      document.getElementById("imagenMapa").src =
        "../img/provincias/Formosa.png";
      break;
    case "Jujuy":
      document.getElementById("imagenMapa").src = "../img/provincias/Jujuy.png";
      break;
    case "La Pampa":
      document.getElementById("imagenMapa").src =
        "../img/provincias/LaPampa.png";
      break;
    case "La Rioja":
      document.getElementById("imagenMapa").src =
        "../img/provincias/LaRioja.png";
      break;
    case "Mendoza":
      document.getElementById("imagenMapa").src =
        "../img/provincias/Mendoza.png";
      break;
    case "Misiones":
      document.getElementById("imagenMapa").src =
        "../img/provincias/Misiones.png";
      break;
    case "Neuquén":
      document.getElementById("imagenMapa").src =
        "../img/provincias/Neuquen.png";
      break;
    case "Río Negro":
      document.getElementById("imagenMapa").src =
        "../img/provincias/RioNegro.png";
      break;
    case "Salta":
      document.getElementById("imagenMapa").src = "../img/provincias/Salta.png";
      break;
    case "San Juan":
      document.getElementById("imagenMapa").src =
        "../img/provincias/SanJuan.png";
      break;
    case "San Luis":
      document.getElementById("imagenMapa").src =
        "../img/provincias/SanLuis.png";
      break;
    case "Santa Cruz":
      document.getElementById("imagenMapa").src =
        "../img/provincias/SantaCruz.png";
      break;
    case "Santa Fe":
      document.getElementById("imagenMapa").src =
        "../img/provincias/SantaFe.png";
      break;
    case "Tierra del Fuego":
      document.getElementById("imagenMapa").src =
        "../img/provincias/TierraFuego.png";
      break;
    case "Tucumán":
      document.getElementById("imagenMapa").src =
        "../img/provincias/Tucuman.png";
      break;

    default:
      document.getElementById("imagenMapa").src = "../img/argentina.png";
  }
}

function selectorCategorias(cate) {
  targList = document.getElementsByClassName("gae");
  document.getElementsByClassName("gae");
  if (targList) {
    for (var x = 0; x < targList.length; x++) {
      targList[x].style.visibility = "hidden";
    }
  }
  targList2 = document.getElementsByClassName("tecnologia");
  document.getElementsByClassName("tecnologia");
  if (targList2) {
    for (var x = 0; x < targList2.length; x++) {
      targList2[x].style.visibility = "hidden";
    }
  }
  targList3 = document.getElementsByClassName("garantia");
  document.getElementsByClassName("garantia");
  if (targList3) {
    for (var x = 0; x < targList3.length; x++) {
      targList3[x].style.visibility = "hidden";
    }
  }

  switch (cate) {
    case "gae":
      document.getElementsByClassName("gae").hidden = false;
      targList = document.getElementsByClassName("gae");
      document.getElementsByClassName("gae");
      if (targList) {
        for (var x = 0; x < targList.length; x++) {
          targList[x].style.visibility = "visible";
        }
      }
      break;
    case "tecnologia":
      targList = document.getElementsByClassName("tecnologia");
      document.getElementsByClassName("tecnologia");
      if (targList) {
        for (var x = 0; x < targList.length; x++) {
          targList[x].style.visibility = "visible";
        }
      }
      break;
    case "garantia":
      targList = document.getElementsByClassName("garantia");
      document.getElementsByClassName("garantia");
      if (targList) {
        for (var x = 0; x < targList.length; x++) {
          targList[x].style.visibility = "visible";
        }
      }
      break;
    default:
      break;
  }
}
