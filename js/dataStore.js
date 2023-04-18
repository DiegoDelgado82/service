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

async function datosTienda(nro) {
  let tiendas = await getStore();
  let leyenda = "<h3>" + nro + "</h3><br>";
  var xIndex = 0;
  var stores = [];
  var provinces = [];

  tiendas.forEach((tiendas) => {
    if (tiendas.Nro === nro) {
      stores[xIndex] = tiendas.Nombre;
      alert(
        "Nro tienda: " +
          tiendas.Nro +
          " Nombre: " +
          tiendas.Nombre +
          " Direccion: " +
          tiendas.Direccion +
          " Telefono: " +
          tiendas.Telefono
      );
      xIndex++;
    }
  });
  document.getElementById("datostienda").innerHTML =
    leyenda + "</ul><br><br><br><br><h4>Datos de la tienda</h4>";
}

async function datosTiendaMapa(nro) {
  let tiendas = await getStore();
  let leyenda = "<h3>" + nro + "</h3><br>";
  var xIndex = 0;
  var stores = [];
  var provinces = [];

  tiendas.forEach((tiendas) => {
    if (Number(tiendas.Nro) === nro) {
      stores[xIndex] = tiendas.Nombre;
      xIndex++;
      document.getElementById("datosTiendaMapa").innerHTML =
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
        "</li><li>Líder de Tienda: " +
        tiendas.Lider +
        " </li> </ul>";
    }
  });
}
