//Esta funcion permite conectar el json de los contactos

async function getContacts() {
  let url =
    "https://raw.githubusercontent.com/DiegoDelgado82/serviciotecnico/main/contactsChiefs.json";

  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderContact(sto) {
  alert(sto);

  let contacto = await getContacts();

  var xIndex = 0;
  var name = [];

  contacto.forEach((contacto) => {
    // Solo buscar el mismo punto
    if (Number(contacto.Punto) === sto) {
      alert(contacto.Jefe);
    }
    xIndex++;
  });
}

//renderStore();

// hacer funcion para cargar un combo con las tiendas

// hacer funcion para mostrar los contactos de la tienda seleccionada

async function renderLocals() {
  var ddlx = document.getElementById("Locales");
  removeOptions(ddlx);
  let local = await getContacts();

  local.forEach((local) => {
    var option = document.createElement("OPTION");
    option.innerHTML = local.Punto + "-" + local.Nombre;
    ddlx.options.add(option);
  });
}

function removeOptions(ddl) {
  var j,
    L = document.getElementById("Locales").options.length - 1;
  for (j = L; j >= 0; j--) {
    ddl.remove(j);
  }
}

async function findLocals() {
  document.getElementById("datosTiendaMapa").innerHTML = "";
  var localElegido = document.getElementById("Locales").value;
  let local = await getContacts();
  document.getElementById("Jefe").innerHTML = "";

  local.forEach((local) => {
    if (localElegido === local.Punto + "-" + local.Nombre) {
      document.getElementById("Jefe").innerHTML =
        "<h3 class='h3Jefe'>" +
        local.Jefe +
        "</h3> <li><i class='fab fa-whatsapp'></i> " +
        "<a href='https://wa.me/54" +
        local.Celular +
        "'?text=Hola' target='_blank'>" +
        local.Celular +
        "</a></li><li><i class='fa fa-envelope'></i> " +
        local.Mail +
        "<ul>";
      datosTienda(Number(local.Punto));
    }
  });
}

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
